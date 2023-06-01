import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  navigateToCategoryDetails(category: string) {
    this.router.navigate(['/category-details', category]);
  }
}
