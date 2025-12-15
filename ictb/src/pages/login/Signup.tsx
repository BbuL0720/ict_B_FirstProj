import React, { useEffect, useState } from 'react'
import style from "./signup.module.css"

const Signup: React.FC = () => {
  
  
  return (
    
    <div className={style.wrapper} style={{backgroundColor:'#f8f9fa'}}>
      <div className={style.container}>     
          <div className='tag'>
        <h1><img src='img/logo.png' style={{width:'75px',height:'auto'}}></img><strong style={{margin:'10px'}}>나만의 캠퍼스</strong></h1>
        </div>       
        <form className={style.form}>     
            <h2 className="form-title">회원가입</h2>
            <div className="mb-4">
                <label>이름</label>
                <input type="name" className="form-control" placeholder="이름을 입력해주세요"/>
            </div>
            <div className="mb-4">
                <label>아이디</label>
                <input type="id" className="form-control" placeholder="아이디를 입력해주세요"/>
                <button type='button' className='btn btn-primary w-30' style={{float:'right',marginTop:'5px'}}>중복확인</button>
            </div>
             <div className="mb-4">
                <label>비밀번호</label>
                <input type="password" className="form-control" placeholder="비밀번호를 입력해주세요"/>
                {/* <div className="error-message">비밀번호는 대,소문자 특수문자를 포함해야 합니다.</div> */}
            </div>
            <div className="mb-5">
                <label>이메일</label>              
                <input type="email" className="form-control" placeholder="이메일을 입력해주세요"/>
                <button type='submit'className='btn btn-primary w-30' style={{float:'right', marginTop:'5px'}}>인증하기</button>                   
            </div>
            <div className="mb-5">
                <label>인증번호</label>              
                <input type="text" className="form-control" placeholder="인증번호를 입력해주세요"/>
                <button type='submit'className='btn btn-primary w-30' style={{float:'right', marginTop:'5px'}}>확인</button>                   
            </div>
            <button type="submit" className="btn btn-primary w-100">가입하기</button>
        </form>
        
    </div>
    </div>
  )
}

export default Signup