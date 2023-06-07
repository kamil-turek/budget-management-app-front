import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FinancialRecordService } from 'src/app/services/financial-record.service';
import { FinancialRecord } from '../../financial-record.interface';
import { map } from 'rxjs';

@Component({
  selector: 'app-incomes-tab',
  templateUrl: './incomes-tab.component.html',
  styleUrls: ['./incomes-tab.component.css'],
})
export class IncomesTabComponent {
  incomeCategories: string[] = [
    'SALARY',
    'BUSINESS',
    'INVESTMENT',
    'RENTAL',
    'GIFTS',
    'OTHER_INCOME',
  ];

  categoryAmounts: { [category: string]: number } = {};
  overallIncomeAmount: number = 0;

  constructor(
    private router: Router,
    private financialRecordService: FinancialRecordService
  ) {}

  ngOnInit() {
    this.calculateCategoryAmounts();
    this.calculateOverallIncomeAmount();
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
            this.incomeCategories
          );
      });
  }

  calculateOverallIncomeAmount() {
    this.financialRecordService
      .getAllFinancialRecords()
      .pipe(
        map((records: FinancialRecord[]) => {
          return records.reduce(
            (sum, record) => sum + (record.is_income ? record.amount : 0),
            0
          );
        })
      )
      .subscribe((amount: number) => {
        this.overallIncomeAmount = amount;
      });
  }

  getCategorySummary(category: string): number {
    return this.categoryAmounts[category] || 0;
  }
}
