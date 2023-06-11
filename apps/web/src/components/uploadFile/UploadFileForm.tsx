import { parse } from 'csv-parse/sync';
import { Component, createEffect } from 'solid-js';
import { createServerAction$ } from 'solid-start/server';

import { Expense } from '@/models/expenseModels';
import { convertCsvToTableData } from '@/utils/utils';

type UploadFileFormProps = {
  setData: (data: Expense[]) => void;
};
export const UploadFileForm: Component<UploadFileFormProps> = (props) => {
  const [response, { Form }] = createServerAction$(async (form: FormData) => {
    const file = form.get('file') as File;
    const fileReader = file.stream().getReader();

    const { value } = await fileReader.read();

    if (!value) {
      return;
    }

    const fileContentString = new TextDecoder().decode(value);

    return parse(fileContentString, {
      delimiter: ';',
      skip_empty_lines: true,
    });
  });

  createEffect(() => {
    if (response.result) {
      props.setData(convertCsvToTableData(response.result));
    }
  });

  return (
    <Form class="flex flex-col items-center w-96 gap-4">
      <input type="file" name="file" class="w-56" disabled={response.pending} />
      <button class="border-2 border-gray-500 py-1 px-3 rounded-md" type="submit">
        Upload File
      </button>
    </Form>
  );
};
