import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { Customer } from '../../models/Customer';

@Component({
  selector: 'app-customers-create',
  templateUrl: './customers-create.component.html',
  styleUrls: ['./customers-create.component.css'],
})
export class CustomersCreateComponent implements OnInit {
  constructor(private customersService: CustomersService) {}
  customer: Customer = {
    firstName: '',
    lastName: '',
    email: '',
  };
  submitted = false;

  ngOnInit(): void {}

  saveCustomer(): void {
    console.log('In');
    const data = {
      firstName: this.customer.firstName,
      lastName: this.customer.lastName,
      email: this.customer.email,
    };

    this.customersService.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
        window.location.reload();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  newCustomer(): void {
    this.submitted = false;
    this.customer = {
      firstName: '',
      lastName: '',
      email: '',
    };
  }
}
