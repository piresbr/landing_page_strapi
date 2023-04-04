import React from 'react';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import Home from '.';
import { theme } from '../../styles/theme';

describe('<Home />', () => {
  test('renders learn react link', () => {
    renderTheme(<Home />);
  });
});
