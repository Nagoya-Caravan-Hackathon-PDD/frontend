import { Meta, StoryObj } from '@storybook/react';
import { ActionButton } from './ActionButton';

const meta: Meta<typeof ActionButton> = {
  component: undefined,
  argTypes: {
    type: {
      options: ['attack', 'defense', 'skill'],
      control: 'inline-radio',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ActionButton>;

export const Main: Story = {
  args: {
    type: 'attack',
    text: 'Action',
  },
  render: (args) => <ActionButton {...args} />,
};
