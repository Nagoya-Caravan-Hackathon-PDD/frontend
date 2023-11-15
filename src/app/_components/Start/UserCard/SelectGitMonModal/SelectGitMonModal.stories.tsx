import { Meta, StoryObj } from '@storybook/react';
import { SelectGitMonModal } from './SelectGitMonModal';

const meta: Meta<typeof SelectGitMonModal> = {
  component: undefined,
};
export default meta;

type Story = StoryObj<typeof SelectGitMonModal>;

export const Main: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    gitMons: [
      {
        id: 1,
        photo: 'https://avatars.githubusercontent.com/u/150443135?v=4',
      },
      {
        id: 2,
        photo: 'https://avatars.githubusercontent.com/u/150443135?v=4',
      },
    ],
  },
  render: (args) => <SelectGitMonModal {...args} />,
};
