import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { Schema, schema } from './schema';
import { Button } from '@/shared/components/common/Button';
import { Form, TextInput } from '@/shared/components/common/Form';
import { Center, Stack } from '@/shared/components/common/Layout';

type Props = {
  onSubmit: (url: string) => void;
};

export const JoinGameURLForm = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const submitUrl = useCallback(
    (values: Schema) => {
      if (!values.name) return;
      onSubmit(values.name);
    },
    [onSubmit],
  );

  return (
    <Form control={control}>
      <Stack>
        <TextInput
          name="name"
          control={control}
          placeholder="Enter room URL"
          label="room URL"
        />
        <Center>
          <Button fullWidth maw={600} onClick={handleSubmit(submitUrl)}>
            {'Join Room'}
          </Button>
        </Center>
      </Stack>
    </Form>
  );
};
