import { ImageProps } from '@mantine/core';
import { Duke } from './Duke';
import { Elephpant } from './Elephpant';
import { Ferris } from './Ferris';
import { Gopher } from './Gopher';
import { Python } from './Python';

type Props = ImageProps & {
  index: number;
};

export const GitMonIcon = ({ index, ...props }: Props) => {
  // indexは1~5なので0~4に変換する

  const icons = [
    <Ferris key={1} {...props} />,
    <Gopher key={2} {...props} />,
    <Elephpant key={3} {...props} />,
    <Duke key={4} {...props} />,
    <Python key={5} {...props} />,
  ];

  const gitmonIndex = Math.max(0, Math.min(index - 1, 4));

  return icons[gitmonIndex];
};
