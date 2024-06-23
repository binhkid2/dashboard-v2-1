import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAtom, useAtomValue } from "jotai";
import {
  codeVerifierAtom,
  userInfoStore,
  zaloAccessTokenAtom,
  zaloRefreshTokenAtom,
} from "../../../../store";
import { pb, pbUrl } from "../../../../pocketbase";
import promptData from "../../../../lib/prompt.json";
import { toastError } from "../../../../utils/toastError";
import { useEffect } from "react";
const CallBackZalo: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // Create a URLSearchParams object from the query string
  const searchParams = new URLSearchParams(location.search);
  const [userInfo, setUserInfo] = useAtom(userInfoStore);
  const [, setZaloRefreshToken] = useAtom(zaloRefreshTokenAtom);
  const [, setZaloAccessToken] = useAtom(zaloAccessTokenAtom);

  // This effect will run every time userInfo changes
  useEffect(() => {
    console.log('userInfo changed:', userInfo);
  }, [userInfo]);

  const codeVerifier = useAtomValue(codeVerifierAtom);

  useEffect(() => {
    const processAuthentication = async () => {
      // Retrieve specific parameters
      const code = searchParams.get("code");
      const state = searchParams.get("state");
      const code_challenge = searchParams.get("code_challenge");
      console.log("code is:", code);
      console.log("state is:", state);
      console.log("code_challenge is:", code_challenge);
      console.log("codeVerifier is:", codeVerifier);

      if (code && state && code_challenge && codeVerifier) {
        try {
          const url = "https://oauth.zaloapp.com/v4/access_token";
          const data = new URLSearchParams();
          data.append("code", code);
          data.append("app_id", import.meta.env.VITE_APP_ID); //VITE_APP_ID
          data.append("grant_type", "authorization_code");
          data.append("code_verifier", codeVerifier);

          const config = {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              secret_key: import.meta.env.VITE_SECRET_KEY, //VITE_SECRET_KEY
            },
          };

          const response = await axios.post(url, data, config);
          // Handle successful response
          console.log("Response is:", response.data);

          // store the Refresh Token
          setZaloAccessToken(response.data.access_token);
          setZaloRefreshToken(response.data.refresh_token);

          console.log('access_token for getUserInfo', response.data.access_token);
          const initUser={
            name: 'Unknow Name',
            zaloId:'',
            avatar:''
        }
        let userInfoReturn = initUser
          try{
            const headers = {
              'access_token': response.data.access_token
          };
  
          // Make the GET request using Axios
          const res = await axios.get('https://graph.zalo.me/v2.0/me?fields=id,name,picture', { headers });
          // Handle successful response
          console.log('User Info:', res.data);
           userInfoReturn=  {
            name: response.data.name,
            zaloId: response.data.id,
            avatar:response.data.picture.data.url
          }
          console.log('success userInfoReturn',userInfoReturn)
  // Check if userInfo is stored to database yet? if not then save it.
  const zaloIdReturn = userInfoReturn.zaloId
  console.log(' zaloIdReturn',zaloIdReturn)
  const searchUrl = `${pbUrl}/api/collections/users/records?filter=(zaloId=${zaloIdReturn})`;

  const dbResponse = await axios.get(searchUrl);
  console.log(dbResponse.data);
  if (dbResponse.data.items.length > 0) {
    // User in database already
    const oldUser = {
      id: dbResponse.data.items.id,
      name: dbResponse.data.items.name,
      zaloId: dbResponse.data.items.zaloId,
      avatar: dbResponse.data.items.avatar,
      currentCredit: dbResponse.data.items.currentCredit,
      prompt: dbResponse.data.items.prompt || [],
      proDayLeft: dbResponse.data.items.proDayLeft,
    };
    setUserInfo(oldUser);
  } else {
    // User not in database yet. Create new user in the database
    const data = {
      password: "12345678",
      passwordConfirm: "12345678",
      name: userInfoReturn.name,
      currentCredit: 3000, // Free trial 3000
      prompt: promptData,
      proDayLeft: 0,
      zaloId: userInfoReturn.zaloId,
      avatar: userInfoReturn.avatar,
    };
    const createdUserResponse = await pb.collection("users").create(data);
    const createdUser = {
      id: createdUserResponse.id,
      name: createdUserResponse.name,
      zaloId: createdUserResponse.zaloId,
      avatar: createdUserResponse.avatar,
      currentCredit: createdUserResponse.currentCredit,
      prompt: createdUserResponse.prompt || [],
      proDayLeft: createdUserResponse.proDayLeft,
    };
    setUserInfo(createdUser);
  }
  navigate("/profile");


          }
          catch{
             toastError('Error when get user Info:' );
            userInfoReturn=  initUser
          }

        } catch (error) {
           toastError('Error during authentication process:');
          toastError("Error when saving user to database");
        }
      } else {
        toastError("Error: bad request");
      }
    };

    processAuthentication();
  }, [codeVerifier, navigate, searchParams, setZaloAccessToken, setZaloRefreshToken, setUserInfo]);

  return <p>Loading...</p>;
};

export default CallBackZalo;