import { Expense } from '@/models/expenseModels';

export const convertCsvToTableData = (
  data: [string, string, string, string, string, string][]
): Expense[] => {
  const [, ...rows] = data;

  return rows.map((row) => ({
    date: row[0],
    ccNumber: row[1],
    description: row[2],
    category: row[3],
    debit: row[4],
    credit: row[5],
  }));
};

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('ca-FR', {
    style: 'currency',
    currency: 'CAD',
  }).format(value);
};
