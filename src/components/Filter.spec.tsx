import React from 'react';
import { render } from '@testing-library/react-native';
import { NativeBaseProvider } from 'native-base';
import { THEME } from  '../styles/theme';

import { Filter } from './Filter';

const Providers: React.FC = ({ children }) => (
  <NativeBaseProvider theme={THEME}>
    { children }
  </NativeBaseProvider>
);

describe('Filter', () => {
  it('should', () => {
    const { getByTestId } = render(
       <Filter
        title='Fechadas'
        type='closed'
      />,
       {
        wrapper: Providers
       }
    );

    const filter = getByTestId('filter-Fechadas');
    console.log(filter.props.styles);
  });
});