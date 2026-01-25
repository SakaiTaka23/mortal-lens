import { DiffOverview, DiffTag, DiffTagType } from '@mortal-lens/types';
import { Box, Chip, MenuItem, Select, Stack } from '@mui/material';
import {
  MRT_AggregationFn,
  MRT_Cell,
  MRT_Column,
  MRT_ColumnDef,
  MRT_Row,
} from 'material-react-table';

import { convertKyokuFormat } from '@/common/kyokuFormat';

export const useColumns = (): MRT_ColumnDef<DiffOverview>[] => [
  {
    accessorKey: 'diffLevel',
    header: 'Diff',
    filterFn: (row, id, filterValue: string[]) => {
      if (!filterValue?.length) return true;
      const value = row.getValue(id);
      return filterValue.includes(value as string);
    },
    Filter: ({ column }: { column: MRT_Column<DiffOverview> }) => (
      <Select
        multiple
        value={(column.getFilterValue() as string[]) ?? []}
        onChange={(e) => column.setFilterValue(e.target.value)}
        size='small'
        sx={{ minWidth: '100px' }}
      >
        {['Critical', 'Optimal', 'None'].map((level) => (
          <MenuItem key={level} value={level}>
            {level}
          </MenuItem>
        ))}
      </Select>
    ),
    aggregationFn: ((_: string, leafRows: MRT_Row<DiffOverview>[]) => {
      const counts = new Map<string, number>();
      leafRows.forEach((row) => {
        const value = row.original.diffLevel;
        counts.set(value, (counts.get(value) ?? 0) + 1);
      });
      return Object.values(['Critical', 'Optimal', 'None'])
        .filter((level) => counts.has(level))
        .map((level) => `${level}: ${counts.get(level)}`)
        .join(', ');
    }) as unknown as MRT_AggregationFn<DiffOverview>,
    AggregatedCell: ({ cell }: { cell: MRT_Cell<DiffOverview> }) => (
      <>
        <Box>{cell.getValue<string>()}</Box>
      </>
    ),
    size: 0,
  },
  {
    accessorFn: (row) => convertKyokuFormat(row.bakaze, row.kyoku, row.honba),
    id: 'kyoku',
    header: 'Kyoku',
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
    Cell: ({ cell }) => {
      const value = cell.getValue<number>() ?? 0;
      const percent = Math.round(value * 10000) / 100;
      return `${percent.toFixed(2)}%`;
    },
  },
  {
    accessorKey: 'tags',
    header: 'Tags',
    Cell: TagCell,
    filterFn: (row, _, filterValue: string[]) => {
      if (!filterValue?.length) return true;
      const tags = row.original.tags;
      if (!tags?.length) return false;
      return filterValue.some((tag) => tags.includes(tag as DiffTagType));
    },
    Filter: ({ column }: { column: MRT_Column<DiffOverview> }) => (
      <Select
        multiple
        value={(column.getFilterValue() as string[]) ?? []}
        onChange={(e) => column.setFilterValue(e.target.value as string[])}
        size='small'
        sx={{ minWidth: '150px' }}
      >
        {Object.values(DiffTag).map((tag) => (
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
];

const TagCell = ({ cell }: { cell: MRT_Cell<DiffOverview> }) => {
  return (
    <Stack direction='row' spacing={1}>
      {cell.getValue<string[]>().map((tag) => (
        <Chip key={tag} label={`#${tag}`} size='small' color='primary' />
      ))}
    </Stack>
  );
};
