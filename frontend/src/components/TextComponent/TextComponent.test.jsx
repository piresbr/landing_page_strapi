import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { TextComponent } from '.';
import { expect, it } from 'vitest';

describe('<TextComponent />', () => {
  it('render a text', () => {
    renderTheme(<TextComponent>Children</TextComponent>);
    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  it('match snapshot', async () => {
    const { container } = renderTheme(<TextComponent>Children</TextComponent>);

    expect(container.firstChild).toMatchSnapshot(); //gena a pasta e arquivo de snapshot
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-size: 1rem;
      }

      <p
        class="c0"
      >
        Children
      </p>
    `); //gera o snapshot aqui dentro
  });
});
