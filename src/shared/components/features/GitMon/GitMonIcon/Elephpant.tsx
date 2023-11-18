import { ImageProps } from '@mantine/core';
import { Image } from '@/shared/components/common/Image';

type Props = Omit<ImageProps, 'src' | 'alt'>;
export const Elephpant = (props: Props) => {
  return (
    <Image src={'/gitmon/3.svg'} alt={'Elephpant'} fit="contain" {...props} />
  );
};
