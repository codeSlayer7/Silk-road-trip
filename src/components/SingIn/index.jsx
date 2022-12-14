
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useGoogleLogin } from '@react-oauth/google';
import { LoginByGoogle } from "../../port/index";
import axios from "axios"

function App() {

  const Login = useGoogleLogin({
    onSuccess: async respose => {
      try {
        const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            "Authorization": `Bearer ${respose.access_token}`
          }
        })

        console.log(res.data)
        // // Извлекаем данные пользователя из ответа
        // const { name, email, picture } = res;

        // // Сохраняем данные в localStorage
        // localStorage.setItem('userName', name);
        // localStorage.setItem('userEmail', email);
        // localStorage.setItem('userPicture', picture);
      } catch (err) {
        console.log(err)
      }
    }
  });

  const onSuccess = (credentialResponse) => {
    LoginByGoogle(credentialResponse.credential)
  }

  return (
    <div className="App">
      <header className="App-header flex justify-center ">
        <GoogleLogin
          onClick={Login}
          onSuccess={onSuccess}
          onError={() => {
            console.log('Login Failed');
          }} />
      </header>
    </div>
  );
}

export default App;