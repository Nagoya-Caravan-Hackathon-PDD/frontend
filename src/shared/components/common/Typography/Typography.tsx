import { Typography as MuiTypography, TypographyProps } from '@mui/material';

type Props = TypographyProps;
export const Typography = (props: Props) => {
  return <MuiTypography {...props} />;
};
