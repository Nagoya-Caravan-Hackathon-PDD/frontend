import { Meta, StoryObj } from '@storybook/react';
import { GitMonStatusCard } from './GitMonStatusCard';

const meta: Meta<typeof GitMonStatusCard> = {
  component: undefined,
};

export default meta;
type Story = StoryObj<typeof GitMonStatusCard>;

export const Main: Story = {
  args: {
    hp: 1200,
    maxHp: 1500,
    name: 'Gopher',
    level: 80,
  },
  render: (args) => <GitMonStatusCard {...args} />,
};
