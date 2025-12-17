import React, { useState } from "react";
import { useLocation } from "react-router-dom";

interface HeaderProps {
  title?: string;
  subTitle?:Array<string>;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div>
      <div
        className="d-flex align-items-center px-4"
        style={{
          width: '100%',
          height: '60px',
          background: '#ebebebff',
          position: 'relative'
        }}
      >
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
            display: 'flex', alignItems: 'center'}}>
          <p className="m-0 me-3">
            홍길동 님, 환영합니다
          </p>
          <div
            style={{
              position: 'relative',
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              background: '#0d6efd',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
            onMouseEnter={() => setShowInfo(true)}
            onMouseLeave={() => setShowInfo(false)}
          >

            <span>홍</span>


            {showInfo && (
              <div
                style={{
                  position: 'absolute',
                  top: '0px',
                  right: '0',
                  width: '200px',
                  padding: '15px',
                  background: 'white',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  zIndex: 100,
                  color: '#333',
                  fontSize: '0.9rem',
                  textAlign: 'left'
                }}
                onMouseEnter={() => setShowInfo(true)}
                onMouseLeave={() => setShowInfo(false)}
              >
                <strong>내 정보</strong>
                <hr style={{ margin: '8px 0' }} />
                <div>이름: 홍길동</div>
                <div>학과: 경영학과</div>
                <div></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;