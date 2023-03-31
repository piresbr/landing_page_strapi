import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Teste asdasd asdas ',
  },
  argTypes: {
    children: { type: 'string' },
  },
  background: {default: 'dark'}
};

export const Template = (args) => <Heading {...args} />;
