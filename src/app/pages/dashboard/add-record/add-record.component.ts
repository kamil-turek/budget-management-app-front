import { Component, ViewChild } from '@angular/core';
import { FinancialRecordService } from 'src/app/services/financial-record.service';
import { FinancialRecord } from '../financial-record.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css'],
})
export class AddRecordComponent {
  @ViewChild('recordForm') recordForm!: NgForm;
  is_income: boolean = false;
  categories: string[] = [];

  constructor(private financialRecordService: FinancialRecordService) {}

  ngOnInit() {
    this.fetchCategories();
  }

  fetchCategories() {
    this.financialRecordService
      .getCategories()
      .subscribe((response) => (this.categories = response));
  }

  onSubmit() {
    const recordFormValue = this.recordForm.value;
    const record: FinancialRecord = {
      name: recordFormValue.name,
      amount: recordFormValue.amount,
      category: recordFormValue.category,
      date: new Date(),
      description: recordFormValue.description,
      is_income: recordFormValue.is_income,
    };

    this.financialRecordService.addFinancialRecord(record).subscribe(() => {
      this.recordForm.reset();
      this.resetValidationStates();
    });
  }

  private resetValidationStates() {
    Object.keys(this.recordForm.controls).forEach((controlName) => {
      this.recordForm.controls[controlName].markAsUntouched();
      this.recordForm.controls[controlName].markAsPristine();
      this.recordForm.controls[controlName].setErrors(null);
    });
  }
}
