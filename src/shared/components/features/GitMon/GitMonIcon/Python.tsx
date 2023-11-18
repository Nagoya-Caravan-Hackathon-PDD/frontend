import { ImageProps } from '@mantine/core';
import { Image } from '@/shared/components/common/Image';

type Props = Omit<ImageProps, 'src' | 'alt'>;
export const Python = (props: Props) => {
  return (
    <Image src={'/gitmon/5.svg'} alt={'Python'} fit="contain" {...props} />
  );
};
