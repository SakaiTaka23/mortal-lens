import { Box, Chip, MenuItem, Select, Stack } from '@mui/material';
import {
  MaterialReactTable,
  MRT_AggregationFn,
  MRT_Cell,
  MRT_Column,
  MRT_ColumnDef,
  MRT_Row,
  useMaterialReactTable,
} from 'material-react-table';
import { useMemo } from 'react';

import { KyokuDiff } from '@/types/output/RoundDiff';
import { Tag } from '@/types/output/Tags';

interface Props {
  kyokuDiffs: KyokuDiff[];
}

const diffLevels = ['optimal', 'moderate', 'significant', 'critical'] as const;
const tags = [
  'jihai&jihai',
  'jihai&suhai',
  'naki',
  'riichi',
  'riichi1',
  'riichi2',
  '2fuuro',
  'myfuuro',
  'dora',
] as string[];

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
        filterFn: (row, id, filterValue: string[]) => {
          if (!filterValue?.length) return true;
          const value = row.getValue(id);
          return filterValue.includes(value as string);
        },
        Filter: ({ column }: { column: MRT_Column<KyokuDiff> }) => (
          <Select
            multiple
            value={(column.getFilterValue() as string[]) ?? []}
            onChange={(e) => column.setFilterValue(e.target.value)}
            size='small'
            sx={{ minWidth: '100px' }}
          >
            {diffLevels.map((level) => (
              <MenuItem key={level} value={level}>
                {level}
              </MenuItem>
            ))}
          </Select>
        ),
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
        filterFn: (row, _, filterValue: string[]) => {
          if (!filterValue?.length) return true;
          const tags = row.original.tags;
          if (!tags?.length) return false;
          return filterValue.some((tag) => tags.includes(tag as Tag));
        },
        Filter: ({ column }: { column: MRT_Column<KyokuDiff> }) => (
          <Select
            multiple
            value={(column.getFilterValue() as string[]) ?? []}
            onChange={(e) => column.setFilterValue(e.target.value)}
            size='small'
            sx={{ minWidth: '150px' }}
          >
            {tags.map((tag) => (
              <MenuItem key={tag} value={tag}>
                {tag}
              </MenuItem>
            ))}
          </Select>
        ),
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
