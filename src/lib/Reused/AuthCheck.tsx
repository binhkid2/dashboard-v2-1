 
import './AuthCheck.scss'
import { ZaloLogInButton } from '../ZaloLoginButton';
import {   useAtomValue } from 'jotai';
import { userInfoStore } from '../../store';

interface DashboardLayoutProps {
  children: React.ReactNode;
}
export default function AuthCheckContent({ children }: DashboardLayoutProps) { 
  const userInfo = useAtomValue(userInfoStore);
  return (
<>
  {userInfo.zaloId !== "" ? (
    <>{children}</>
  ) : (
    <div className="container-scss">
      <div className="top-scss"></div>
      <div className="bottom-scss"></div>
      <div className="center-scss">
        <ZaloLogInButton />
      </div>
    </div>
  )}
</>

  );
}