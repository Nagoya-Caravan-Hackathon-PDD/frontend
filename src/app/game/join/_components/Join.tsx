'use client';
import { JoinGameURLForm } from './JoinGameURLForm';
import { QRCodeReader } from '@/shared/components/features/QRCode/QRCodeReader';

export const Join = () => {
  return (
    <>
      <JoinGameURLForm />
      <QRCodeReader />
    </>
  );
};
