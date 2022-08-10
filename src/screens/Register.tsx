import { useState } from 'react';
import { Alert } from 'react-native';

import  firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { VStack } from 'native-base';

import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { Input } from '../components/Input';

export function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [patrimony, setPatrimony] = useState('');
  const [description, setDescription] = useState('');
  const navigation = useNavigation();

  function handleNewOrderRegister(){
    if(!patrimony || !description){//valida se o patrimony ou o description foi informado, se não retorna o alert 
     return Alert.alert('Registrar', 'Preencha todos os campos.');
    }

    setIsLoading(true);

    firestore()//pra coletar as informações e mandar para o banco de dados 
    .collection('orders')
    .add({//novo documento
      patrimony,
      description,
      status: 'open',
      created_at: firestore.FieldValue.serverTimestamp()
    })
     .then (() => { //se deu tudo certo
      Alert.alert('Solicitação', 'Solicitação registrada com sucesso.');
      navigation.goBack();
    })
    .catch((error) => {
      console.log('erro ao registrar solicitação: ', error);
      setIsLoading(false);
      return Alert.alert(
        'Solicitação',
        'Não foi possível registrar o pedido.'
      );
    });
  }

  return (
    <VStack flex={1} p={6} bg='gray.600'>
      <Header title='Nova Solicitação'/> 

      <Input 
        placeholder='Número do patrimônio'
        mt={4}
        onChangeText={setPatrimony}
      />

      <Input 
        placeholder='Descrição do problema'
        flex={1}
        mt={5}
        multiline
        textAlignVertical='top'
        onChangeText={setDescription}
      />

      <Button 
        title='Cadastrar'
        mt={5}
        isLoading={isLoading}
        onPress={handleNewOrderRegister}
      />
    </VStack>
  );
}


