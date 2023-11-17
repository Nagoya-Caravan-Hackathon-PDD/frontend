import { ShieldIcon, SwordsIcon } from '@/shared/components/Icons';
import { Button } from '@/shared/components/common/Button';
import { Group } from '@/shared/components/common/Layout';
import { Text } from '@/shared/components/common/Text';

type Props = {
  type: 'attack' | 'defense' | 'skill';
  text: string;
  onClick: () => void;
};
export const ActionButton = ({ text, type, onClick }: Props) => {
  return (
    <Button color="gray" variant="outline" onClick={onClick}>
      <Group>
        {type === 'attack' && <SwordsIcon />}
        {type === 'defense' && <ShieldIcon />}
        <Text>{text}</Text>
      </Group>
    </Button>
  );
};
