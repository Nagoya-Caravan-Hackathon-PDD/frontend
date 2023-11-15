import { MouseEventHandler, useCallback } from 'react';
import { Button } from '@/shared/components/common/Button';
import { Image } from '@/shared/components/common/Image';
import { Box, Center, Grid } from '@/shared/components/common/Layout';

type Props = {
  value: number | null;
  onChange: (gitMonId: number) => void;
  gitMons: { id: number; photo: string }[];
};
export const SelectGitMon = ({ value, gitMons, onChange }: Props) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      onChange(~~event.currentTarget.value);
    },
    [onChange],
  );

  return (
    <Grid>
      {gitMons.map(({ id, photo }) => {
        return (
          <Box key={id} p={10}>
            <Button
              value={id}
              variant={value === id ? 'outline' : 'transparent'}
              onClick={handleClick}
              w={200}
              h={200}
              radius="md"
            >
              <Center>
                <Image src={photo} alt={`GitMon ${id}`} radius="md" />
              </Center>
            </Button>
          </Box>
        );
      })}
    </Grid>
  );
};
