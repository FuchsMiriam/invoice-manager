import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.scss',
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
    const thankYou = document.getElementById('hidden');
    const customerForm = document.getElementById('customer-form');

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
    if (thankYou && customerForm) {
      customerForm.style.display = 'none';
      thankYou.style.display = 'block';

      setTimeout(() => {
        thankYou.style.display = 'none';
        customerForm.style.display = 'block';
      }, 3000);
    }
  }
}
