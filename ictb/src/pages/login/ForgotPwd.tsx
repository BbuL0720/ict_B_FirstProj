import React, { useEffect, useState } from "react";
import style from "./signup.module.css";
import { useNavigate } from "react-router-dom";

const ForgotPwd: React.FC = () => {
  const navigate = useNavigate();

  const changepassword = () => {
    navigate("/updatepwd");
  };

  const emailCertification = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <div className={style.wrapper} style={{ backgroundColor: "#f8f9fa" }}>
      <div className={style.container}>
        <div className="tag">
          <h1>
            <img
              src="img/logo.png"
              style={{ width: "75px", height: "auto" }}
            ></img>
            <strong style={{ margin: "10px" }}>나만의 캠퍼스</strong>
          </h1>
        </div>
        <form className={style.form}>
          <h2 className="form-title">비밀번호 찾기</h2>
          <div className="mb-4">
            <label>이름</label>
            <input
              type="name"
              className="form-control"
              placeholder="이름을 입력해주세요"
            />
          </div>
          <div className="mb-4">
            <label>아이디</label>
            <input
              type="id"
              className="form-control"
              placeholder="아이디를 입력해주세요"
            />
          </div>
          <div className="mb-5">
            <label>이메일</label>
            <input
              type="email"
              className="form-control"
              placeholder="이메일을 입력해주세요"
            />
            <button
              type="submit"
              className="btn w-30"
              id={style.btn}
              style={{ float: "right", marginTop: "5px" }}
              onClick={emailCertification}
            >
              인증하기
            </button>
          </div>
          <div className="mb-5">
            <label>인증번호</label>
            <input
              type="text"
              className="form-control"
              placeholder="인증번호를 입력해주세요"
            />
            <button
              type="submit"
              className="btn w-30"
              onClick={changepassword}
              id={style.btn}
              style={{ float: "right", marginTop: "5px" }}
            >
              확인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPwd;
