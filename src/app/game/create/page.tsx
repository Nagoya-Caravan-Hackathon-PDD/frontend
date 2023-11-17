import { CreateGame } from './_components';
import { Guard } from '@/shared/components/features/Guard';

const Page = () => {
  return (
    <Guard>
      <CreateGame />
    </Guard>
  );
};
export default Page;
