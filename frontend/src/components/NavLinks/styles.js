import styled, { css } from 'styled-components';

export const Container = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row wrap;

    @media ${theme.mediaQuery.md} {
      flex-flow: column wrap;
      align-content: center;
    }
  `}
`;
