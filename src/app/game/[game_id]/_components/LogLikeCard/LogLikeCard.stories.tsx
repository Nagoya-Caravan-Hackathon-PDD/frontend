import { Meta, StoryObj } from '@storybook/react';
import { LogLikeCard } from './LogLikeCard';

const meta: Meta<typeof LogLikeCard> = {
  component: undefined,
};

export default meta;
type Story = StoryObj<typeof LogLikeCard>;

export const Main: Story = {
  args: {
    messages: [
      {
        message: 'Set up job...',
        variant: 'done',
      },
      {
        message: '2006-01-02 15:04:05 [INFO] mes = "動作ログ"',
        variant: 'message',
      },
      {
        message: '2006-01-02 15:04:05 [INFO] mes = "動作ログ"',
        variant: 'message',
      },
      {
        message: 'Waiting for enemy command...',
        variant: 'waiting',
      },
    ],
  },
  render: (args) => <LogLikeCard {...args} />,
};
