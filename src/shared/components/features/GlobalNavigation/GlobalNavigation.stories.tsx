import { Meta, StoryObj } from '@storybook/react';
import { GlobalNavigation } from './GlobalNavigation';

const meta: Meta<typeof GlobalNavigation> = {
  component: undefined,
};
export default meta;

type Story = StoryObj<typeof GlobalNavigation>;

export const Main: Story = {
  render: () => <GlobalNavigation>Main</GlobalNavigation>,
};
