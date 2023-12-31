import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { Schema, schema } from './schema';
import { Button } from '@/shared/components/common/Button';
import { Form, TextInput } from '@/shared/components/common/Form';
import { Center, Stack } from '@/shared/components/common/Layout';
import { Route } from '@/shared/types/Page';

export const StartGameForm = () => {
  const router = useRouter();
  const { control, handleSubmit } = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
    },
  });

  const onSubmit = useCallback(
    (values: Schema) => {
      router.push(Route.profile);
    },
    [router],
  );

  return (
    <Form control={control}>
      <Stack>
        <TextInput
          name="name"
          control={control}
          placeholder="Enter your GitMon's name"
          label="GitMon's Name"
          autoComplete="off"
          withAsterisk
        />
        <Center>
          <Button fullWidth maw={600} onClick={handleSubmit(onSubmit)}>
            {'Game Start >>'}
          </Button>
        </Center>
      </Stack>
    </Form>
  );
};
