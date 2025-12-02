import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SchoolIcon from "@mui/icons-material/School";
import SettingsIcon from "@mui/icons-material/Settings";

const Header: React.FC = () => {
  return (
    <div
    className="position-fixed start-0 top-0 vh-100 d-flex flex-column p-3"
    style={{ width: "150px", backgroundColor: "orange" }}
     >  
      <ul className="list-unstyled mt-4 flex-grow-1 ps-2">
        <li className="mb-3">
          <button
            className="btn btn-link text-dark text-decoration-none p-0"
          >
            <DashboardIcon /> 게시판
          </button>
        </li>

        <li className="mb-3">
          <button
            className="btn btn-link text-dark text-decoration-none p-0"
          >
            <FormatListBulletedIcon /> To-do
          </button>
        </li>

        <li className="mb-3">
          <button
            className="btn btn-link text-dark text-decoration-none p-0"
          >
            <SchoolIcon /> MyPage
          </button>
        </li>

       
      </ul>

      <button
        className="btn btn-link text-dark text-decoration-none p-0 mt-auto"
      >
        <SettingsIcon /> Setting
      </button>
    </div>
  );
};

export default Header;