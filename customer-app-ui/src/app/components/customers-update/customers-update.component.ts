import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomersService } from '../../services/customers.service';
import { Customer } from '../../models/Customer';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customers-update',
  templateUrl: './customers-update.component.html',
  styleUrls: ['./customers-update.component.css'],
})
export class CustomersUpdateComponent implements OnInit {
  CustomerId: any;
  updateCustomerForm: any;
  customer: Customer = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
  };

  constructor(
    private customersService: CustomersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.CustomerId = this.route.snapshot.params.id;
    this.getById();
    this.updateCustomerForm = new FormGroup({
      firstName: new FormControl(this.customer.firstName, [
        Validators.required,
      ]),
      lastName: new FormControl(this.customer.lastName, [Validators.required]),
      email: new FormControl(this.customer.email, [
        Validators.required,
        Validators.email,
      ]),
    });
  }

  handleFormSubmission(): void {
    if (this.updateCustomerForm.valid) {
      console.log(this.updateCustomerForm.value);
      const data = {
        firstName: this.updateCustomerForm.value.firstName,
        lastName: this.updateCustomerForm.value.lastName,
        email: this.updateCustomerForm.value.email,
      };
      this.customersService.update(this.CustomerId, this.customer).subscribe(
        (response) => {
          this.updateCustomerForm.reset();
          window.location.replace('/customers');
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  getById(): void {
    this.customersService.get(this.CustomerId).subscribe(
      (response) => {
        const { id, firstName, lastName, email } = response;
        this.customer = { id, firstName, lastName, email };
      },
      (error) => {
        console.log(error);
      }
    );
  }

  get firstName() {
    return this.updateCustomerForm.get('firstName');
  }

  get lastName() {
    return this.updateCustomerForm.get('lastName');
  }

  get email() {
    return this.updateCustomerForm.get('email');
  }
}
