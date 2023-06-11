import * as popover from '@zag-js/popover';
import { normalizeProps, useMachine } from '@zag-js/solid';
import { RiSystemCloseLine } from 'solid-icons/ri';
import { Component, createMemo, createUniqueId, JSXElement, Show } from 'solid-js';

type PopoverProps = {
  trigger: JSXElement;
  popoverTitle?: string;
  popoverDescription?: string;
  children: ({
    titleProps,
    descriptionProps,
  }: {
    titleProps: any;
    descriptionProps: any;
  }) => JSXElement;
};
export const Popover: Component<PopoverProps> = (props) => {
  const [state, send] = useMachine(popover.machine({ id: createUniqueId(), closeOnEsc: true }));

  const api = createMemo(() => popover.connect(state, send, normalizeProps));

  return (
    <div>
      <button {...api().triggerProps}>{props.trigger}</button>
      <div {...api().positionerProps} class="bg-red-400 p4">
        <div
          style={{ border: '3px solid #e2e8f0' }}
          class="pr-8 relative border-3 border-blue-500 p-4  w-64 shadow-lg"
          {...api().contentProps}
        >
          {props.children({
            titleProps: api().titleProps,
            descriptionProps: api().descriptionProps,
          })}
          <button class="absolute top-4 right-4" {...api().closeTriggerProps}>
            <RiSystemCloseLine size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};
