import { ColumnDef, createColumnHelper } from '@tanstack/solid-table';
import dayjs from 'dayjs';

import { CellRenderer } from '@/components/table/CellRenderer';
import { HeaderCellRenderer } from '@/components/table/HeaderCellRenderer';
import { Expense } from '@/models/expenseModels';
import { formatCurrency } from '@/utils/utils';

const columnHelper = createColumnHelper<Expense>();

export const columns: ColumnDef<Expense, string>[] = [
  columnHelper.accessor('date', {
    header: () => <HeaderCellRenderer>Date</HeaderCellRenderer>,
    cell: (info) => <CellRenderer>{dayjs(info.getValue()).format('MMM DD')}</CellRenderer>,
  }),
  columnHelper.accessor('ccNumber', {
    header: () => <HeaderCellRenderer>Card Number</HeaderCellRenderer>,
    cell: (info) => <CellRenderer>{info.getValue()}</CellRenderer>,
  }),
  columnHelper.accessor('description', {
    header: () => <HeaderCellRenderer>Description</HeaderCellRenderer>,
    cell: (info) => <CellRenderer>{info.getValue()}</CellRenderer>,
  }),
  columnHelper.accessor('category', {
    header: () => <HeaderCellRenderer>Category</HeaderCellRenderer>,
    cell: (info) => <CellRenderer>{info.getValue()}</CellRenderer>,
  }),
  columnHelper.accessor('debit', {
    header: () => <HeaderCellRenderer>Debit</HeaderCellRenderer>,
    cell: (info) => <CellRenderer>{formatCurrency(parseFloat(info.getValue()))}</CellRenderer>,
  }),
  columnHelper.accessor('credit', {
    header: () => <HeaderCellRenderer>Credit</HeaderCellRenderer>,
    cell: (info) => <CellRenderer>{formatCurrency(parseFloat(info.getValue()))}</CellRenderer>,
  }),
];

export const tempData: Expense[] = [
  {
    date: '2023-06-05',
    ccNumber: '2690',
    description: 'Amazon',
    category: 'Magasinage',
    debit: '14.25',
    credit: '0',
  },
  {
    date: '2023-06-05',
    ccNumber: '2690',
    description: 'Tim Hortons',
    category: 'Restauration rapide',
    debit: '2.42',
    credit: '0',
  },
];
