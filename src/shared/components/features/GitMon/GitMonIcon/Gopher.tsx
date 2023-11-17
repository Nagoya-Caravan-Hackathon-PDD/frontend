import { Image } from '@/shared/components/common/Image';

export const Gopher = () => {
  return (
    <Image
      src={'/gitmon/2.svg'}
      alt={'Gopher'}
      width={200}
      height={200}
      fit="contain"
    />
  );
};
