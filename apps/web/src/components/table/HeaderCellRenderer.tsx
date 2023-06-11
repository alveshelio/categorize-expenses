import { ParentComponent } from 'solid-js';

export const HeaderCellRenderer: ParentComponent = (props) => (
  <span class="flex font-bold">{props.children}</span>
);
