import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { NativeBaseProvider } from 'native-base';
import { THEME } from  '../styles/theme';

import { Header } from './Header';

const Providers: React.FC = ({ children }) => (
  <NativeBaseProvider theme={THEME}>
    { children }
  </NativeBaseProvider>
);

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      goBack: mockedNavigate,
    }),
  };
});

describe('Header', () => {
  it('should', () => {
    const { getByTestId } = render(
       <Header
        title='Fechadas'
       />,
       {
        wrapper: Providers
       }
    );

    const backButton = getByTestId('button-back');
    fireEvent.press(backButton);
    expect(mockedNavigate).toHaveBeenCalledTimes(1);
  });
});