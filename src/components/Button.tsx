import { Button as ButtonNativeBase, IButtonProps, Heading } from 'native-base';

type Props = IButtonProps & {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <ButtonNativeBase
      testID={`button-${title}`}
      bg='green.700'
      h={14}
      fontSize='sm'
      rounded='sm'
      _pressed={{ bg: 'green.500' }}
      {...rest}
    >
      <Heading
        testID={`title-${title}`}
        color='white'
        fontSize='sm'
      >
        {title}
      </Heading>
    </ButtonNativeBase>
  );
}