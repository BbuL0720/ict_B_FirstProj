import React from "react";
import Todo from "./todo/Todo";
import BoardList from "./board/BoardList";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import LostFound from "./lostfound/LostFound";

interface LayoutProps {
  children: React.ReactNode;
}

const SlackPage: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <div>
        <div className="slack-container d-flex" style={{ position: "fixed" }}>
          <div className="workspace-bar d-flex flex-column align-items-center">
            <button className="no-style">
              <span className="workspace-icon" style={{ color: "#d7c4daff" }}>
                <AutoAwesomeMosaicIcon />
              </span>
              <p
                className="nanum-gothic-regular"
                style={{ fontFamily: "Paperozi", fontSize: "13px" }}
              >
                게시판
              </p>
            </button>
            <button className="no-style">
              <span className="workspace-icon" style={{ color: "#d7c4daff" }}>
                <AutoAwesomeMosaicIcon />
              </span>
              <p
                className="nanum-gothic-regular"
                style={{ fontFamily: "Paperozi", fontSize: "13px" }}
              >
                ToDo
              </p>
            </button>
            <button className="no-style">
              <span className="workspace-icon" style={{ color: "#d7c4daff" }}>
                <AutoAwesomeMosaicIcon />
              </span>
              <p
                className="nanum-gothic-regular"
                style={{ fontFamily: "Paperozi", fontSize: "13px" }}
              >
                찾아용
              </p>
            </button>
          </div>

          <div className="sidebar p-3 nanum-gothic-regular">
            <div className="workspace-title">게시판 목록</div>

            <div className="section-title mt-4">일반 게시판</div>
            <div className="nav flex-column">
              <a className="nav-link active"># 자유게시판</a>
              <a className="nav-link"># 정보 공유</a>
              <a className="nav-link"># 홍보 게시판</a>
              <a className="nav-link"># 동아리</a>
            </div>

            <div className="section-title mt-4">학사 게시판</div>
            <div className="nav flex-column">
              <a className="nav-link"># 캠퍼스 공지사항</a>
              <a className="nav-link"># 학과별 공지사항</a>
              <a className="nav-link"># 건의사항</a>
            </div>
          </div>

          {/* <div className="chat-area d-flex flex-column">
            <div className="chat-header d-flex justify-content-between align-items-center px-3">
              <div className="channel-title"># 자유게시판</div>
            </div>
          </div> */}
          {children}
        </div>
      </div>

      {/* <div className="todo"></div> */}
    </div>
  );
};

export default SlackPage;
