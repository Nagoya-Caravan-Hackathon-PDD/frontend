import { ImageProps } from '@mantine/core';
import { Image } from '@/shared/components/common/Image';

type Props = Omit<ImageProps, 'src' | 'alt'>;
export const Gopher = (props: Props) => {
  return (
    <Image src={'/gitmon/2.svg'} alt={'Gopher'} fit="contain" {...props} />
  );
};
