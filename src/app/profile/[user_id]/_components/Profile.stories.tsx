import { Meta, StoryObj } from '@storybook/react';
import { Profile } from './Profile';
import { Heading } from '@/shared/components/layout';

const meta: Meta<typeof Profile> = {
  component: undefined,
};
export default meta;

type Story = StoryObj<typeof Profile>;

export const Main: Story = {
  args: {
    githubId: 'Nagoya-Caravan-Hackathon-PDD',
  },
  render: (args) => {
    return (
      <Heading title={''}>
        <Profile {...args} />
      </Heading>
    );
  },
};
