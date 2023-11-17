import { MouseEventHandler, useCallback } from 'react';
import { GitMonIcon } from '../GitMonIcon';
import { Button } from '@/shared/components/common/Button';
import { Box, Center, Grid } from '@/shared/components/common/Layout';
import { useMediaQuery } from '@/shared/components/hooks/useMediaQuery';

type Props = {
  value: number | null;
  onChange: (gitMonId: number) => void;
};
export const SelectGitMon = ({ value, onChange }: Props) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      onChange(~~event.currentTarget.value);
    },
    [onChange],
  );

  const index = [1, 2, 3, 4, 5];
  return (
    <Grid justify="center">
      {index.map((num) => {
        return (
          <Box key={num} p={10}>
            <Button
              value={num}
              variant={value === num ? 'outline' : 'transparent'}
              onClick={handleClick}
              w={isMobile ? 100 : 200}
              h={isMobile ? 100 : 200}
              radius="md"
            >
              <Center>
                <GitMonIcon index={num} />
              </Center>
            </Button>
          </Box>
        );
      })}
    </Grid>
  );
};
