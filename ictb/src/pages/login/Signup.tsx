import React, { useEffect, useState } from 'react'
import style from "./signup.module.css"
import axios from 'axios';

interface MemberFrom {
    userid: string;
    password: string;
    name: string;
    email: string;
    regDate?: string;

}

const Signup: React.FC = () => {

    const [form, setForm] = useState<MemberFrom>({
        userid: '',
        password: '',
        name: '',
        email: '',
    });

    const [idMessage, setIdMessage] = useState('');
    const [code, setCode] = useState('');
    const [emailMessage, setEmailMassage] = useState('');
    const [isEmailVerirfied, setIsEmailVerirfied] = useState(false);
    const urls = `${process.env.REACT_APP_BACK_END_URL}`;
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    };
    const emailCheck = async () => {
        try {
            const res = await axios.post(`${urls}/api/auth/emailCheck`, {
                email: form.email,
            });
            if (res.data === 0) {

                alert('인증번호가 발송되었습니다.');
                setEmailMassage('인증번호가 발송되었습니다.');
                setIsEmailVerirfied(false);
            } else {
                setEmailMassage('이미 사용 중인 이메일입니다.');
            }

        } catch (err) {
            alert('이메일 인증 중 오류 발생'); console.error(err);
        }
    };
    const checkEmailCode = async () => {
        try {
            const res = await axios.post(`${urls}/api/auth/emailCheck/certification`, {
                email: form.email,
                code: code
            });
            const result = res.data;
            if (result.success) {
                alert("이메일 인증 성공!!!!!");
                setIsEmailVerirfied(true);
            } else {
                if (result.reason === "exceeded") {
                    alert('3회이상 인증번호 틀려 더이상 시도할수 없음 \n 다시 인증번호를 요청')
                } else if (result.reason === 'expired') {
                    alert('인증번호 유효시간이 만료 \n 다시 인증번호 요청');
                } else if (result.reason === 'wrong') {
                    alert('인증번호가 일치하지 않습니다.');
                }
            }
        } catch (err) {
            alert('인증번호 확인 오류'); console.error(err);
        }
    };


    const idCheck = async () => {
        try {
            const res = await axios.get(`${urls}/member/idCheck?id=${form.userid}`);
            if (res.data === 0) {
                alert("사용 가능한 아이디입니다.");
                setIdMessage("사용 가능한 아이디입니다.");
            } else {
                setIdMessage("이미 사용중인 아이디입니다.");
            }
        } catch (err) {
            alert("아이디 중복 확인 실패");
            console.error(err);
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();

        if (!isEmailVerirfied) {
            alert("이메일 인증을 먼저 완료해주세요.");
            return;
        }
        try {
            const formData = new FormData();
            formData.append("userid", form.userid);
            formData.append("password", form.password);
            formData.append("name", form.name);
            formData.append("email", form.email);
            await axios.post(`${urls}/member/signup, formData`);
            alert("회원가입 완료");
            //   navigate("/");
        } catch (err) {
            console.error("회원가입 오류:", err);
            alert("회원가입 실패");
        }

    }
    return (

        <div className={style.wrapper} style={{ backgroundColor: '#f8f9fa' }}>
            <div className={style.container}>
                <div className='tag'>
                    <h1><img src='img/logo.png' style={{ width: '75px', height: 'auto' }}></img><strong style={{ margin: '10px' }}>나만의 캠퍼스</strong></h1>
                </div>
                <form className={style.form} onSubmit={handleSubmit}>
                    <h2 className="form-title">회원가입</h2>
                    <div className="mb-4">
                        <label>이름</label>
                        <input type="name" className="form-control" placeholder="이름을 입력해주세요" name="name" onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label>아이디</label>
                        <input type="id" className="form-control" placeholder="아이디를 입력해주세요" name='userid'
                            onChange={handleChange} />
                        <button type='button' className='btn w-30' id={style.btn} style={{ float: 'right', marginTop: '5px' }}
                            onClick={idCheck}
                        >중복확인</button>
                        {idMessage && <div className="col-12 text-danger small">{idMessage}</div>}
                    </div>
                    <div className="mb-4">
                        <label>비밀번호</label>
                        <input type="password" className="form-control" placeholder="비밀번호를 입력해주세요" name="password" onChange={handleChange} />
                        {/* <div className="error-message">비밀번호는 대,소문자 특수문자를 포함해야 합니다.</div> */}
                    </div>
                    <div className="mb-5">
                        <label>이메일</label>
                        <input type="email" className="form-control" placeholder="이메일을 입력해주세요" name="email" onChange={handleChange} />
                        <button type='submit' className='btn w-30' id={style.btn} style={{ float: 'right', marginTop: '5px' }}
                            onClick={emailCheck}>인증하기</button>
                        {emailMessage && <div className="col-12 text-danger small">{emailMessage}</div>}
                    </div>
                    <div className="mb-5">
                        <label>인증번호</label>
                        <input type="text" className="form-control" placeholder="인증번호를 입력해주세요"
                            onChange={e => setCode(e.target.value)} />


                        <button type='submit' className='btn w-30' id={style.btn} style={{ float: 'right', marginTop: '5px' }}
                            onClick={checkEmailCode}
                        >확인</button>
                    </div>
                    <button type="submit" className="btn w-100" id={style.btn}>가입하기</button>
                </form>

            </div>
        </div>
    )
}

export default Signup