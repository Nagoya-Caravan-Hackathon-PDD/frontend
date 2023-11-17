import { Game } from './_components/Game';
import { Guard } from '@/shared/components/features/Guard';

const Page = () => {
  return (
    <Guard>
      <Game />
    </Guard>
  );
};
export default Page;
