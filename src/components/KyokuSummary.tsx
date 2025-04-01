import { Box, Chip, Stack } from '@mui/material';
import {
  MaterialReactTable,
  MRT_AggregationFn,
  MRT_Cell,
  MRT_ColumnDef,
  MRT_Row,
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
        aggregationFn: ((_: string, leafRows: MRT_Row<KyokuDiff>[]) => {
          const counts = new Map<string, number>();
          leafRows.forEach((row) => {
            const value = row.original.diffLevel;
            counts.set(value, (counts.get(value) ?? 0) + 1);
          });
          return Array.from(counts.entries())
            .map(([level, count]) => `${level}: ${count}`)
            .join(', ');
        }) as unknown as MRT_AggregationFn<KyokuDiff>,
        AggregatedCell: ({ cell }: { cell: MRT_Cell<KyokuDiff> }) => (
          <>
            <Box>{cell.getValue<string>()}</Box>
          </>
        ),
        size: 0,
      },
      {
        accessorKey: 'kyoku',
        header: 'Kyoku',
        size: 0,
      },
      {
        accessorKey: 'honba',
        header: 'Honba',
        size: 0,
      },
      {
        accessorKey: 'junme',
        header: 'Junme',
        size: 0,
      },
      {
        accessorKey: 'aiProbability',
        header: 'AI Probability',
        size: 0,
      },
      {
        accessorKey: 'tags',
        header: 'Tags',
        Cell: TagCell,
        size: 0,
      },
      {
        accessorKey: 'shanten',
        header: 'Shanten',
        size: 0,
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data: kyokuDiffs,
    enableGrouping: true,
    initialState: {
      density: 'compact',
      grouping: ['kyoku', 'honba'],
      pagination: {
        pageSize: 50,
        pageIndex: 0,
      },
    },
    muiTableProps: {
      sx: {
        '& .MuiTableCell-root': {
          padding: '4px 8px',
        },
        '& .MuiTable-root': {
          borderSpacing: '0px',
        },
      },
    },
  });
  return <MaterialReactTable table={table} />;
};
