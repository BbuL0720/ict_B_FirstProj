import React from 'react'
import { Link } from 'react-router-dom'
import './mypage.css'

const MyPage: React.FC = () => {
  return (
    <div className='backcolor'>
      <div className="mypage">
      <h1 className="mypage-title">마이페이지</h1>

      <section className="card">
        <h2>프로필 정보</h2>

        <div className="field">
          <label>아이디</label>
          <input type="text" value="test123" readOnly />
        </div>

        <div className="field">
          <label>이름</label>
          <input type="text" value="홍길동" readOnly/>
        </div>

        <div className="field">
          <label>이메일</label>
          <input type="text" value="test@naver.com" readOnly/>
        </div>
        <div className='emailfix' style={{textAlign:'right'}}>
        <button className="btn">수정</button>
        </div>
      </section>

      <section className="card">
        <h2>비밀번호 변경</h2>

        <div className="field">
          <label>현재 비밀번호</label>
          <input type="password" />
        </div>

        <div className="field">
          <label>새 비밀번호</label>
          <input type="password" />
        </div>

        <div className="field">
          <label>새 비밀번호 확인</label>
          <input type="password" />
        </div>

        <button className="btn">비밀번호 변경</button>
      </section>
      
      
    </div>
     </div>
    
  )
}

export default MyPage