import { GitMonStatusCard } from './internal/GitMonStatusCard';
import { Center, Flex } from '@/shared/components/common/Layout';
import { GitMonIcon } from '@/shared/components/features/GitMon/GitMonIcon';

type Props = {
  show: 'current' | 'enemy';
  gitMon: {
    id: number;
    level: number;
    name: string;
    hp: number;
    maxHp: number;
  };
};
export const GitMonStatus = ({ show, gitMon }: Props) => {
  return (
    <Flex
      justify={'space-between'}
      direction={show === 'current' ? 'row' : 'row-reverse'}
    >
      <Center>
        <GitMonIcon index={gitMon.id} w={120} h={120} />
      </Center>
      <GitMonStatusCard
        name={gitMon.name}
        level={gitMon.level}
        hp={gitMon.hp}
        maxHp={gitMon.maxHp}
      />
    </Flex>
  );
};
