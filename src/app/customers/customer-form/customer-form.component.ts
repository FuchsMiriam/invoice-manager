import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-customer-form',
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
    paymentTerms: '30',  // Standardmäßig 30 Tage
    discount: 0,
  };

  constructor(private customerService: CustomerService) {}

  onSubmit() {
    //this.customerService.addCustomer(this.customer); //Daten an Firebase senden
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
