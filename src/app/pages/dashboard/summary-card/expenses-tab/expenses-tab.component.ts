import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FinancialRecordService } from 'src/app/services/financial-record.service';
import { FinancialRecord } from '../../financial-record.interface';
import { map } from 'rxjs';

@Component({
  selector: 'app-expenses-tab',
  templateUrl: './expenses-tab.component.html',
  styleUrls: ['./expenses-tab.component.css'],
})
export class ExpensesTabComponent {
  expenseCategories: string[] = [
    'FOOD',
    'TRANSPORTATION',
    'HOUSING',
    'UTILITIES',
    'ENTERTAINMENT',
    'HEALTHCARE',
    'EDUCATION',
    'PERSONAL_CARE',
    'DEBT',
    'CHARITY',
    'OTHER_EXPENSE',
  ];

  categoryAmounts: { [category: string]: number } = {};
  overallExpenseAmount: number = 0;

  constructor(
    private router: Router,
    private financialRecordService: FinancialRecordService
  ) {}

  ngOnInit() {
    this.calculateCategoryAmounts();
    this.calculateOverallExpenseAmount();
  }

  navigateToCategoryDetails(category: string) {
    this.router.navigate(['/category-details', category]);
  }

  calculateCategoryAmounts() {
    this.financialRecordService
      .getAllFinancialRecords()
      .subscribe((records: FinancialRecord[]) => {
        this.categoryAmounts =
          this.financialRecordService.getCategoryAmountsForRecords(
            records,
            this.expenseCategories
          );
      });
  }

  calculateOverallExpenseAmount() {
    this.financialRecordService
      .getAllFinancialRecords()
      .pipe(
        map((records: FinancialRecord[]) => {
          return records.reduce(
            (sum, record) => sum + (record.is_income ? 0 : record.amount),
            0
          );
        })
      )
      .subscribe((amount: number) => {
        this.overallExpenseAmount = amount;
      });
  }

  getCategorySummary(category: string): number {
    return this.categoryAmounts[category] || 0;
  }
}
