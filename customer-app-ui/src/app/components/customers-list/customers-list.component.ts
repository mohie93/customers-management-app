import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { Customer } from '../../models/Customer';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css'],
})
export class CustomersListComponent implements OnInit {
  constructor(private customerService: CustomersService) {}

  customers?: Customer[];
  hasCustomers?: boolean = false;

  ngOnInit(): void {
    this.retrieveCustomers();
  }

  retrieveCustomers() {
    this.customerService.getAll().subscribe(
      (data) => {
        this.customers = data;
        this.hasCustomers = this.customers.length > 0;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteCustomer(id: any) {
    this.customerService.delete(id).subscribe(
      (data) => {
        this.retrieveCustomers();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
