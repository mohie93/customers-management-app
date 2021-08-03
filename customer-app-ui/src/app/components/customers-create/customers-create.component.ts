import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-customers-create',
  templateUrl: './customers-create.component.html',
  styleUrls: ['./customers-create.component.css'],
})
export class CustomersCreateComponent implements OnInit {
  constructor(private customersService: CustomersService) {}

  createCustomerForm: any;

  ngOnInit(): void {
    this.createCustomerForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  get firstName() {
    return this.createCustomerForm.get('firstName');
  }

  get lastName() {
    return this.createCustomerForm.get('lastName');
  }

  get email() {
    return this.createCustomerForm.get('email');
  }

  handleFormSubmission() {
    if (this.createCustomerForm.valid) {
      console.log(this.createCustomerForm.value);
      const data = {
        firstName: this.createCustomerForm.value.firstName,
        lastName: this.createCustomerForm.value.lastName,
        email: this.createCustomerForm.value.email,
      };
      this.customersService.create(data).subscribe(
        (response) => {
          console.log(response);
          this.createCustomerForm.reset();
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
