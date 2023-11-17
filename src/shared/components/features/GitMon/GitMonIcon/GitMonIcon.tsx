import { Duke } from './Duke';
import { Elephpant } from './Elephpant';
import { Ferris } from './Ferris';
import { Gopher } from './Gopher';
import { Python } from './Python';

type Props = {
  index: number;
};

const icons = [
  <Ferris key={1} />,
  <Gopher key={2} />,
  <Elephpant key={3} />,
  <Duke key={4} />,
  <Python key={5} />,
];

export const GitMonIcon = ({ index }: Props) => {
  // indexは1~5なので0~4に変換する

  const gitmonIndex = Math.max(0, Math.min(index - 1, 4));

  return icons[gitmonIndex];
};
