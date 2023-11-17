import { Image } from '@/shared/components/common/Image';

export const Ferris = () => {
  return (
    <Image
      src={'/gitmon/1.svg'}
      alt={'Ferris the crab'}
      width={200}
      height={200}
      fit="contain"
    />
  );
};
