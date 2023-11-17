import { ReactNode } from 'react';
import { MessageVariant } from './types';
import { Loader } from '@/shared/components/Feedback';
import { CircleCheckIcon } from '@/shared/components/Icons';
import { Group } from '@/shared/components/common/Layout';

export const createLogText = (
  messages: {
    message: string;
    variant: MessageVariant;
  }[],
) => {
  const logMessages: ReactNode[] = [];
  messages.map(({ message, variant }) => {
    switch (variant) {
      case 'waiting':
        logMessages.push(
          <Group>
            <>{'>'}</>
            <Loader color="yellow" size="0.9rem" />
            {String(message)}
          </Group>,
        );
        break;
      case 'done':
        logMessages.push(
          <Group>
            <>{'>'}</>
            <CircleCheckIcon size="1rem" />
            {String(message)}
          </Group>,
        );
        break;
      case 'message':
        logMessages.push(<Group>{String(message)}</Group>);
        break;
    }
  });
  return logMessages;
};
