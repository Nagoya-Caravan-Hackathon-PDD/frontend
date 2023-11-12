import { MantineSize } from '@mantine/core';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { theme } from '@/shared/lib/mantine/theme';

const Size: MantineSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

const meta: Meta<typeof Button> = {
  component: undefined,
  argTypes: {
    color: {
      options: [undefined, ...Object.keys({ ...theme.colors })],
      control: { type: 'inline-radio' },
    },
    p: {
      options: [undefined, ...Size],
      control: { type: 'inline-radio' },
    },
    radius: {
      options: [undefined, ...Size],
      control: { type: 'inline-radio' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Main: Story = {
  args: {
    color: undefined,
    p: undefined,
    radius: undefined,
  },
  render: (args) => {
    return <Button {...args}>Button</Button>;
  },
};
