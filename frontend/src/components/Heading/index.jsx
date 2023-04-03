import P from 'prop-types';
import * as Styled from './styles';

//title é puxado do stories.js, declarado dentro do default. Depois ele pega esse componente e exporta
// como Heading para ser usado no index geral do app.
export const Heading = ({ title, themeDark }) => {
  return <Styled.Title themeDark={themeDark}>{title}</Styled.Title>;
};

Heading.propTypes = {
  title: P.node.isRequired,
  themeDark: P.bool.isRequired,
};
