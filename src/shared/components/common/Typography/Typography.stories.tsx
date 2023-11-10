import { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  component: Typography,
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const FirstStory: Story = {
  render: () => <Typography>Typography</Typography>,
};
