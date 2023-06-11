import { ParentComponent } from 'solid-js';

export const TableBodyCell: ParentComponent = (props) => (
  <td class="px-3 py-2 border-l-2 border-slate-400 last:border-r-2">{props.children}</td>
);
