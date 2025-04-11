import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-detail.component.html',
  styleUrl: './customer-detail.component.scss',
})
export class CustomerDetailComponent implements OnInit {
  customer$!: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.customer$ = this.customerService.getCustomer(id);
    }
  }
}
