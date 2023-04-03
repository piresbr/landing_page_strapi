import styled, { css } from 'styled-components';

//defino as cores do componente aqui, puxadas direto do theme.js
//themeDark definido dentro do componente, a troca de cores ocorre dentro do stories.jsx
export const Title = styled.h1`
  ${({ theme, themeDark }) => css`
    background-color: ${themeDark ? theme.colors.dark : theme.colors.light};
    color: ${themeDark ? theme.colors.light : theme.colors.dark};
    padding: ${theme.spacings.md};
  `}
`;
