import { Heading } from '.';

//aqui eu configuro todas as informações do componente, depois exporto o template para ser usado no index.
// Lembrando que os argumentos são utilizado no componente conforme o nome dentro do default.
export default {
  title: 'Heading',
  component: Heading,
  args: {
    title: 'Teste',
  },
  argTypes: {
    title: { type: 'string' },
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

//exporta um componente dark e light.
//
export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} />;

//o default do componente sempre é dark, então abaixo eu faço tudo dentro da propriedade light
// sobrescrever o dark, então tudo que era dark virou light.
Light.parameters = {
  backgrounds: { default: 'light' },
};
Light.args = {
  themeDark: false,
};

//caso o light esteja true, ele força para voltar o dark com os args abaixo
Dark.args = {
  themeDark: true,
};
