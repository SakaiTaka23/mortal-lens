import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';

import { KyokuDiff } from '@/types/output/RoundDiff';

import { useColumns } from './columns';

interface Props {
  kyokuDiffs: KyokuDiff[];
}

export const KyokuSummary = ({ kyokuDiffs }: Props) => {
  const columns = useColumns();

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
