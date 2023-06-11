import { ParentComponent } from 'solid-js';

export const TableBodyRow: ParentComponent = (props) => (
  <tr class="even:bg-gray-200 hover:bg-gray-200 hover:text-gray-500 border-t-2 border-slate-400 last:border-b-2">
    {props.children}
  </tr>
);
