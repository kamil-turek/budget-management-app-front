import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  navigateToCategoryDetails(category: string) {
    this.router.navigate(['/category-details', category]);
  }
}
