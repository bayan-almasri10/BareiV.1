import LoginForm from "@/components/Login/Form";
import {login} from "@/lib/getters";
export default function Login () {
  return (
    <div>
      <LoginForm login={login}/>
    </div>
  );
}
