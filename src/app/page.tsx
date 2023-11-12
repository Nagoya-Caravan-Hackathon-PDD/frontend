import { Button } from '@/shared/components/common/Button';
import { Guard } from '@/shared/components/features/Guard/Guard';

export default function Home() {
  return (
    <Guard>
      <Button>Button</Button>
    </Guard>
  );
}
