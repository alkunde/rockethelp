import React from 'react';
import { render } from '@testing-library/react-native';
import { NativeBaseProvider } from 'native-base';
import { THEME } from  '../styles/theme';

import { Input } from './Input';

const Providers: React.FC = ({ children }) => (
  <NativeBaseProvider theme={THEME}>
    { children }
  </NativeBaseProvider>
);

describe('Input', () => {
  it('should', () => {
    const { getByTestId } = render(
       <Input />,
       {
        wrapper: Providers
       }
    );
  });
});