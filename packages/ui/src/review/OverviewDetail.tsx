import { EvaluationDetail, EvaluationResult } from '@mortal-lens/types';
import {
  Box,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import React from 'react';

import { ReviewTile } from '@/review/ReviewTile';

import { ReviewMessage } from './ReviewMessage';

export interface Props {
  detail: EvaluationDetail[] | null;
}

const columnHelper = createColumnHelper<EvaluationDetail>();

const columns = [
  columnHelper.accessor('action', {
    header: 'Action',
    cell: ({ row }) => {
      const action = row.getValue<EvaluationResult>('action');
      return (
        <Stack direction='row' spacing={3}>
          <ReviewMessage result={action} />
          <ReviewTile result={action} />
        </Stack>
      );
    },
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('QValue', {
    header: 'Q Value',
    cell: (info) => {
      const value = info.getValue<number>();
      return value.toFixed(2);
    },
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('prob', {
    header: 'Probability',
    cell: (info) => {
      const prob = info.getValue<number>();
      return (Math.round(prob * 10000) / 100).toFixed(2);
    },
    footer: (info) => info.column.id,
  }),
];

export const OverviewDetail: React.FC<Props> = ({ detail }) => {
  const table = useReactTable({
    data: detail ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <Box sx={{ width: '100%' }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='overview table'>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableCell key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} hover>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
