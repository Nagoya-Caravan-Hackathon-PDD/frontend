'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@mantine/core';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { Schema, schema } from './schema';
import { TextInput } from '@/shared/components/common/Form';
import { Box } from '@/shared/components/common/Layout';
import { ProfileCard } from '@/shared/components/features/ProfileCard';

export const Profile = () => {
  const { control, handleSubmit } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const onSubmit = useCallback((values: Schema) => {}, []);
  return (
    <Box>
      <ProfileCard gitMonPhoto="" gitMonName="" />
      <TextInput
        name="name"
        control={control}
        placeholder="Enter your GitMon's name"
        label="GitMon's Name"
        withAsterisk
        defaultValue={'default'}
      />
      <Button>cahnge Gitmon name</Button>
    </Box>
  );
};
