export interface FinancialRecord {
  name: string;
  amount: number;
  category: string;
  date: Date;
  description?: string;
  is_income: boolean;
}
