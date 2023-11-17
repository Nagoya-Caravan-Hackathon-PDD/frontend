import { MessageVariant } from './types';
import { createLogText } from './utils';
import { Box, Card } from '@/shared/components/common/Layout';
import { Code } from '@/shared/components/common/Text';

type Props = {
  messages: {
    message: string;
    variant: MessageVariant;
  }[];
};
export const LogLikeCard = ({ messages }: Props) => {
  const logText = createLogText(messages);
  return (
    <Card>
      <Code>
        {logText.map((m, i) => {
          return <Box key={i}>{m}</Box>;
        })}
      </Code>
    </Card>
  );
};
