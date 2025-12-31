import React from 'react'

const Friend: React.FC = () => {
  const member = {
    userid: "user01",
    name: "홍길동",
  };

  // 전체 회원 목록
  const members = [
    { userid: "user01", name: "김철수" },
    { userid: "user02", name: "이영희" },
    { userid: "user03", name: "박민수" },
    { userid: "user04", name: "정지훈" },
    { userid: "user05", name: "한유진" },
  ];

  // 이미 친구인 사용자
  const friends = [
    { userid: "user02", name: "이영희" },
  ];

  // 내가 보낸 친구 요청
  const outgoing = [
    {
      id: 1,
      requester_id: "user01",
      receiver_id: "user03",
      status: "pending", // 대기중
    },
    {
      id: 2,
      requester_id: "user01",
      receiver_id: "user05",
      status: "rejected", // 거절됨
    },
  ];

  // 내가 받은 친구 요청
  const incoming = [
    {
      id: 3,
      requester_id: "user04",
      receiver_id: "user01",
      status: "pending",
    },
  ];

  // 거절당한 사용자 Set (재요청 가능 표시용)
  const rejected = new Set(["user05"]);

  // 체크박스 선택 상태
  const selected = new Set();

  return (
    <div className="container py-4">
      <div className="card shadow-sm border-0">
        <div className="card-body">
          <h2 className="mb-3  fw-bold">
            {member.name}님의 마이페이지
          </h2>

          {/* 친구 추천 */}
          <h5 className="mt-4 text-purple fw-semibold">친구 추천 목록</h5>
          <ul className="list-group list-group-flush">
            {members
              .filter((m) => !friends.find((f) => f.userid === m.userid))
              .filter(
                (m) =>
                  !outgoing.find(
                    (o) => o.receiver_id === m.userid && o.status === "pending"
                  )
              )
              .map((m) => (
                <li
                  key={m.userid}
                  className="list-group-item d-flex align-items-center"
                >
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                  // checked={selected.has(m.userid)}
                  />
                  <span className="fw-medium">
                    {m.name} ({m.userid})
                  </span>
                </li>
              ))}
          </ul>

          <div className="mt-3">
            <button className="btn" style={{ border:'1px solid #977197ff', color:'#977197ff' }}>친구 신청</button>
          </div>

          <hr />

          {/* 받은 요청 */}
          <h5 className="text-purple fw-semibold">받은 친구 요청</h5>
          <ul className="list-group">
            {incoming.map((req) => (
              <li
                key={req.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>{req.requester_id} 님이 친구 요청을 보냈습니다.</span>
                <div>
                  <button className="btn btn-sm btn-outline-success me-2">
                    수락
                  </button>
                  <button className="btn btn-sm btn-outline-danger">
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
              <li key={f.userid} className="list-group-item">
                {f.name} ({f.userid})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Friend