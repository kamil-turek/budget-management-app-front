export interface FinancialRecord {
  id?: number;
  name: string | null;
  amount: number;
  category: string | null;
  date: Date | null;
  description?: string | null;
  is_income: boolean | null;
}
