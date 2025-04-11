import { inject, Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, setDoc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Customer {
  id?: string;
  name: string;
  email: string;
  address: string;
  phone: number;
  taxId: number,
  paymentTerms: string;
  discount: string;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private firestore = inject(Firestore);

  //Get customer list
  getCustomers(): Observable<any[]> {
    const customersRef = collection(this.firestore, 'customers');
    return collectionData(customersRef, { idField: 'id' });
  }

  //Get specific customer
  getCustomer(id: string): Observable<any> {
    const docRef = doc(this.firestore, `customers/${id}`);
    return docData(docRef, { idField: 'id' });
  }

  //Add customer
  addCustomer(customer: any): Promise<void> {
    const docRef = doc(collection(this.firestore, 'customers'));
    return setDoc(docRef, customer);
  }

  //Update customer
  updateCustomer(id: string, customer: any): Promise<void> {
    const docRef = doc(this.firestore, `customers/${id}`);
    return updateDoc(docRef, customer);
  }

  //Delete customer
  deleteCustomer(id: string): Promise<void> {
    const docRef = doc(this.firestore, `customers/${id}`);
    return deleteDoc(docRef);
  }
}
