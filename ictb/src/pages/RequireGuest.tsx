// comp/RequireGuest.tsx
import { JSX } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthProvider";


const RequireGuest: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { member } = useAuth();
 const location = useLocation();
  // 이미 로그인 되어 있으면 login/signup 접근 차단
  console.log("member "+member)
  if (member) {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default RequireGuest;
