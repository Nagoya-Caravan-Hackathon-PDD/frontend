import { ImageProps } from '@mantine/core';
import { Image } from '@/shared/components/common/Image';

type Props = Omit<ImageProps, 'src' | 'alt'>;
export const Ferris = (props: Props) => {
  return (
    <Image
      src={'/gitmon/1.svg'}
      alt={'Ferris the crab'}
      fit="contain"
      {...props}
    />
  );
};
