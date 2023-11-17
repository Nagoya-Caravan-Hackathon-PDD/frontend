import { Profile } from './_components';
import { Guard } from '@/shared/components/features/Guard';
import { Heading } from '@/shared/components/layout';

const Page = () => {
  return (
    <Guard>
      <Heading title={'Profile'}>
        <Profile />
      </Heading>
    </Guard>
  );
};
export default Page;
