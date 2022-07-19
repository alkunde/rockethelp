import React from 'react';
import { render } from '@testing-library/react-native';
import { NativeBaseProvider } from 'native-base';
import { THEME } from  '../styles/theme';

import { Button } from './Button';

const Providers: React.FC = ({ children }) => (
  <NativeBaseProvider theme={THEME}>
    { children }
  </NativeBaseProvider>
);

describe('Button', () => {
  it('should', () => {
    const { getByTestId } = render(
       <Button title='test' />,
       {
        wrapper: Providers
       }
    );

    const button = getByTestId('button-test');
    expect(button.props.style.backgroundColor).toEqual('#00875F');

    const buttonText = getByTestId('title-test');
    expect(buttonText.props.children).toEqual('test');
    expect(buttonText.props.style.color).toEqual('#FFFFFF');
    expect(buttonText.props.style.fontFamily).toEqual('Roboto_400Regular');
    expect(buttonText.props.style.fontSize).toEqual(14);
  });
});