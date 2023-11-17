import { Box, Flex } from '@/shared/components/common/Layout';

type Props = {
  show: 'current' | 'enemy';
  gitMon: {
    name: string;
    hp: number;
    maxHp: number;
  };
};
export const GitMonStatus = ({ show }: Props) => {
  return (
    <Flex direction={show === 'current' ? 'row' : 'row-reverse'}>
      <Box></Box>
    </Flex>
  );
};
