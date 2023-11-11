import { ButtonProps, Button as MantineButton } from '@mantine/core';

type Props = ButtonProps;
export const Button = (props: Props) => {
  return <MantineButton {...props} />;
};
