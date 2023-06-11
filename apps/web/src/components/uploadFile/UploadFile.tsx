import { Component } from 'solid-js';

import { UploadFileForm } from '@/components/uploadFile/UploadFileForm';
import { Expense } from '@/models/expenseModels';

type UploadFileProps = {
  setData: (data: Expense[]) => void;
};
export const UploadFile: Component<UploadFileProps> = (props) => {
  return (
    <div class="flex flex-col w-1/2 items-center mb-8 bg-gray-100 border-2 border-gray-300 rounded-md py-5 shadow-lg">
      <h1>Upload File</h1>
      <UploadFileForm {...props} />
    </div>
  );
};
