import axios from 'axios'; 
export async function refreshAccessToken(appId: string, secretKey: string,refreshToken:string) { 
        try {
            const accessToken = await getUserAccessToken(refreshToken, appId, secretKey);
            return accessToken;
        } catch (error) {
            console.error('Failed to refresh access token:', error);
            return null
        }
    
}

async function getUserAccessToken(refreshToken: string, appId: string, secretKey: string): Promise<string> {
    try {
        const response = await axios.post('https://oauth.zaloapp.com/v4/access_token', {
            refresh_token: refreshToken,
            app_id: appId,
            grant_type: 'refresh_token'
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'secret_key': secretKey
            }
        });

        return response.data.access_token;
    } catch (error) {
        console.error('Error getting user access token:', error);
        throw error;
    }
}





export async function loginWithZalo(code_challenge:string,state:string) {
    try {
      console.log("login now....");
      const callbackUrl=encodeURIComponent('https://dashboard-v2-one-delta.vercel.app/auth/callback/zalo') 
    //  const askPermissionUrl = `https://oauth.zaloapp.com/v4/permission?app_id=${VITE_APP_ID}&redirect_uri=${callbackUrl}&code_challenge=${code_challenge}&state=${state}`;
    const askPermissionUrl = `https://oauth.zaloapp.com/v4/permission?app_id=4220696386833253137&redirect_uri=${callbackUrl}&code_challenge=${code_challenge}&state=${state}`;
      console.log(askPermissionUrl);

      // Navigate to Zalo login page
      window.location.href = askPermissionUrl;
    } catch (error) {
      console.error("Error during Zalo login:", error);
      //    Handle error appropriately, maybe show a message to the user
    
    
    
    }
  }