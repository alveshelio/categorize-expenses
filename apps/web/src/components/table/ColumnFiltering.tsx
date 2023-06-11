import { BsMenuButtonWide } from 'solid-icons/bs';
import { ParentComponent } from 'solid-js';

import { Popover } from '@/components/ui/popover/Popover';

export const ColumnFiltering: ParentComponent = (props) => {
  return (
    <Popover trigger={<BsMenuButtonWide />}>
      {({ titleProps, descriptionProps }) => (
        <>
          <div {...titleProps}>Title</div>
          <div {...descriptionProps}>Description</div>
        </>
      )}
    </Popover>
  );
};
