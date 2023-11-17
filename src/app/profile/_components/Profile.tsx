'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SelectGitMonModal } from './SelectGitMonModal';
import { Schema, schema } from './schema';
import { Button } from '@/shared/components/common/Button';
import { TextInput } from '@/shared/components/common/Form';
import { Card, Center, Stack } from '@/shared/components/common/Layout';
import { Text } from '@/shared/components/common/Text';
import { GitMonIcon } from '@/shared/components/features/GitMon/GitMonIcon';
import { ProfileCard } from '@/shared/components/features/ProfileCard';
import { useDisclosure } from '@/shared/components/hooks/useDisclosure';

export const Profile = () => {
  const [gitMonId, setGitMonId] = useState<number>(2);
  const { isOpen, open, close } = useDisclosure();
  const { control, handleSubmit } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const onSubmit = useCallback((values: Schema) => {}, []);

  return (
    <Center>
      <Stack>
        <ProfileCard gitMonPhoto="" gitMonName="" />
        <Card p="xl">
          <Text size="lg">{'My GitMon'}</Text>
          <Stack gap="lg">
            <Card.Section>
              <Center p="md">
                <Button
                  variant="outline"
                  w={300}
                  h={300}
                  radius="md"
                  onClick={open}
                >
                  <GitMonIcon index={gitMonId} />
                </Button>
              </Center>
            </Card.Section>
            <Card.Section>
              {/* <Center> */}
              <Stack>
                <TextInput
                  name="name"
                  control={control}
                  placeholder="Enter your GitMon's name"
                  label="My GitMon's Name"
                  autoComplete="off"
                  defaultValue={'gopher'}
                  withAsterisk
                  maw={600}
                />
                <Stack>
                  <Button fullWidth maw={600}>
                    {"cahnge Gitmon's name"}
                  </Button>
                </Stack>
              </Stack>
              {/* </Center> */}
            </Card.Section>
          </Stack>
        </Card>
        <SelectGitMonModal
          isOpen={isOpen}
          onClose={close}
          gitMonId={gitMonId}
          onChange={setGitMonId}
        />
      </Stack>
    </Center>
  );
};
