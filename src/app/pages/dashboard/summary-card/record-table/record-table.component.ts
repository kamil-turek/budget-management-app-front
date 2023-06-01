import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-record-table',
  templateUrl: './record-table.component.html',
  styleUrls: ['./record-table.component.css'],
})
export class RecordTableComponent {
  @Input() financialRecords!: any[];
  displayedColumns: string[] = ['name', 'amount', 'date', 'description'];
}
