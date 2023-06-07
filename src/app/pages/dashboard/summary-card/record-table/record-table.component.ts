import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FinancialRecordService } from 'src/app/services/financial-record.service';

@Component({
  selector: 'app-record-table',
  templateUrl: './record-table.component.html',
  styleUrls: ['./record-table.component.css'],
})
export class RecordTableComponent {
  @Input() financialRecords!: any[];
  displayedColumns: string[] = [
    'name',
    'amount',
    'date',
    'description',
    'actions',
  ];

  constructor(
    private financialRecordService: FinancialRecordService,
    private router: Router
  ) {}

  deleteRecord(id: number) {
    this.financialRecordService.deleteFinancialRecord(id).subscribe(() => {
      this.financialRecords = this.financialRecords.filter(
        (record) => record.id !== id
      );
    });
  }

  editRecord(id: number) {
    this.router.navigate(['/edit-record', id]);
  }
}
