import React, { useState, useEffect } from 'react';
import { HStack, VStack, Text, IconButton, useTheme } from 'native-base';
import { Star, CaretLeft } from 'phosphor-react-native'

import { CardDetails } from '../components';

import { useNavigation } from '@react-navigation/native';

export function Rating() {
 
  const {colors} = useTheme();
  const navigation = useNavigation();

  function handleGoback(){
    navigation.goBack()
  }


 
  return (
    <VStack flex={1} pb={6} bg="gray.700">

        <HStack w='full'
          justifyContent='space-between'
          alignItems='center'
          bg='gray.600'
          pt={12}
          pb={5}
          px={6}>

        <IconButton  onPress={handleGoback}>
        <CaretLeft size={26} color={colors.gray[300]} />
        
        </IconButton>
       
    </HStack>


    <VStack>
       <CardDetails 
        title='star'
        icon={Star}
       >
        


       </CardDetails>
     
        
      </VStack>
    </VStack>
  );
}