import { screen } from '@testing-library/react';
import { expect } from 'vitest';
import { Heading } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  it('render with default values', () => {
    const { debug } = renderTheme(<Heading />);
    const heading = screen.getByRole('heading', { name: 'Teste' });
    //tema padrão é o light por isso passou, se fosse teste no dark era só inverter
    expect(heading).toHaveStyle({
      color: theme.colors.dark,
      backgroundColor: theme.colors.light,
    });
  });
  it('render with white color', () => {
    const { debug } = renderTheme(<Heading themeDark={false} />);
    const heading = screen.getByRole('heading', { name: 'Teste' });

    expect(heading).toHaveStyle({
      color: theme.colors.dark,
    });
  });
  it('render with correct font size', () => {
    const { debug } = renderTheme(<Heading fontSize="lg" />);
    const heading = screen.getByRole('heading', { name: 'Teste' });

    expect(heading).toHaveStyle({
      fontSize: theme.fonts.sizes.lg,
    });
  });
  //conferindo se a font size xxl está respeitando o media query md para dispositivos (min-width: 321px) and (max-width: 767px)
  it('render with correct font size in mobile', () => {
    const { debug } = renderTheme(<Heading fontSize="xxl" />);
    const heading = screen.getByRole('heading', { name: 'Teste' });

    expect(screen.getByRole('heading', { name: 'Teste' })).toHaveStyleRule(
      'font-size',
      theme.fonts.sizes.lg,
      {
        media: theme.mediaQuery.md,
      },
    );
  });
  //forçando h6 tag
  it('render correct heading tagname', () => {
    const { container } = renderTheme(<Heading as="h6" />);
    const heading = screen.getByRole('heading', { name: 'Teste' });
    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLocaleLowerCase()).toBe('h6');
  });
});
