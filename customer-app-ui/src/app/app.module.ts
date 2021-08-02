import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { CustomersDashboardComponent } from './components/customers-dashboard/customers-dashboard.component';
import { CustomersCreateComponent } from './components/customers-create/customers-create.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { CustomersUpdateComponent } from './components/customers-update/customers-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    CustomersDashboardComponent,
    CustomersCreateComponent,
    CustomersListComponent,
    CustomersUpdateComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
