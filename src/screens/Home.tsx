import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  HStack,
  IconButton,
  VStack,
  useTheme,
  Text,
  Heading,
  FlatList,
  Center,
} from 'native-base';
import { SignOut, ChatTeardropText } from 'phosphor-react-native';

import Logo from '../assets/logo_secondary.svg';

import { Filter } from '../components/Filter';
import { Button } from '../components/Button';
import { Order, OrderProps } from '../components/Order';

export function Home() {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const [orders, setOrders] = useState<OrderProps[]>([]);
  const [statusSelected, setStatusSelected] = useState<'open' | 'closed'>('open');

  function handleNewOrder() {
    navigation.navigate('new');
  }

  function handleOpenDetails(orderId: string) {
    navigation.navigate('details', { orderId });
  }

  return (
    <VStack testID='container' flex={1} pb={6} bg='gray.700'>
      <HStack
        testID='container-title'
        w='full'
        justifyContent='space-between'
        alignItems='center'
        bg='gray.600'
        pt={12}
        pb={5}
        px={6}
      >
        <Logo />

        <IconButton
          testID='button-back'
          icon={<SignOut size={26} color={colors.gray[300]} />}
        />
      </HStack>

      <VStack flex={1} px={6}>
        <HStack
          w='full'
          mt={8}
          mb={4}
          justifyContent='space-between'
          alignItems='center'
        >
          <Heading color='gray.100'>
            Meus chamados
          </Heading>

          <Text color='gray.200'>
            {orders.length}
          </Text>
        </HStack>

        <HStack space={3} mb={8}>
          <Filter
            testID='button-open'
            type='open'
            title='em andamento'
            onPress={() => setStatusSelected('open')}
            isActive={statusSelected === 'open'}
          />

          <Filter
            testID='button-closed'
            type='closed'
            title='finalizadas'
            onPress={() => setStatusSelected('closed')}
            isActive={statusSelected === 'closed'}
          />
        </HStack>

        <FlatList
          data={orders}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Order data={item} onPress={() => handleOpenDetails(item.id)} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 50 }}
          ListEmptyComponent={() => (
            <Center
              testID='empty-container'
            >
              <ChatTeardropText color={colors.gray[300]} size={40} />
              <Text
                testID='empty-text'
                color='gray.300'
                fontSize='xl'
                mt={6}
                textAlign='center'
              >
                Você ainda não possui { '\n'}
                solicitações {statusSelected === 'open' ? 'em andamento' : 'finalizadas'}
              </Text>
            </Center>
          )}
        />

        <Button
          testID='button-new'
          title='Nova solicitação'
          onPress={handleNewOrder}
        />
      </VStack>
    </VStack>
  );
}