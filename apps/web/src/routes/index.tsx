import { createSignal, Show } from 'solid-js';

import { Table } from '@/components/table/Table';
import { UploadFile } from '@/components/uploadFile/UploadFile';
import { Expense } from '@/models/expenseModels';

export default function Home() {
  const [data, setData] = createSignal<Expense[]>([]);
  return (
    <main class="flex flex-col items-center text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">Expenses Categorize</h1>
      <UploadFile setData={setData} />
      <Show when={data().length > 0}>
        <Table data={data} />
      </Show>
    </main>
  );
}
