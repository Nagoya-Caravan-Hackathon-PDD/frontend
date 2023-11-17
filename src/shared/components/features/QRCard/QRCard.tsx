'use client';

import React from 'react';
import { CopyIcon } from '../../Icons/CopyIcon';
import { CopyButton } from '../../common/Button/CopyButton';
import { Button } from '@/shared/components/common/Button';
import {
  Box,
  Card,
  Flex,
  Group,
  Stack,
} from '@/shared/components/common/Layout';
import { Text } from '@/shared/components/common/Text';
import { QRCode } from '@/shared/lib/qrcode';

type Props = {
  url: string;
};

export const QRCard = ({ url }: Props) => {
  return (
    <Card shadow="sm" padding="xl">
      <Stack>
        <Text size="lg" mt="md" c="dimmed">
          Share this QR code
        </Text>
        <Flex
          justify={'center'}
          style={{
            borderWidth: 1,
            borderStyle: 'solid',
            padding: 16,
          }}
        >
          <QRCode url={url} size={320} />
        </Flex>
        <Text mt="xs" c="dimmed" size="lg">
          Share URL
        </Text>
        <Group>
          <Box>
            <CopyButton value={url}>
              {({ copy }) => (
                <Button onClick={copy} variant="default">
                  <CopyIcon />
                </Button>
              )}
            </CopyButton>
          </Box>
          <Text c="dimmed">{url}</Text>
        </Group>
      </Stack>
    </Card>
  );
};
