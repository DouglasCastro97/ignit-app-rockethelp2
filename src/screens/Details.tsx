import { useEffect, useState } from 'react';
import { Alert, Image } from 'react-native';

import firestore from '@react-native-firebase/firestore';

import { useRoute, useNavigation } from '@react-navigation/native';

import { HStack, Text, VStack, useTheme, ScrollView, Box } from 'native-base';

import { Header } from '../components/Header';
import { OrderProps } from '../components/Order';
import { Loading } from '../components/Loading';
import { CardDetails } from '../components/CardDetails';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

import { OrderFirestoreDTO } from '../DTOs/OrderFirestoreDTO';
import { dateFormat } from '../utils/firestoreDateFormat';
import { CircleWavyCheck, ClipboardText, DesktopTower, Hourglass, Star } from 'phosphor-react-native';

import StarRating from 'react-native-star-rating-widget';


type RouteParams = {
  orderId: string;
};

type OrderDetails = OrderProps & {
  description: string;
  solution: string;
  closed: string;
};

export function Details() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingClosing, setIsLoadingClosing] = useState(false);
  const [evaluation, setEvaluation] = useState('')
  const [solution, setSolution] = useState('');
  const [order, setOrder] = useState<OrderDetails>({} as OrderDetails);

  
  const [rating, setRating] = useState(0);

  const {colors} = useTheme();

  const navigation = useNavigation();

  const route = useRoute();
  const { orderId } = route.params as RouteParams;

  function Estrelas () {
    (!rating)


    firestore()
    .collection<OrderFirestoreDTO>('orders')
    .doc(orderId)
    .update({ 
      rating,
      evaluation,
      status: 'rated',
      created_at: firestore.FieldValue.serverTimestamp()
    })
    .then(()=> {
      Alert.alert('Avaliação', 'Obrigado por sua avaliação!');
      navigation.goBack();
    })
    .catch((error) => {
      console.log(error);
      Alert.alert('Avaliação', 'Não foi possível enviar a avaliação');
      setIsLoadingClosing(false);
    });
  }
  
  function handleOrderClose() {
    if (!solution) {
      return Alert.alert('Solicitação', 'Informe a solução para encerrar a solicitação')
    }

		setIsLoadingClosing(true);


    firestore()
    .collection<OrderFirestoreDTO>('orders')
    .doc(orderId)
    .update({
      status: 'closed',
      solution,
      closed_at: firestore.FieldValue.serverTimestamp()
    })
    .then(()=> {
      Alert.alert('Solicitação', 'Solicitação encerrada.');
      navigation.goBack();
    })
    .catch((error) => {
      console.log(error);
      Alert.alert('Solicitação', 'Não foi possível encerrar a solicitação');
      setIsLoadingClosing(false);
    });
  }
  
  useEffect(() => {
    setIsLoading(true)
    firestore()
    .collection<OrderFirestoreDTO>('orders')
    .doc(orderId)
    .get()
    .then((doc) => {
      const { patrimony,
              uri,
              description, 
              status, 
              created_at, 
              closed_at, 
              solution } = doc.data();

      const closed = closed_at ? dateFormat(closed_at) : null;
      setOrder({ //armazenar dentro de order os detalhes da solicitação que foram pegas 
        id: doc.id,
        patrimony,
        uri,
        description,
        status,
        solution,
        when: dateFormat(created_at),
        closed
      });

      setIsLoading(false);
    });
  },[orderId]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <VStack flex={1} bg={'gray.700'}>
        <Box px={6} bg={'gray.600'}>
          <Header title={'Solicitação'}/>
        </Box>

        <HStack bg={'gray.500'} justifyContent={'center'} p={4}>
          {
            order.status === 'closed' 
            ?  <CircleWavyCheck size={22} color={colors.green[300]} />
            :  <Hourglass size={22} color={colors.secondary[700]}/>
          }

          <Text
            fontSize={'sm'}
            color={order.status === 'closed' ? colors.green[300] : colors.secondary[700]}
            ml={2}
            textTransform='uppercase'
          >

           {order.status === 'closed' ? 'Finalizado' : 'Em andamento'}
          </Text>
          </HStack>

          <ScrollView mx={5} showsVerticalScrollIndicator={false}>
            <CardDetails
              title={'Equipamento'}
              description={`Patrimônio ${order.patrimony}`}
              icon={DesktopTower}
            />

            <CardDetails
              title={'Descrição do problema'}
              description={order.description}
              icon={ClipboardText}
              footer={`Cadastrado em ${order.when}`}>

              {
                order.uri && <Image source={{uri:order.uri}} style={{width: 313, height: 200}}/>
              }
            
                </CardDetails>

            <CardDetails
              title={'Solução'}
              icon={CircleWavyCheck}
              description={order.solution}
              footer={order.closed && `Encerrado em ${order.closed}`}
            >


              { 
                order.status === 'open' && (
                  <Input
                  placeholder={'Descreva a solução'}
                  onChangeText={setSolution}
                  h={'xs'}
                  textAlignVertical={'top'}
                  multiline
                  marginBottom={150}
                  />
                  )}

            </CardDetails>
           
            {
              order.status === 'closed' &&(
                <CardDetails 
                title='Faça sua avaliação'
                icon={Star}
                >  
                <Input 
                  placeholder={'Deixe sua avaliação'}
                  onChangeText={setEvaluation}
                  h={'32'}
                  textAlignVertical='top'
                  multiline
                  marginBottom={'5'}
                  />
              <StarRating
                  rating={rating}
                  onChange={setRating}
                  starSize={24}  
                  key={1}    
                  /> 
                 
            {
              order.status === 'closed' && (
                <Button 
                title='Enviar avaliação'
                marginTop={8}
                marginBottom={10}
                onPress={Estrelas}
                />
           )}
             </CardDetails>
          )} 
          </ScrollView >

          {
            order.status === 'open' && 
            <Button
            title={'Encerrar solicitação'}
            m={5}
            isLoading={isLoadingClosing}
            onPress={handleOrderClose}
            />
          }
          
    </VStack>
  );
}