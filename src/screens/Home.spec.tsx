import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NativeBaseProvider } from 'native-base';

import { THEME } from  '../styles/theme';

import { Home } from './Home';

const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

const Providers: React.FC = ({ children }) => (
  <NativeBaseProvider theme={THEME} initialWindowMetrics={inset}>
    {children}
  </NativeBaseProvider>
);

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('Home', () => {
  it('should present empty screen', () => {
    const { getByTestId } = render(
      <Home />,
      {
        wrapper: Providers
      }
    );

    const buttonBack = getByTestId('button-back');
    expect(buttonBack).toBeTruthy();

    const container = getByTestId('container');
    expect(container.props.style.backgroundColor).toEqual('#121214');

    const containerTitle = getByTestId('container-title');
    expect(containerTitle.props.style.backgroundColor).toEqual('#202024');

    const filterOpen = getByTestId('button-open');
    expect(filterOpen.props.style.borderWidth).toEqual(1);
    expect(filterOpen.props.style.borderColor).toEqual('#FBA94C');
    expect(filterOpen.props.style.backgroundColor).toEqual('#202024');

    const filterClosed = getByTestId('button-closed');
    expect(filterClosed.props.style.borderWidth).toEqual(0);
    expect(filterClosed.props.style.borderColor).toEqual('#04D361');
    expect(filterClosed.props.style.backgroundColor).toEqual('#202024');
    fireEvent.press(filterClosed);

    expect(filterClosed.props.style.borderWidth).toEqual(1);
    expect(filterClosed.props.style.borderColor).toEqual('#04D361');
    expect(filterClosed.props.style.backgroundColor).toEqual('#202024');
    expect(filterOpen.props.style.borderWidth).toEqual(0);
    expect(filterOpen.props.style.borderColor).toEqual('#FBA94C');
    expect(filterOpen.props.style.backgroundColor).toEqual('#202024');
    fireEvent.press(filterOpen);

    const emptyContainer = getByTestId('empty-container');
    expect(emptyContainer).toBeTruthy();

    const emptyText = getByTestId('empty-text');
    expect(emptyText.props.children[0]).toEqual("Você ainda não possui ");
    expect(emptyText.props.children[1]).toEqual("\n");
    expect(emptyText.props.children[2]).toEqual("solicitações ");
    expect(emptyText.props.children[3]).toEqual("em andamento");
    expect(emptyText.props.style.textAlign).toEqual('center');
    expect(emptyText.props.style.fontFamily).toEqual('Roboto_400Regular');
    expect(emptyText.props.style.fontSize).toEqual(20);

    const newButton = getByTestId('button-new');
    expect(newButton.props.style.backgroundColor).toEqual('#00875F');
    fireEvent.press(newButton);
    expect(mockedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedNavigate).toHaveBeenCalledWith('new');
  });
});