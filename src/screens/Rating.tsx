import React, { useEffect } from 'react';
import { HStack, VStack, Text, } from 'native-base';
import { CardDetails } from '../components';
import { Star } from 'phosphor-react-native'

import Logo from '../assets/logo_secondary.svg'



export function Rating() {

  return (
   

    <VStack flex={1} pb={6} bg="gray.700">

        <HStack w='full'
          justifyContent='space-between'
          alignItems='center'
          bg='gray.600'
          pt={12}
          pb={5}
          px={6}>

            <Logo />


        </HStack>


      <VStack>
        <CardDetails
          title='Etrelas'
          icon={Star}
          
        >

          <Text>
            
          </Text>
        </CardDetails>
        
      </VStack>
    </VStack>
  );
}