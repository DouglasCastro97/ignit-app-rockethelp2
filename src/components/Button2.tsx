import { Text, Button } from 'native-base';

export function Button2({title, ...rest}) {

  
  return (
    <Button
      bgColor='gray.600'
      color={'white'}
      flex={1}
      size='sm'
      {...rest}
    >
      <Text color={ 'gray.300' }  fontSize='xs' textTransform='uppercase'>
        {title}
      </Text>

    </Button>
  );
}