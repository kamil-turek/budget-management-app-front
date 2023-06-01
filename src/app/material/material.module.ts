import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [
    MatSlideToggleModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
  ],
  exports: [
    MatSlideToggleModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
  ],
})
export class MaterialModule {}
