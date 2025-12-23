import React from 'react'

import style from '../mypage/mypage.module.css'
import { useNavigate } from 'react-router-dom'

const UpdatePwd: React.FC = () => {
  const navigate = useNavigate();
  const changePassword = () => {
    alert("변경되었습니다.")

    navigate('/login')
  }
  return (
    <div>
      <div className={style.mypage}>
        <h1 className={style.mypagetitle}>비밀번호 변경</h1>

        <section className={style.card}>
          <h2>비밀번호 변경</h2>
          <div className={style.field}>
            <label>새 비밀번호</label>
            <input type="password" />
          </div>

          <div className={style.field}>
            <label>새 비밀번호 확인</label>
            <input type="password" />
          </div>

          <button onClick={changePassword} className={style.fix}>비밀번호 변경</button>
        </section>


      </div>
    </div>
  )
}

export default UpdatePwd