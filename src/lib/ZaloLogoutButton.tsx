
import { FC, useEffect } from "react";
import { useAtom } from "jotai";
import { CodeChallengeAtom, codeVerifierAtom, initUser, stateAtom, userInfoStore } from "../store";
import { Button } from "@nextui-org/react";
import { LogoIcon } from "./Reused/LogoIcon";

export const ZaloLogOutButton: FC = () => {
  
  const [, setCodeVerifier] = useAtom(codeVerifierAtom);
  const [, setCodeChallenge] = useAtom(CodeChallengeAtom);
  const [, setState] = useAtom(stateAtom);
  const [userInfo, setUserInfo] = useAtom(userInfoStore);
 // This effect will run every time userInfo changes
 useEffect(() => {
  console.log('userInfo changed:', userInfo);
  // Add any other side effects you want to perform when userInfo changes
}, [userInfo]);
  const handleLogout = () => {
    setCodeVerifier(null);
      setCodeChallenge(null);
      setState(null);
      setUserInfo( initUser)
    window.location.href ='/'
  };

  return (
    <>
  <LogoIcon/>
        <Button color="primary" onClick={()=>{handleLogout()}}  className="flex items-center btn   border rounded-lg shadow-md px-6 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2  ">
           <img className='w-6 h-6 mx-3' src="https://res.cloudinary.com/yenvietsoft/image/upload/v1708806294/sithucong/zalo_app-icon_xbgcud.png" alt="zalo-login" />
            <span>Đăng xuất</span>
        </Button>
    </>
  );
}
