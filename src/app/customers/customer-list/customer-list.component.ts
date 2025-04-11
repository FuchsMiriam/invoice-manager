import { CommonModule} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-list',
  imports: [RouterModule, CommonModule],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent implements OnInit {
  customers$!: Observable<any[]>;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    // Loading customers from Firebase
      this.customers$ = this.customerService.getCustomers();
  }
  
}
