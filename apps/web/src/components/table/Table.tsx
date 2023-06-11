import {
  createSolidTable,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
} from '@tanstack/solid-table';
import { BsSortDown, BsSortNumericDown, BsSortNumericUp, BsSortUp } from 'solid-icons/bs';
import { RiSystemFilter2Fill } from 'solid-icons/ri';
import { Accessor, Component, createSignal, For } from 'solid-js';

import { columns } from '@/components/table/columnDefs';
import { TableBodyCell } from '@/components/table/TableBodyCell';
import { TableBodyRow } from '@/components/table/TableBodyRow';
import { TableHeaderCell } from '@/components/table/TableHeaderCell';
import { Popover } from '@/components/ui/popover/Popover';
import { Expense } from '@/models/expenseModels';

type TableProps = {
  data: Accessor<Record<keyof Expense, string>[]>;
};

export const Table: Component<TableProps> = (props) => {
  const [sorting, setSorting] = createSignal<SortingState>([]);

  const table = createSolidTable<Expense>({
    get data() {
      return props.data();
    },
    columns,
    state: {
      get sorting() {
        return sorting();
      },
    },
    enableRowSelection: true,
    enableColumnFilters: true,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div class="flex justify-center w-1/2">
      <table class="table w-full">
        <thead>
          <For each={table.getHeaderGroups()}>
            {(headerGroup) => (
              <tr class="border-2">
                <For each={headerGroup.headers}>
                  {(header) => (
                    <TableHeaderCell showWhen={!header.isPlaceholder} header={header} table={table}>
                      {{
                        asc:
                          header.column.id === 'credit' || header.column.id === 'debit' ? (
                            <BsSortNumericUp size={24} />
                          ) : (
                            <BsSortUp size={24} />
                          ),
                        desc:
                          header.column.id === 'credit' || header.column.id === 'debit' ? (
                            <BsSortNumericDown size={24} />
                          ) : (
                            <BsSortDown size={24} />
                          ),
                      }[header.column.getIsSorted() as string] ?? 'UNS'}
                    </TableHeaderCell>
                  )}
                </For>
              </tr>
            )}
          </For>
        </thead>
        <tbody>
          <For each={table.getRowModel().rows}>
            {(row) => (
              <TableBodyRow>
                <For each={row.getVisibleCells()}>
                  {(cell) => (
                    <TableBodyCell>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableBodyCell>
                  )}
                </For>
              </TableBodyRow>
            )}
          </For>
        </tbody>
      </table>
    </div>
  );
};
