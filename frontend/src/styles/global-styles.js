//é como se fosse um css generico, serve pra tudo
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.family.default};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.family.secondary};
    margin: ${({ theme }) => theme.spacings.lg} 0;
  }

  p {
    margin: ${({ theme }) => theme.spacings.md} 0;
  }

  ul, ol {
    margin: ${({ theme }) => theme.spacings.md};
    padding: ${({ theme }) => theme.spacings.md};
  }

  a {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
