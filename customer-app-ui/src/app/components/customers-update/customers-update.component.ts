import { Component, OnInit, Input } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { Customer } from '../../models/Customer';

@Component({
  selector: 'app-customers-update',
  templateUrl: './customers-update.component.html',
  styleUrls: ['./customers-update.component.css'],
})
export class CustomersUpdateComponent implements OnInit {
  @Input() id: any;

  customer: Customer = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  constructor(private customersService: CustomersService) {}

  ngOnInit(): void {
    this.getById();
  }

  getById(): void {
    this.customersService.get(this.id).subscribe(
      (response) => {
        this.customer = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
