import styled, { css } from 'styled-components';

//crio o atributo no componente, tipo ele e referencio aqui de acordo com o tamanho definido em theme
const TitleSize = {
  sm: (theme) => css`font-size: ${theme.fonts.sizes.sm};`,
  md: (theme) => css`font-size: ${theme.fonts.sizes.md};`,
  lg: (theme) => css`font-size: ${theme.fonts.sizes.lg};`,
  xl: (theme) => css`font-size: ${theme.fonts.sizes.xl};`,
  xxl: (theme) => css`font-size: ${theme.fonts.sizes.xxl}; ${mediaQueryTitle(theme)}`,
}

const TitleSpacing = {
  sm: (theme) => css`padding: ${theme.spacings.sm};`,
  md: (theme) => css`padding: ${theme.spacings.md};`,
  lg: (theme) => css`padding: ${theme.spacings.lg};`,
  xl: (theme) => css`padding: ${theme.spacings.xl};`,
  xxl: (theme) => css`padding: ${theme.spacings.xxl};`,
}

//themeDark definido dentro do componente, a troca de cores ocorre dentro do stories.jsx
export const Title = styled.h1`
  ${({ theme, themeDark, fontSize, spacing, uppercase }) => css`
    background-color: ${themeDark ? theme.colors.dark : theme.colors.light};
    color: ${themeDark ? theme.colors.light : theme.colors.dark};
    text-transform: ${uppercase ? 'uppercase' : 'lowercase'};
    ${TitleSpacing[spacing](theme)};
    ${TitleSize[fontSize](theme)};
  `}
`;

const mediaQueryTitle = (theme) => css`
  @media ${theme.mediaQuery.md} {
    font-size: ${theme.fonts.sizes.lg};
  }
  @media ${theme.mediaQuery.sm} {
    font-size: ${theme.fonts.sizes.md};
  }
`;