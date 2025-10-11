import { DiffOverview } from '@mortal-lens/types';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import React from 'react';

import { useColumns } from './columns';

export interface Props {
  diff: DiffOverview[];
}

export const DiffOverviewTable: React.FC<Props> = ({ diff }) => {
  const columns = useColumns();
  const table = useMaterialReactTable({
    columns,
    data: diff,
    enableGrouping: true,
    initialState: {
      density: 'compact',
      grouping: ['kyoku'],
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
