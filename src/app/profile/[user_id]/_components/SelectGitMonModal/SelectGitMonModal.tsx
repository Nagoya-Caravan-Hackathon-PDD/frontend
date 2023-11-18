import { Button } from '@/shared/components/common/Button';
import { Center, Stack } from '@/shared/components/common/Layout';
import { Modal } from '@/shared/components/common/Modal';
import { Title } from '@/shared/components/common/Text';
import { SelectGitMon } from '@/shared/components/features/GitMon/SelectGitMon/SelectGitMon';

type Props = {
  isOpen: boolean;
  gitMonId: number | null;
  onClose: () => void;
  onChange: (gitMonId: number) => void;
};
export const SelectGitMonModal = ({
  isOpen,
  gitMonId,
  onClose,
  onChange,
}: Props) => {
  return (
    <Modal opened={isOpen} onClose={onClose} size="xl">
      <Stack>
        <Center>
          <Title order={4}>{`ここに${5}匹のギトモンがおるじゃろ？`}</Title>
        </Center>
        <Center>
          <SelectGitMon value={gitMonId} onChange={onChange} />
        </Center>
        <Center>
          <Button onClick={onClose}>決定</Button>
        </Center>
      </Stack>
    </Modal>
  );
};
