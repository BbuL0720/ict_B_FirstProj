import React from 'react'
import { Link } from 'react-router-dom'
import style from './mypage.module.css'

const MyPage: React.FC = () => {
  return (
    <div>
      <div className={style.mypage}>
      <h1 className={style.mypagetitle}>마이페이지</h1>

      <section className={style.card}>
        <h2>프로필 정보</h2>

        <div className={style.field}>
          <label>아이디</label>
          <input type="text" value="test123" readOnly />
        </div>

        <div className={style.field}>
          <label>이름</label>
          <input type="text" value="홍길동" readOnly/>
        </div>

        <div className={style.field}>
          <label>이메일</label>
          <input type="text" value="test@naver.com" readOnly/>
        </div>
        <div className={style.emailfix} style={{textAlign:'right'}}>
        <button className={style.fix}>이메일수정</button>
        </div>
      </section>

      <section className={style.card}>
        <h2>비밀번호 변경</h2>

        <div className={style.field}>
          <label>현재 비밀번호</label>
          <input type="password" />
        </div>

        <div className={style.field}>
          <label>새 비밀번호</label>
          <input type="password" />
        </div>

        <div className={style.field}>
          <label>새 비밀번호 확인</label>
          <input type="password" />
        </div>

        <button className={style.fix}>비밀번호 변경</button>
      </section>
      
      
    </div>
     </div>
    
  )
}

export default MyPage