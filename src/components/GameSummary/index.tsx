import { Stack, Typography } from '@mui/material';
import {
  MaterialReactTable,
  MRT_Cell,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';
import React, { useMemo } from 'react';

import { RoundDiff } from '@/types/output/RoundDiff';

interface Props {
  roundDiffs: RoundDiff[];
}

const RatioCell = ({ cell }: { cell: MRT_Cell<RoundDiff> }) => {
  const value = cell.getValue<[number, number]>();
  return (
    <Stack direction='row' spacing={1} alignItems='center'>
      <Typography>{value[0]}</Typography>
      <Typography color='text.secondary'>({value[1]}%)</Typography>
    </Stack>
  );
};

export const GameSummary: React.FC<Props> = ({ roundDiffs }) => {
  const columns = useMemo<MRT_ColumnDef<RoundDiff>[]>(
    () => [
      {
        accessorKey: 'kyoku',
        header: 'Kyoku',
      },
      {
        accessorKey: 'honba',
        header: 'Honba',
      },
      {
        accessorKey: 'decisionCount',
        header: 'Decision Count',
      },
      {
        accessorKey: 'optimal',
        header: 'Optimal',
        Cell: RatioCell,
      },
      {
        accessorKey: 'moderate',
        header: 'Moderate',
        Cell: RatioCell,
      },
      {
        accessorKey: 'significant',
        header: 'Significant',
        Cell: RatioCell,
      },
      {
        accessorKey: 'critical',
        header: 'Critical',
        Cell: RatioCell,
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data: roundDiffs,
    initialState: {
      density: 'compact',
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
