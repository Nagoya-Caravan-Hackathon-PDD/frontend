import { Progress } from '@/shared/components/common/Feedback';
import { Card, Group, Stack } from '@/shared/components/common/Layout';
import { Text, Title } from '@/shared/components/common/Text';

type Props = {
  name: string;
  level: number;
  hp: number;
  maxHp: number;
};
export const GitMonStatusCard = ({ hp, maxHp, name, level }: Props) => {
  return (
    <Card>
      <Stack>
        <Title order={3}>{name}</Title>
        <Stack gap={0}>
          <Group justify="space-between">
            <Text size="lg">{`Lv. ${level}`}</Text>
            <Text size="xs">{`${hp}/${maxHp}`}</Text>
          </Group>
          <Progress value={(100 * hp) / maxHp} />
        </Stack>
      </Stack>
    </Card>
  );
};
