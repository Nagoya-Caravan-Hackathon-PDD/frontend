'use client';

import { QRCodeCanvas } from 'qrcode.react';
import { FC } from 'react';

interface QRCodeProps {
  url: string;
  bgColor?: string;
  fgColor?: string;
  size?: number;
  imageSettings?: {
    src: string;
    x?: number;
    y?: number;
    height: number;
    width: number;
    excavate: boolean;
  };
}

export const QRCode: FC<QRCodeProps> = (props) => {
  return (
    <QRCodeCanvas
      value={props.url}
      size={props.size}
      bgColor={props.bgColor}
      fgColor={props.fgColor}
      level={'L'}
      includeMargin={false}
      imageSettings={props.imageSettings}
    />
  );
};
