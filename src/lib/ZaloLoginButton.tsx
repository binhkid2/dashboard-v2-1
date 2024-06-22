 
import { FC } from "react"; 
import { useAtom } from "jotai";
import { CodeChallengeAtom, codeVerifierAtom, stateAtom } from "../store";
import { loginWithZalo } from "../utils/zaloFunc";
import { Button } from "@nextui-org/react";
import { LogoIcon } from "./Reused/LogoIcon";
import { generate_pkce_codes, generate_state_param } from "../utils/authUtils";

export const ZaloLogInButton: FC = () => {
  
  const [, setCodeVerifier] = useAtom(codeVerifierAtom);
  const [, setCodeChallenge] = useAtom(CodeChallengeAtom);
  const [, setState] = useAtom(stateAtom);
 
  const handleLogin = () => {
    const pkceCodes =  generate_pkce_codes();
    const codeVerifier = pkceCodes.verifier
    setCodeVerifier(codeVerifier);
    const code_challenge =pkceCodes.challenge;
    setCodeChallenge(code_challenge);
    const state = generate_state_param();
    setState(state);
      loginWithZalo(code_challenge, state);
    
  };

  return (
    <>
  <LogoIcon/>
        <Button color="primary" onClick={()=>{handleLogin()}}  className="flex items-center btn   border rounded-lg shadow-md px-6 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2  ">
           <img className='w-6 h-6 mx-3' src="https://res.cloudinary.com/yenvietsoft/image/upload/v1708806294/sithucong/zalo_app-icon_xbgcud.png" alt="zalo-login" />
            <span>Đăng nhập với Zalo</span>
        </Button>
    </>
  );
}
