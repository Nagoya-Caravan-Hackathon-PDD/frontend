import { Meta, StoryObj } from '@storybook/react';
import { UserCard } from './UserCard';

const meta: Meta<typeof UserCard> = {
  component: undefined,
};
export default meta;

type Story = StoryObj<typeof UserCard>;

export const Guest: Story = {
  render: () => <UserCard currentUser={{ token: null }} />,
};

export const Login: Story = {
  render: () => (
    <UserCard
      currentUser={{
        token: 'login',
        uid: 'uid',
        userIcon: 'https://avatars.githubusercontent.com/u/150443135?v=4',
        userName: 'Nagoya-Caravan-Hackathon-PDD',
      }}
    />
  ),
};
