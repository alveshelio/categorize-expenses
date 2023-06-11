import { ParentComponent } from 'solid-js';

export const CellRenderer: ParentComponent = (props) => <span class="flex">{props.children}</span>;
