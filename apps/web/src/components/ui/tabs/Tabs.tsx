import { normalizeProps, useMachine } from '@zag-js/solid';
import * as tabs from '@zag-js/tabs';
import { createMemo, createUniqueId, For } from 'solid-js';

const data = [
  { value: 'item-1', label: 'Item one', content: 'Item one content' },
  { value: 'item-2', label: 'Item two', content: 'Item two content' },
  { value: 'item-3', label: 'Item three', content: 'Item three content' },
];

export function Tabs() {
  const [state, send] = useMachine(tabs.machine({ id: createUniqueId(), value: 'item-1' }));

  const api = createMemo(() => tabs.connect(state, send, normalizeProps));

  return (
    <div {...api().rootProps}>
      <div class="flex bg-green-300 border-b border-blue-500" {...api().tablistProps}>
        <For each={data}>
          {(item) => (
            <button class="py-1 px-2" {...api().getTriggerProps({ value: item.value })}>
              {item.label}
            </button>
          )}
        </For>
      </div>
      <For each={data}>
        {(item) => (
          <div {...api().getContentProps({ value: item.value })}>
            <p>{item.content}</p>
          </div>
        )}
      </For>
    </div>
  );
}
