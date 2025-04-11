import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-customer-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.scss'
})
export class CustomerFormComponent {
  customer = {
    name: '',
    email: '',
    address: '',
    phone: '',
    taxId: '',
    paymentTerms: '30',
    discount: 0,
  };

  constructor(private customerService: CustomerService) {}

  onSubmit() {
    this.customerService.addCustomer(this.customer);
    this.customer = {
      name: '',
      email: '',
      address: '',
      phone: '',
      taxId: '',
      paymentTerms: '30',
      discount: 0,
    };
  }
}
