import { Text, Button, IButtonProps, useTheme } from 'native-base';

type Props = IButtonProps & {
  title: string
  isActive?: boolean;
  type: 'open' | 'closed' | 'rated';
};

export function Filter({title, isActive = false, type, ...rest}: Props) {
  const  { colors } = useTheme();
  const colorType = type === 'open' ? colors.secondary[700] : colors.green[300] 
  
  const colorTypes = type === 'rated' ? colors.darkBlue[600] : colorType
  


  return (
    <Button
      variant='outline'
      borderWidth={isActive ? 1 : 0}
      borderColor={colorTypes}
      bgColor='gray.600'
      flex={1}
      size='sm'
      {...rest}
    >
      <Text color={isActive ? colorTypes : 'gray.300'} fontSize='xs' textTransform='uppercase'>
        {title}
      </Text>

    </Button>
  );
}