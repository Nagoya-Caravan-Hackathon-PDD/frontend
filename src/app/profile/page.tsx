import { Profile } from './_components';
import { Guard } from '@/shared/components/features/Guard';

const Page = () => {
  return (
    <Guard>
      <Profile />
    </Guard>
  );
};
export default Page;
