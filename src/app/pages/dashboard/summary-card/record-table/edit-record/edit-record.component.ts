import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FinancialRecordService } from 'src/app/services/financial-record.service';
import { FinancialRecord } from '../../../financial-record.interface';

@Component({
  selector: 'app-edit-record',
  templateUrl: './edit-record.component.html',
  styleUrls: ['./edit-record.component.css'],
})
export class EditRecordComponent implements OnInit {
  record: FinancialRecord = {
    name: '',
    amount: 0,
    date: null,
    description: '',
    category: null,
    is_income: null,
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private financialRecordService: FinancialRecordService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.fetchRecordById(id);
    });
  }

  fetchRecordById(id: number) {
    this.financialRecordService
      .getFinancialRecordById(id)
      .subscribe((record) => {
        this.record = record;
      });
  }

  saveRecord() {
    this.financialRecordService
      .updateFinancialRecord(this.record)
      .subscribe(() => {
        this.router.navigate(['/category-details', this.record.category]);
      });
  }

  cancelEdit() {
    this.router.navigate(['/category-details', this.record.category]);
  }
}
