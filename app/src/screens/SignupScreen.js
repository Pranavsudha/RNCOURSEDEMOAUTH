import {Alert} from 'react-native'
import react,{useState} from 'react'
import LoadingOverlay from '../components/ui/LoadingOverlay';
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from '../components/util/auth';

function SignupScreen() {
  const [isAuthenticated, setIsAunthenticated] = useState(false);

  async function signupHandler({email, password}) {
    setIsAunthenticated(true);
    try {
    await createUser(email, password); //forward this to createUser()
    } catch(error){
     Alert.alert('Authentication Failed')
     
    }
    setIsAunthenticated(false);
  }

  if (isAuthenticated) {
    return <LoadingOverlay message="Creating User" />;
  }
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;

