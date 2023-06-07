import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddRecordComponent } from './pages/dashboard/add-record/add-record.component';
import { SummaryCardComponent } from './pages/dashboard/summary-card/summary-card.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ExpensesTabComponent } from './pages/dashboard/summary-card/expenses-tab/expenses-tab.component';
import { IncomesTabComponent } from './pages/dashboard/summary-card/incomes-tab/incomes-tab.component';
import { CategoryDetailsComponent } from './pages/dashboard/summary-card/category-details/category-details.component';
import { RecordTableComponent } from './pages/dashboard/summary-card/record-table/record-table.component';
import { EditRecordComponent } from './pages/dashboard/summary-card/record-table/edit-record/edit-record.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AddRecordComponent,
    SummaryCardComponent,
    ExpensesTabComponent,
    IncomesTabComponent,
    CategoryDetailsComponent,
    RecordTableComponent,
    EditRecordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
