import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
interface Member {
  mid: string;
  mname: string;
  email: string;
}
interface AuthContextProps {
  loading:boolean;
  member: Member | null;
  checkLogin: () => void;
  isLoggedIn: boolean;
  login: (
    mid: string,
    password: string
  ) => Promise<"success" | "fail" | "error">;
  logout: () => void;
  updateMemberName: (mname: string) => void;
  updateMemberEmail: (email: string) => void;
}
// 1단계: Context 생성
const AuthContext = createContext<AuthContextProps | undefined>(undefined);
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,  
}) => {
  const [member, setMember] = useState<Member | null>(null);
  const [loading, setLoading] = useState(true);
  //로그인 상태를 체크 해주는 함수
  const checkLogin = async () => {
    
    try {
      // withCredentials: true
      // backend에서도 .allowCredentials(true) 를 설정해야 함.(세션을 사용해서 동기화 할때 사용 )
      const res = await axios.get(
        `${process.env.REACT_APP_BACK_END_URL}/login/session`,
        {
          withCredentials: true,
        }
      );
      console.log(res.data);
      if (res.data?.mid) {
        setMember(res.data); // 로그인 된 정보를 받아서 useState에 저장한다.
      } else {
        setMember(null); //로그인 상태가 아니라면 useState를 초기화
      }
    } catch {
      setMember(null); // 문제가 발생해도 초기화
    }
  };

  const login = async (
    mid: string,
    password: string
  ): Promise<"success" | "fail" | "error"> => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACK_END_URL}/login/dologin`,
        { mid, password },
        { withCredentials: true }
      );
      if (res.data === "success") {
        await checkLogin(); // 로그인 성공 후 세션 정보 불러오기
        return "success";
      } else {
        return "fail";
      }
    } catch {
      return "error";
    }
  };

  const logout = async () => {
    await axios.get(`${process.env.REACT_APP_BACK_END_URL}/login/dologout`, {
      withCredentials: true,
    });
    setMember(null);
  };
  //새로 고침을 해도 초기화로 checkLogin() 을 호출해서 유지 시킨다.
 useEffect(() => {
  const initAuth = async () => {
    try {
      const savedMember = localStorage.getItem("member");
      if (savedMember) {
        setMember(JSON.parse(savedMember));
      }
      await checkLogin(); 
    } finally {
      setLoading(false); 
    }
  };

  initAuth();
}, []);
  const updateMemberName = (mname: string) => {
    setMember((prev) => (prev ? { ...prev, mname } : prev));
  };
  const updateMemberEmail = (email: string) => {
    setMember((prev) => (prev ? { ...prev, email } : prev));
  };
  const isLoggedIn = member !== null;
  // 2단계: Context에 값 제공
  return (
    <AuthContext.Provider
      value={{
        loading,
        member,
        isLoggedIn,
        checkLogin,
        login,
        logout,
        updateMemberName,
        updateMemberEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
// 3단계: useAuth() 에서 값을 사용할 수 있도록 제공공
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("AuthContext 은 AuthProvider  안에서만 사용해야 합니다.");
  return context;
};
// 1단계: Context 생성
// const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// // 2단계: Context에 값 제공
// <AuthContext.Provider value={{ member, setMember, login, logout, checkLogin }}>
//   {children}
// </AuthContext.Provider>

// // 3단계: useAuth() 에서 값을 사용할 수 있도록 제공공
// const context = useContext(AuthContext);
/*
useContext는 createContext()로 만든 전역 데이터를 하위 컴포넌트 어디에서든 꺼내 쓸 수 있도록 해주는 훅.
즉, AuthContext.Provider가 제공하는 값 (member, login, logout 등)을 받아오는 역할을 하는 것이다.
*/
