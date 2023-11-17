import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { Schema, schema } from './schema';
import { Button } from '@/shared/components/common/Button';
import { Form, TextInput } from '@/shared/components/common/Form';
import { Center, Stack } from '@/shared/components/common/Layout';

export const StartGameForm = () => {
  const { control, handleSubmit } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const onSubmit = useCallback((values: Schema) => {}, []);

  return (
    <Form control={control}>
      <Stack>
        <TextInput
          name="name"
          control={control}
          placeholder="Enter your GitMon's name"
          label="GitMon's Name"
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
