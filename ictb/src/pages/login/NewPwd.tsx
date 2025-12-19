import React, { useEffect, useState } from 'react'
import style from "./signup.module.css"

const NewPwd: React.FC = () => {

	const [pw1, setPw1] = useState('');
	const [pw2, setPw2] = useState('');

	const inputPw1 = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPw1(e.target.value);
	}
	const inputPw2 = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPw2(e.target.value);
	}

	const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (pw1 && pw2 && pw1 === pw2) {
			//fetch().then(navigate());
		}
	}

	return (

		<div className={style.wrapper} style={{ backgroundColor: '#f8f9fa' }}>
			<div className={style.container}>
				<div className='tag'>
					<h1><img src='img/logo.png' style={{ width: '75px', height: 'auto' }}></img><strong style={{ margin: '10px' }}>나만의 캠퍼스</strong></h1>
				</div>
				<form className={style.form} onSubmit={handlesubmit}>
					<h2 className="form-title">비밀번호 찾기</h2>
					<div className="mb-4">
						<label>새 비밀번호</label>
						<input type="password" className="form-control" placeholder="새로운 비밀번호를 입력해주세요" onChange={inputPw1} />
					</div>
					<div className="mb-4">
						<label>비밀번호 확인</label>
						<input type="password" className="form-control" placeholder="동일한 비밀번호를 입력해주세요" onChange={inputPw2} />
						{!(pw1 === pw2) && <span className="text-danger">비밀번호가 일치하지 않습니다</span>}
						<button type='submit' className='btn w-30' style={{ float: 'right', marginTop: '5px', color: 'white', background: '#7a44e0' }}>
							확인
						</button>
					</div>
				</form>

			</div>
		</div>
	)
}

export default NewPwd