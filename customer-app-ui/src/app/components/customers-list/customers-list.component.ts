import { Component, OnInit, HostListener } from '@angular/core';
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
  firstNameDirection: string = 'asc';
  lastNameDirection: string = 'asc';
  createdAtDirection: string = 'asc';
  searchNeedle: string = '';

  @HostListener('input') oninput() {
    this.searchCustomers();
  }

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

  searchCustomers(): void {
    if (this.searchNeedle === '') return this.retrieveCustomers();
    else {
      this.customerService.searchBy(this.searchNeedle).subscribe(
        (data) => {
          this.customers = data;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  sort(attribute: string, direction: string): void {
    this.customerService.OrderBy(attribute, direction).subscribe(
      (data) => {
        this.customers = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  sortByFirstName(): void {
    if (this.firstNameDirection === 'asc') this.firstNameDirection = 'desc';
    else this.firstNameDirection = 'asc';
    return this.sort('firstName', this.firstNameDirection);
  }

  sortByLastName(): void {
    if (this.lastNameDirection === 'asc') this.lastNameDirection = 'desc';
    else this.lastNameDirection = 'asc';
    return this.sort('lastName', this.lastNameDirection);
  }

  sortByCreatedAt(): void {
    if (this.createdAtDirection === 'asc') this.createdAtDirection = 'desc';
    else this.createdAtDirection = 'asc';
    return this.sort('createdAt', this.createdAtDirection);
  }
}
