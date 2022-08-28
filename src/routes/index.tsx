import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

import { TabRoutes } from './tab.routes';

import { Loading } from '../components/Loading';
import { SignRoutes } from './sign.routes';

export function Routes(){
  const [isLoading, setIsLoading] = useState(true);//estado pra ver se ta carregando
  const [user, setUser] = useState<FirebaseAuthTypes.User>();
  //anotar as informações se o usuario esta autenticado ou não

  useEffect(() =>  //usado pra ver se nosso usuario esta logado ou não 
  {
    const subscriber = auth()
    .onAuthStateChanged(response => {
      setUser(response);
      setIsLoading(false);
    });

    return subscriber;
  }, []);

  if(isLoading) {
    return<Loading />
  }

  return (
    <NavigationContainer>
      {user ? <TabRoutes /> : <SignRoutes /> } 
    </NavigationContainer>
    //se o usuario existir mostrar AppRoutes, se não mostrar SignIn
  )
}