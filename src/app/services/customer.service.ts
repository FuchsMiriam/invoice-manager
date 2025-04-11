import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private firestore: AngularFirestore
  ) { }

  // Get customer from Firebase
  getCustomers(): Observable<any[]> {
    return this.firestore.collection('customers').valueChanges();
  }

  // Add customer
  addCustomer(customer: any): Promise<any> {
    return this.firestore.collection('customers').add(customer);
  }

  // Update customer
  updateCustomer(id: string, customer: any): Promise<void> {
    return this.firestore.collection('customers').doc(id).update(customer);
  }

  // Delete customer
  deleteCustomer(id: string): Promise<void> {
    return this.firestore.collection('customers').doc(id).delete();
  }

  // Get details of a specific customer
  getCustomer(id: string): Observable<any> {
    return this.firestore.collection('customers').doc(id).valueChanges();
  }
}
