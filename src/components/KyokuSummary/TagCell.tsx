import { Chip, Stack } from '@mui/material';
import { MRT_Cell } from 'material-react-table';

import { KyokuDiff } from '@/types/output/RoundDiff';

export const TagCell = ({ cell }: { cell: MRT_Cell<KyokuDiff> }) => {
  return (
    <Stack direction='row' spacing={1}>
      {cell.getValue<string[]>().map((tag) => (
        <Chip
          key={tag}
          label={`#${tag}`}
          size='small'
          color='primary'
          variant='outlined'
        />
      ))}
    </Stack>
  );
};
