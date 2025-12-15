import React from "react";
import Todo from "./todo/Todo";
import BoardList from "./board/BoardList";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import LostFound from "./lostfound/LostFound";
import LostList from './lost/LostList';
import LostForm from './lost/LostForm';
import style from "./lost.module.css";
import { hover } from "@testing-library/user-event/dist/hover";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const SlackPage: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <div>
        <div className="slack-container d-flex" style={{ position: "fixed", width: "100%", height: "100vh" }}>
          <div className="workspace-bar d-flex flex-column align-items-center">
            <Link to="/board" className="no-style">
              <span className="workspace-icon" style={{ color: "#d7c4daff" }}>
                <AutoAwesomeMosaicIcon />
              </span>
              <p
                className="nanum-gothic-regular"
                style={{ fontFamily: "Paperozi", fontSize: "13px" }}
              >
                게시판
              </p>
            </Link>
            <Link to="/todo" className="no-style" >
              <span className="workspace-icon" style={{ color: "#d7c4daff" }}>
                <AutoAwesomeMosaicIcon />
              </span>
              <p
                className="nanum-gothic-regular"
                style={{ fontFamily: "Paperozi", fontSize: "13px" }}
              >
                ToDo
              </p>
            </Link>
            <Link to="/lost" className="no-style">
              <span className="workspace-icon" style={{ color: "#d7c4daff" }}>
                <AutoAwesomeMosaicIcon />
              </span>
              <p
                className="nanum-gothic-regular"
                style={{ fontFamily: "Paperozi", fontSize: "13px" }}
              >
                찾아용
              </p>
            </Link>
          </div>

          <div className="sidebar p-3 nanum-gothic-regular">
            <div className="workspace-title">게시판 목록</div>

            <div className="section-title mt-4">일반 게시판</div>
            <div className="nav flex-column">

              {/* <a href="#" ># 자유게시판</a> */}
              <a className="nav-link text-hover" ># 자유게시판</a>
              <a className="nav-link text-hover" ># 정보 공유</a>
              <a className="nav-link text-hover"># 홍보 게시판</a>
              <a className="nav-link text-hover"># 동아리</a>
            </div>

            <div className="section-title mt-4">학사 게시판</div>
            <div className="nav flex-column">
              <a className="nav-link text-hover"># 캠퍼스 공지사항</a>
              <a className="nav-link text-hover"># 학과별 공지사항</a>
              <a className="nav-link text-hover"># 건의사항</a>
            </div>
          </div>
          <div style={{ flex: 1, overflow: "auto" }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlackPage;
