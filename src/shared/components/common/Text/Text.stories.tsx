import { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  component: undefined,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const FirstStory: Story = {
  render: () => <Text>Text</Text>,
};
