import { Game } from './_components/Game';
import { Guard } from '@/shared/components/features/Guard';
import { Heading } from '@/shared/components/layout';

const Page = () => {
  return (
    <Guard>
      <Heading title="Real time battle">
        <Game />
      </Heading>
    </Guard>
  );
};
export default Page;
