import { useDisclosure as MantineUseDisclosure } from '@mantine/hooks';

export const useDisclosure = () => {
  const [isOpen, { close, open, toggle }] = MantineUseDisclosure();
  return { isOpen, close, open, toggle };
};
