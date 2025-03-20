import { Chip, Stack } from '@mui/material';
import {
  MaterialReactTable,
  MRT_Cell,
  MRT_ColumnDef,
  useMaterialReactTable,
} from 'material-react-table';
import { useMemo } from 'react';

import { KyokuDiff } from '@/types/output/RoundDiff';

interface Props {
  kyokuDiffs: KyokuDiff[];
}

const TagCell = ({ cell }: { cell: MRT_Cell<KyokuDiff> }) => {
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

export const KyokuSummary = ({ kyokuDiffs }: Props) => {
  const columns = useMemo<MRT_ColumnDef<KyokuDiff>[]>(
    () => [
      {
        accessorKey: 'diffLevel',
        header: 'Diff',
      },
      {
        accessorKey: 'kyoku',
        header: 'Kyoku',
      },
      {
        accessorKey: 'honba',
        header: 'Honba',
      },
      {
        accessorKey: 'junme',
        header: 'Junme',
      },
      {
        accessorKey: 'aiProbability',
        header: 'AI Probability',
      },
      {
        accessorKey: 'tags',
        header: 'Tags',
        Cell: TagCell,
      },
      {
        accessorKey: 'shanten',
        header: 'Shanten',
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data: kyokuDiffs,
  });
  return <MaterialReactTable table={table} />;
};
