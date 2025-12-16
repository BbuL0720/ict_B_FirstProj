import React, { useEffect, useState } from "react";
import Todo from "./todo/Todo";
import BoardList from "./board/BoardList";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import LostFound from "./lostfound/LostFound";
import LostList from './lost/LostList';
import LostForm from './lost/LostForm';
import style from "./lost.module.css";
import { hover } from "@testing-library/user-event/dist/hover";
import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}
interface LayoutTab {
  title: string,
  param: string,
  subTitle: subTitle[]
}
interface subTitle {
  id: number,
  param: string,
  subtitle: string
}

const SlackPage: React.FC<LayoutProps> = ({ children }) => {
  const [title, setTitle] = useState<LayoutTab | null>(null)
  const board = { title: '게시판', param: '/board/list', subTitle: [{ id: 1, param: '/1', subtitle: '자유 게시판' }, { id: 2, param: '/2', subtitle: '정보 공유' }, { id: 1, param: '/3', subtitle: '홍보 게시판' }] }
  const todo = { title: 'TODO', subTitle: [{ id: 1, subtitle: '자유 게시판' }, { id: 1, subtitle: '정보 공유' }, { id: 1, subtitle: '홍보 게시판' }] }
  const lost = { title: '찾아용', param: '/lost/list', subTitle: [{ id: 1, param: '/1', subtitle: '잃어버렸어요' }, { id: 1, param: '/2', subtitle: '발견했어요' }] }
  const location = useLocation();
  // useEffect(() => {
  //   console.log(location)
  //   setTitle(board)
  // }, [])


  useEffect(() => {
    const path = location.pathname.split("/")[1];

    if (path === "board") {
      console.log("board");
      setTitle(board)
    } else if (path === "lost") {
      setTitle(lost)
    }
  }, [location.pathname]);

  // const changeTItle = (id: string) => {
  //   if (id == '게시판') {
  //     setTitle(board)
  //   } else if (id == 'TODO') {
  //     setTitle(null)
  //   } else if (id == '찾아용') {
  //     setTitle(lost)
  //   }
  // }

  return (
    <div>
      <div>
        <div className="slack-container d-flex" style={{ position: "fixed", width: "100%", height: "100vh" }}>
          <div className="workspace-bar d-flex flex-column align-items-center justify-content-between">
            <div className="d-flex flex-column ">
              <Link to="/board/list/1" className="no-style" >
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
              <Link to="/lost/list/1" className="no-style" >
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
            <div className="p-1 mb-4" style={{ fontFamily: "Paperozi", fontSize: "13px" }}> <Link to="/logout">로그아웃</Link></div>
          </div>

          {title && title.title != "TODO" && (
            <div className="sidebar p-3 nanum-gothic-regular">
              <div className="workspace-title"
              // onClick={ changeTItle("게시판")}
              >{title.title}</div>

              {title.subTitle.map((e) => (
                <div className="nav flex-column">

                  {/* <a href="#" ># 자유게시판</a> */}
                  <Link to={`${title.param}${e.param}`} className="nav-link text-hover" ># {e.subtitle}</Link>
                </div>
              ))}
            </div>
          )
          }


          <div style={{ flex: 1, overflow: "auto" }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlackPage;
