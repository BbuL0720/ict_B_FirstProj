import React from 'react'

const Login: React.FC = () => {
  // 로그인 세션 (spring처리)
  return (
     <div className="login-page bg-light min-vh-100 d-flex align-items-center">
        <div className="container">
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                  <h3 className="mb-3">로그인하세요 </h3>
                    <div className="bg-white shadow" style={{borderRadius:'25px'}}>
                        <div className="row">
                            <div className="col-md-7 pe-0">
                                <div className="form-left h-100 py-5 px-5">
                                    <form action="" className="row g-4">
                                            <div className="col-12">
                                                <label>아이디<span className="text-danger">*</span></label>
                                                <div className="input-group">
                                                    <div className="input-group-text"><i className="bi bi-person-fill"></i></div>
                                                    <input type="text" className="form-control" placeholder="아이디를 입력하세요"/>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <label>비밀번호<span className="text-danger">*</span></label>
                                                <div className="input-group">
                                                    <div className="input-group-text"><i className="bi bi-lock-fill"></i></div>
                                                    <input type="password" className="form-control" placeholder="비밀번호를 입력하세요"/>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="inlineFormCheck"/>
                                                    <label className="form-check-label" htmlFor="inlineFormCheck">아이디 기억하기</label>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <a href="#" className="float-end" style={{color:'#7a44e0'}}>비밀번호를 잊어버렸어요</a>
                                            </div>

                                            <div className="col-12">
                                                <button type="submit" className="btn px-4 float-end mt-4" style={{color:'white', backgroundColor:'#7a44e0'}}>로그인</button>
                                            </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-5 ps-0 d-none d-md-block" >
                                <div className="form-right h-100 text-white text-center pt-5"
                                style={{backgroundColor:'#7a44e0', borderBottomRightRadius:'25px', borderTopRightRadius:'25px'}}>
                                    <i className="bi bi-bootstrap"></i>
                                    <h2 className="fs-1" style={{marginTop:'45px    '}}>나만의 캠퍼스</h2>
                                    
                                    <img src="img/logoW.png" style={{width:'150px', height:'auto'}} />
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                
                    <p className="text-end text-secondary mt-3">ICT B조 1차 프로젝트</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login