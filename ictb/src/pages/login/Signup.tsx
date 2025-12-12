import React from 'react'
import style from "./signup.module.css"
const Signup: React.FC = () => {
  return (
    <div>
      <div className={style.container}>
        <form className={style.form}>
            <h2 className="form-title">회원가입</h2>
            <div className="mb-3">
                <label>아이디</label>
                <input type="email" className="form-control" placeholder="아이디를 입력해주세요"/>
            </div>
            <div className="mb-5">
                <label>이메일</label>              
                <input type="email" className="form-control" placeholder="이메일을 입력해주세요"/>
                <button type='submit' className='btn btn-primary w-30' style={{float:'right', marginTop:'6px'}}>인증하기</button>            
            </div>
            <div className="mb-4">
                <label>비밀번호</label>
                <input type="password" className="form-control" placeholder="비밀번호를 입력해주세요"/>
                {/* <div className="error-message">비밀번호는 대,소문자 특수문자를 포함해야 합니다.</div> */}
            </div>
            <button type="submit" className="btn btn-primary w-100">가입하기</button>
        </form>
    </div>
    </div>
  )
}

export default Signup