import react,{useState} from 'react'
import LoadingOverlay from '../components/ui/LoadingOverlay';
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from '../components/util/auth';

function SignupScreen() {
  const [isAuthenticated, setIsAunthenticated] = useState(false);

  async function signUpHandler({email, password}) {
    setIsAunthenticated(true);
    await createUser(email, password); //forward this to createUser()
    setIsAunthenticated(false);
  }

  if (isAuthenticated) {
    return <LoadingOverlay message="Creating User" />;
  }
  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;

