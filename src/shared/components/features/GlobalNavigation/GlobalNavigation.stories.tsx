import { Meta, StoryObj } from '@storybook/react';
import { GlobalNavigation } from './GlobalNavigation';
import { RecoilRoot } from '@/shared/lib/recoil/RecoilRoot';

const meta: Meta<typeof GlobalNavigation> = {
  component: undefined,
};
export default meta;

type Story = StoryObj<typeof GlobalNavigation>;

export const Main: Story = {
  render: () => (
    <RecoilRoot>
      <GlobalNavigation>Main</GlobalNavigation>
    </RecoilRoot>
  ),
};
