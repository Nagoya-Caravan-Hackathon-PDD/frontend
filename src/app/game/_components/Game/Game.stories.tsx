import { Meta, StoryObj } from '@storybook/react';
import { Game } from './Game';
import { Heading } from '@/shared/components/layout';

const meta: Meta<typeof Game> = {
  component: undefined,
};
export default meta;

type Story = StoryObj<typeof Game>;

export const Main: Story = {
  render: () => (
    <Heading title={'Real time battle'}>
      <Game />
    </Heading>
  ),
};
