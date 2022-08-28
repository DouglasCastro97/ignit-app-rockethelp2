import { Button as ButtonNativeBase, IButtonProps, Heading } from 'native-base';

type Props = IButtonProps & {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <ButtonNativeBase 
    bg='amber.500'
    h={14}
    fontSize='sm'
    rounded='sm'
    _pressed={{bg: 'amber.300'}}
    {...rest} 
    >
      
      <Heading color='black' fontSize="sm">
        {title}
      </Heading>
    </ButtonNativeBase>
  );
}
