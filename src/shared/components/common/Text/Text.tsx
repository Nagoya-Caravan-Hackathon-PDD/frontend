import { Text as MantineText, TextProps } from '@mantine/core';
import { PolymorphicComponentProps } from '@mantine/core/lib/core/factory/create-polymorphic-component';

type Props = PolymorphicComponentProps<'p', TextProps>;
export const Text = (props: Props) => {
  return <MantineText {...props} />;
};
