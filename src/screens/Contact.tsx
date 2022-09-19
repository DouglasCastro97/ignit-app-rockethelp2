import { VStack, HStack, useTheme, IconButton, ScrollView } from 'native-base';
import { CaretLeft, PhoneCall } from 'phosphor-react-native'

import Logo from '../assets/logo_secondary.svg';
import { useNavigation } from '@react-navigation/native';
import { CardDetails } from '../components';

export function Contact() {

  const {colors} = useTheme();
  const navigation = useNavigation();

  function handleGoback(){
    navigation.goBack()
  }
  return (
    <VStack flex={1} pb={6} bg="gray.700">
      <HStack w='full'
          alignItems='center'
          bg='gray.600'
          pt={12}
          pb={5}
          px={6}>
        <IconButton  onPress={handleGoback} marginRight={60} >
        <CaretLeft size={26} color={colors.gray[300]} />
        </IconButton>
        <Logo />
      </HStack>


      <VStack>
        <ScrollView marginBottom={108}>

          <CardDetails
          title='Ramal: COMERCIAL' 
          icon={PhoneCall} 
          description={'4824'}
          />
          <CardDetails
          title='Ramal: FINANCEIRO' 
          icon={PhoneCall} 
          description={'4877'}
          />
          <CardDetails
          title='Ramal: JURÍDICO' 
          icon={PhoneCall} 
          description={'4811'}
          />
          <CardDetails
          title='Ramal: LOGÍSTICA' 
          icon={PhoneCall} 
          description={'4820'}
          />
          <CardDetails
          title='Ramal: MARKETING' 
          icon={PhoneCall} 
          description={'4849'}
          />
          <CardDetails
          title='Ramal: RECURSOS HUMANOS' 
          icon={PhoneCall} 
          description={'4839'}
          />
          <CardDetails
          title='Ramal: TI' 
          icon={PhoneCall} 
          description={'4882'}
          />
        </ScrollView>
          
        
        
      </VStack>
    </VStack>
  );
}