import { Box, HStack, Text, useTheme, VStack, Circle, IPressableProps } from 'native-base';
import { ClockAfternoon, Star } from 'phosphor-react-native';
import { OrderProps } from './Order';


type Props = IPressableProps & {
  data: OrderProps;
};

export function Order2({data, ...rest}: Props) {
  const { colors } = useTheme();
  const statusColor = data.status === 'rated' ? colors.darkBlue[600] : colors.darkBlue[600];

  console.log('test', data)
  return (
   <HStack
      bg={'gray.600'}
      mb={4}
      alignItems={'center'}
      justifyContent={'space-between'}
      rounded={'sm'}
      overflow={'hidden'}
    >
     <Box h={'full'} w={2} bg={statusColor}  />

    <VStack flex={1} my={5} ml={5}>
      
      <VStack > 
      <Text color={'white'} > 
       Patrimonio: {data.patrimony}  
       </Text> 

       <Text color={'white'}> 
       Comentario: {data.evaluation}  
       </Text> 

       <Text color={'white'} mb='1' mt='1'> 
       Avaliação de: {data.rating}  
       </Text> 
      </VStack>

      <HStack alignItems='center'>
        <ClockAfternoon size={15} color={colors.gray[300]} />
          <Text color='gray.200' fontSize='sm' ml={1} >
            {data.when}
          </Text>
      </HStack>

    </VStack>
      <Circle bg={'gray.500'} h={12} w={12} mr={5}>
          {
            data.status ===  'rated'
            ? (<Star size={24} color={statusColor} />   
            ) :( undefined )
          }
      </Circle>
    </HStack>
  );
}