import React, { useEffect, useState } from "react";
import { useAuth } from "../AuthProvider";
import axios from "axios";

const Friend: React.FC = () => {
  const { member } = useAuth();
  const [members, setMembers] = useState<any[]>([]); // 친구 추천 목록
  const [selected, setSelected] = useState<Set<string>>(new Set()); // 선택된 친구 신청 대상
  const [incoming, setIncoming] = useState<any[]>([]); // 받은 친구 요청
  const [friends, setFriends] = useState<any[]>([]); // 내 친구 목록
  const [outgoing, setOutgoing] = useState<any[]>([]); // 보낸 친구 요청
  const [rejected, setRejected] = useState<Set<string>>(new Set()); // 거절된 요청 ID 모음
  const [refresh, setRefresh] = useState(0);
  // 로그인된 사용자가 확인되면 친구 관련 데이터들을 불러온다
  useEffect(() => {
    if (!member) return;
    axios
      .get(`${process.env.REACT_APP_BACK_END_URL}/api/friends/members`, {
        withCredentials: true,
      })
      .then((res) => setMembers(res.data));
    axios
      .get(`${process.env.REACT_APP_BACK_END_URL}/api/friends/incoming`, {
        withCredentials: true,
      })
      .then((res) => setIncoming(res.data));
    axios
      .get(`${process.env.REACT_APP_BACK_END_URL}/api/friends/myfriends`, {
        withCredentials: true,
      })
      .then((res) => setFriends(res.data));
    axios
      .get(`${process.env.REACT_APP_BACK_END_URL}/api/friends/outgoing`, {
        withCredentials: true,
      })
      .then((res) => {
        setOutgoing(res.data);
        const rejectedSet: Set<string> = new Set(
          res.data
            .filter((r: any) => r.status === "rejected")
            .map((r: any) => r.receiver_id as string)
        );
        setRejected(rejectedSet);
      });
  }, [member, refresh]); //refresh가 바뀌면 다시 fetch 하겠다.

  // 친구 신청 및 삭제 토글을 처리할 함수 : 체크박스를 클릭할 때 선택된 유저 ID를 Set 구조로 토글(있으면 제거, 없으면 추가) 하기
  // 체크박스에 선택된 친구 신청 대상을 저장하기 위한 Set구조의 useState 에 저장한다.
  const toggleFriendSelect = (mid: string) => {
    setSelected((prev) => {
      const newSet = new Set(prev);
      //현재 선택된 Set 안에 mid가 이미 있는지 확인 해서 이미 있다면 (true)
      //newSet.delete(mid)가 실행이 되어서  체크 해제: 선택 목록에서 제거
      // 만약 없다면 (false) : newSet.add(mid)를 실행해서  체크: 선택 목록에 추가
      newSet.has(mid) ? newSet.delete(mid) : newSet.add(mid);
      return newSet;
    });
  };
  // 체크 박스에서 선택한 회원에게 친구 요청을  전송한다.
  const sendRequest = async () => {
    for (const receiverId of selected) {
      await axios.post(
        `${process.env.REACT_APP_BACK_END_URL}/api/friends/request`,
        { receiverId },
        { withCredentials: true }
      );
    }
    alert("친구 신청 완료");
    setSelected(new Set());
    setRefresh((prev) => prev + 1);
  };
  //수락 및 거절 버튼을 클릭 하면 respond 로 보내서 쳐리함
  const receiveResponse = async (id: number, action: string) => {
    await axios.post(
      `${process.env.REACT_APP_BACK_END_URL}/api/friends/respond`,
      { id, action },
      { withCredentials: true }
    );
    alert(`${action === "accept" ? "수락" : "거절"} 처리됨`);
    window.location.reload();
  };

  return (
    <div className="container py-4">
      <div className="card shadow-sm border-0">
        <div className="card-body">
          <h2 className="mb-3  fw-bold">{member?.mname}님의 친구페이지</h2>

          {/* 친구 추천 */}
          <h5 className="mt-4 text-purple fw-semibold">친구 추천 목록</h5>
          <ul className="list-group list-group-flush">
            {members
              .filter((m) => !friends.find((f) => f.mid === m.mid))
              .filter(
                (m) =>
                  !outgoing.find(
                    (o) => o.receiver_id === m.mid && o.status === "pending"
                  )
              )
              .map((m) => (
                <li
                  key={m.mid}
                  className="list-group-item d-flex align-items-center"
                >
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    checked={selected.has(m.mid)}
                    onChange={() => toggleFriendSelect(m.mid)}
                    disabled={
                      !rejected.has(m.mid) &&
                      outgoing.find((o) => o.receiver_id === m.mid)
                    }
                    // checked={selected.has(m.userid)}
                  />
                  <span className="fw-medium">
                    {m.mname} ({m.mid})
                  </span>
                </li>
              ))}
          </ul>

          <div className="mt-3">
            <button
              onClick={sendRequest}
              className="btn"
              style={{
                border: "1px solid white",
                backgroundColor: "#9d76e6",
              }}
            >
              친구 신청
            </button>{" "}
          </div>

          <hr />

          {/* 받은 요청 */}
          <h5 className="text-purple fw-semibold">받은 친구 요청</h5>
          <ul className="list-group">
            {incoming.map((req) => (
              <li
                key={req.frid}
                className="list-group-item d-flex align-items-center"
              >
                {req.req_id} 님이 친구 요청을 보냈습니다.
                <div style={{ margin: "20px" }}>
                  <button
                    className="btn btn-sm btn-outline-success"
                    onClick={() => receiveResponse(req.frid, "accept")}
                  >
                    수락
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger m-2"
                    onClick={() => receiveResponse(req.frid, "rejected")}
                  >
                    거절
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <hr />

          <h5 className="text-purple fw-semibold">친구 목록</h5>
          <ul className="list-group">
            {friends.map((f) => (
              <li key={f.mid} className="list-group-item">
                {f.mname} ({f.mid})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Friend;
