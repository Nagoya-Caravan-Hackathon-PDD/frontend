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
  },
  render: (args) => <SelectGitMonModal {...args} />,
};
