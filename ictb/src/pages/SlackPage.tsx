import React, { useEffect, useState } from "react";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import Header from "./Header";

interface Title {					//메인 아이템(한개)
	title: string;
	url_main: string;
	subTitles?: SubTitle[];
}

interface SubTitle {				//세부 아이템(한개)
	subTitle: string;
	url_sub: string;
}
interface LayoutProps {
  children: React.ReactNode;
  onLogout: () => void; 
}

const sideItems: Title[] = [		//본격 더미데이터(메인 아이템들)
	{
		title: '게시판',
		url_main: 'board',
		subTitles: [{ subTitle: '자유 게시판', url_sub: 'free/list' },
		{ subTitle: '정보 게시판', url_sub: 'info/list' },
		{ subTitle: '홍보 게시판', url_sub: 'Prom/list' }]
	},
	{
		title: 'ToDo',
		url_main: 'todo'
	},
	{
		title: '분실물',
		url_main: 'lost',
		subTitles: [{ subTitle: '분실물 발생', url_sub: 'lost/list' },
		{ subTitle: '분실물 습득', url_sub: 'find/list' }]
	}
]

const SlackPage: React.FC<LayoutProps> = ({ children, onLogout }) => {

	const locArray = useLocation().pathname.split('/');
	const url_main = locArray[1];
	const url_sub = locArray[2];

  const navigate = useNavigate();
  const handleLogout = () => {
      onLogout();
      navigate("/login");
  };

	return (
		<div>
			<div>
				<div className="slack-container d-flex" style={{ position: "fixed", width: "100%", height: "100vh" }}>
					<div className="workspace-bar d-flex flex-column align-items-center justify-content-between" style={{ width: '80px' }}>
						<div className="d-flex flex-column">
							{
								sideItems.map((e) => (
									<Link to={`/${e.url_main}${e.subTitles ? `/${e.subTitles[0].url_sub}` : ''}`} className="no-style">
										<span className="workspace-icon" style={{ color: "#d7c4daff" }}>
											<AutoAwesomeMosaicIcon />
										</span>
										<p className="nanum-gothic-regular" style={{ fontFamily: "Paperozi", fontSize: "13px" }}>{e.title}</p>
									</Link>
								))
							}
						</div>
						<div className="p-1 mb-4" style={{ fontFamily: "Paperozi", fontSize: "13px" }} onClick={handleLogout}>
              로그아웃</div>
						</div>
					

					{
						sideItems.map((e) => ( e.url_main === url_main ? 
							<div className="sidebar p-3 nanum-gothic-regular">
								<div className="workspace-title">{e.title}</div>
								<div className="nav flex-column">
									{e.subTitles?.map((ee) => (
										<Link to={`/${e.url_main}/${ee.url_sub}`} className="nav-link text-hover">{ee.subTitle}</Link>
									))}
								</div>
							</div> : <></>
						))
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