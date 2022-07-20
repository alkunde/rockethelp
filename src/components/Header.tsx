import { useNavigation } from '@react-navigation/native';
import {
  HStack,
  IconButton,
  useTheme,
  StyledProps,
  Heading,
} from 'native-base';
import { CaretLeft } from 'phosphor-react-native';

type Props = StyledProps & {
  title: string;
}

export function Header({ title, ...rest }: Props) {
  const { colors } = useTheme();
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <HStack
      testID='header'
      w='full'
      justifyContent='space-between'
      alignItems='center'
      bg='gray.600'
      pb={6}
      pt={12}
      {...rest}
    >
      <IconButton
        testID='button-back'
        icon={<CaretLeft color={colors.gray[200]} size={24} />}
        onPress={handleGoBack}
      />

      <Heading
        testID='title'
        color='gray.100'
        textAlign='center'
        fontSize='lg'
        flex={1}
        ml={-6}
      >
        {title}
      </Heading>

    </HStack>
  );
}