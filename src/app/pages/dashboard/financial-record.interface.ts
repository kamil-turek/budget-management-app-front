export interface FinancialRecord {
  id?: number;
  name: string | null;
  amount: number | null;
  category: string | null;
  date: Date | null;
  description?: string | null;
  is_income: boolean | null;
}
