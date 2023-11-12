import { Meta, StoryObj } from '@storybook/react';
import { Start } from './Start';

const meta: Meta<typeof Start> = {
  component: undefined,
};
export default meta;

type Story = StoryObj<typeof Start>;

export const Main: Story = {
  render: () => <Start />,
};
