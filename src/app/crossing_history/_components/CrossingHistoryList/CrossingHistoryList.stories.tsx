import { Meta, StoryObj } from '@storybook/react';
import { CrossingHistoryList } from './CrossingHistoryList';
import { Heading } from '@/shared/components/layout';

const meta: Meta<typeof CrossingHistoryList> = {
  component: undefined,
};
export default meta;

type Story = StoryObj<typeof CrossingHistoryList>;

export const Main: Story = {
  render: () => (
    <Heading title={'Crossing histories'}>
      <CrossingHistoryList />
    </Heading>
  ),
};
