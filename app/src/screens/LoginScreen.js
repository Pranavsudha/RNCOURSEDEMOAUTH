import React, { useState } from 'react';
import {Alert} from 'react-native'
import LoadingOverlay from '../components/ui/LoadingOverlay';
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from '../components/util/auth';
import { login } from '../components/util/auth';

function LoginScreen() {
  const [isAuthenticated, setIsAunthenticated] = useState(false);

  async function loginHandler({email, password}) {
    setIsAunthenticated(true);
    try {
    await login(email, password); //forward this to createUser()
    } catch(error){
     Alert.alert('Authenticated Failed','Could not login. Please check your credentials or try again.'
     )
    }
    setIsAunthenticated(false);
  }

  if (isAuthenticated) {
    return <LoadingOverlay message="Logging User In" />;
  }


  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;

