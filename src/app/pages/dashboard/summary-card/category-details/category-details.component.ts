import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FinancialRecordService } from 'src/app/services/financial-record.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css'],
})
export class CategoryDetailsComponent {
  financialRecords!: any[];
  categoryTitle: string = '';

  constructor(
    private financialRecordService: FinancialRecordService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const category = params['category'];
      this.categoryTitle = category;
      this.fetchFinancialRecords(category);
    });
  }

  fetchFinancialRecords(category: string) {
    this.financialRecordService
      .getAllFinancialRecords()
      .subscribe((records) => {
        this.financialRecords = records.filter(
          (record) => record.category === category
        );
        console.log(this.financialRecords);
      });
  }
}
