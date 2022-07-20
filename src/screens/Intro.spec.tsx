import React from 'react';
import { render } from '@testing-library/react-native';

import Intro from './Intro';

describe('Intro', () => {
  it('should', () => {
    const { getByTestId } = render(<Intro />);

    const welcomeText = getByTestId('welcome-text');
    const introText = getByTestId('intro-text');
    const container = getByTestId('container');

    expect(welcomeText.props.children).toEqual('Welcome to React Native!');
    expect(welcomeText.props.style.fontSize).toEqual(20);
    expect(welcomeText.props.style.textAlign).toEqual('center');

    expect(introText.props.children).toEqual('This is a React Native snapshot test.');
    expect(introText.props.style.textAlign).toEqual('center');
    expect(introText.props.style.color).toEqual('#333333');

    expect(container.props.style.backgroundColor).toEqual('#F5FCFF');
    expect(container.props.style.alignItems).toEqual('center');
    expect(container.props.style.justifyContent).toEqual('center');
  });
});