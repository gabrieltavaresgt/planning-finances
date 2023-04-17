import { Header } from '.';

export default {
  title: 'Header',
  component: Header,
  args: {
    children: 'Este é um header',
    colorTitle: '#d6d6d6',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args: any) => <Header {...args} />;
