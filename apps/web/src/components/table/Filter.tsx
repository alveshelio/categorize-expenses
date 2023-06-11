import { Column, Table } from '@tanstack/solid-table';
import { ParentComponent } from 'solid-js';

import { Expense } from '@/models/expenseModels';

type FilterProps = {
  table: Table<Expense>;
  column: Column<Expense>;
};
export const Filter: ParentComponent<FilterProps> = (props) => {
  const firstValue = props.table.getPreFilteredRowModel().flatRows[0]?.getValue(props.column.id);

  console.warn('firstValue', typeof firstValue);

  return <input class="text-gray-500 bg-red-300" type="text" />;
};
