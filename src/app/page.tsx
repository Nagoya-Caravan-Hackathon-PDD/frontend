import { Start } from './_components/Start/Start';
import { GlobalNavigation } from '@/shared/components/features/GlobalNavigation';

export default function Home() {
  return (
    <GlobalNavigation>
      <Start />
    </GlobalNavigation>
  );
}
