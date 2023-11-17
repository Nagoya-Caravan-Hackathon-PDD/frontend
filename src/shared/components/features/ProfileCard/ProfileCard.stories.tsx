import { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
  component: undefined,
};
export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const Main: Story = {
  render: () => (
    <ProfileCard
      gitMonPhoto="https://avatars.githubusercontent.com/u/150443135?v=4"
      gitMonName="GitGit"
    />
  ),
};
