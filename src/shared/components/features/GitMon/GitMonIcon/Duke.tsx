import { ImageProps } from '@mantine/core';
import { Image } from '@/shared/components/common/Image';

type Props = Omit<ImageProps, 'src' | 'alt'>;
export const Duke = (props: Props) => {
  return <Image src={'/gitmon/4.svg'} alt={'Duke'} fit="contain" {...props} />;
};
