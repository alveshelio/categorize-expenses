import { flexRender, Header, Table } from '@tanstack/solid-table';
import { ParentComponent, Show } from 'solid-js';

import { ColumnFiltering } from '@/components/table/ColumnFiltering';
import { Filter } from '@/components/table/Filter';
import { Expense } from '@/models/expenseModels';

type TableHeaderCellProps = {
  showWhen: boolean;
  table: Table<Expense>;
  header: Header<Expense, string>;
};
export const TableHeaderCell: ParentComponent<TableHeaderCellProps> = (props) => (
  <th class="p-0 border-2 border-slate-500 text-gray-200 bg-slate-400 py-3 px-2">
    <Show when={props.showWhen}>
      <div class="flex justify-between items-center">
        {flexRender(props.header.column.columnDef.header, props.header.getContext())}
        <ColumnFiltering>
          <Filter table={props.table} column={props.header.column} />
        </ColumnFiltering>
        <div
          classList={{
            'cursor-pointer select-none': props.header.column.getCanSort(),
          }}
          onClick={() => props.header.column.getToggleSortingHandler()}
        >
          {props.children}
        </div>
      </div>
    </Show>
  </th>
);
