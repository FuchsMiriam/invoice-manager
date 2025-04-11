import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-list',
  imports: [RouterModule, NgFor],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent implements OnInit {
  customers: any[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    // Loading customers from Firebase
    this.customerService.getCustomers().subscribe(data => {
      this.customers = data;
    });
  }
  
}
