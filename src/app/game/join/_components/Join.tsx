'use client';
import { useRouter } from 'next/router';
import { JoinGameURLForm } from './JoinGameURLForm';
import { QRCodeReader } from '@/shared/components/features/QRCode/QRCodeReader';
import { useJoinGame } from '@/shared/hooks/restapi/game/id/post';
import { Route } from '@/shared/types/Page';

export const Join = () => {
  const { joinGame } = useJoinGame();
  const router = useRouter();
  const handleSubmit = async (url: string) => {
    const gameId = url.split('/').pop();
    if (!gameId) return;
    const result = await joinGame(gameId);
    if (!result) return;
    router.push(Route.game + gameId);
  };
  return (
    <>
      <JoinGameURLForm onSubmit={handleSubmit} />
      <QRCodeReader />
    </>
  );
};
