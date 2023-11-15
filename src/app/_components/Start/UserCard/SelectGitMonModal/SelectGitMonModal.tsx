import { Button } from '@/shared/components/common/Button';
import { Center, Stack } from '@/shared/components/common/Layout';
import { Modal } from '@/shared/components/common/Modal';
import { Title } from '@/shared/components/common/Text';
import { SelectGitMon } from '@/shared/components/features/GitMon/SelectGitMon/SelectGitMon';

type Props = {
  isOpen: boolean;
  gitMonId: number | null;
  gitMons: { id: number; photo: string }[];
  onClose: () => void;
  onChange: (gitMonId: number) => void;
};
export const SelectGitMonModal = ({
  isOpen,
  gitMonId,
  gitMons,
  onClose,
  onChange,
}: Props) => {
  return (
    <Modal opened={isOpen} onClose={onClose} size="xl">
      <Stack gap="md">
        <Center>
          <Title order={4}>
            {`ここに${gitMons.length}匹のギトモンがおるじゃろ？`}
          </Title>
        </Center>
        <Center>
          <SelectGitMon
            value={gitMonId}
            onChange={onChange}
            gitMons={gitMons}
          />
        </Center>
        <Center>
          <Button onClick={onClose}>決定</Button>
        </Center>
      </Stack>
    </Modal>
  );
};
