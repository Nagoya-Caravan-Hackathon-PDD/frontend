import { MessageVariant } from './types';
import { createLogText } from './utils';
import { Box, Card } from '@/shared/components/common/Layout';
import { Code } from '@/shared/components/common/Text';

type Props = {
  messages: {
    message: string;
    variant: MessageVariant;
  }[];
  h?: number;
};
export const LogLikeCard = ({ messages, h }: Props) => {
  const logText = createLogText(messages);
  return (
    <Card h={h}>
      <Code>
        {logText.map((m, i) => {
          return <Box key={i}>{m}</Box>;
        })}
      </Code>
    </Card>
  );
};
