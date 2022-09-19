import { Text, Button, IButtonProps, useTheme } from 'native-base';

type Props = IButtonProps & {
  title: string
  isActive?: boolean;
};

export function Button2({title, isActive = false, ...rest}: Props) {
  const  { colors } = useTheme();
  
  return (
    <Button
      variant='outline'
      borderWidth={isActive ? 1  : 0}
      borderColor={isActive ? 'primary.700' : undefined}
      bgColor='gray.600'
      color={'white'}
      flex={1}
      size='sm'
      {...rest}
    >
      <Text color={isActive ? 'primary.700':'gray.300' }  fontSize='xs' textTransform='uppercase'>
        {title}
      </Text>

    </Button>
  );
}