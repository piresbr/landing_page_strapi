import P from 'prop-types';
import * as Styled from './styles';

//title é puxado do stories.js, declarado dentro do default. Depois ele pega esse componente e exporta
// como Heading para ser usado no index geral do app.
export const Heading = ({
  title = 'Teste',
  themeDark = false,
  as = 'h2',
  fontSize = 'lg',
  spacing = 'md',
  uppercase = false,
}) => {
  return (
    <Styled.Title
      themeDark={themeDark}
      as={as}
      fontSize={fontSize}
      spacing={spacing}
      uppercase={uppercase}
    >
      {title}
    </Styled.Title>
  );
};

Heading.propTypes = {
  title: P.node,
  themeDark: P.bool,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  fontSize: P.oneOf(['sm', 'md', 'lg', 'xl', 'xxl']),
  spacing: P.oneOf(['sm', 'md', 'lg', 'xl', 'xxl']),
  uppercase: P.bool,
};
