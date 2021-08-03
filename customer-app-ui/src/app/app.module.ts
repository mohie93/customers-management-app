import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { CustomersDashboardComponent } from './components/customers-dashboard/customers-dashboard.component';
import { CustomersCreateComponent } from './components/customers-create/customers-create.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { CustomersUpdateComponent } from './components/customers-update/customers-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', pathMatch: 'prefix', redirectTo: 'customers' },
  { path: 'customers', component: CustomersDashboardComponent },
  {
    path: 'customers/:id/update',
    component: CustomersUpdateComponent,
  },
];
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
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
