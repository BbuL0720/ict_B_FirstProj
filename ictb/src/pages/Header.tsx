import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../style/styles.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
interface sideProps {
  title: string;
}

const Header: React.FC<sideProps> = ({ title }) => {
  const [showInfo, setShowInfo] = useState(false);
  const showmypage = () => {

  }
  return (
    <div>

      <div
        className="d-flex align-items-center px-4"
        style={{
          width: '100%',
          height: '60px',
          background: '#ebebebff',
          position: 'relative'
        }}>
        <h1
          className='nanum-gothic-regular m-0'
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '2rem',
            whiteSpace: 'nowrap'
          }}
        >
          {title}
        </h1>
        <div style={{
          position: 'absolute',
          right: '5%',
          display: 'flex', alignItems: 'center'
        }}>
          <p className="m-0 me-3">
            홍길동 님, 환영합니다</p>

          <div className="myshowstyle">
            <div onClick={showmypage}>
              <Link to={'/mypage'} className="mypagebutton" >
                <AccountCircleIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;