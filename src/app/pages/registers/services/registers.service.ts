import { Injectable } from '@angular/core';
import { Firestore, addDoc, docData, doc, updateDoc, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistersService {

  constructor(
    private fireStore: Firestore
  ) { }

  /**
   * creating a user
   * @param payload 
   * @returns 
   */
  createUser(payload: any) {
    const data = {
      firstname: payload.firstname,
      lastname: payload.lastname,
      phone: payload.phone,
      email: payload.email,
      password: payload.password,
    }
    const usersRef = collection(this.fireStore, 'Users')
    return addDoc(usersRef, data)
  }

  /**
   * updating the user infor
   * @param payload 
   * @returns 
   */
  updateUser(payload: any) {
    const data = {
      firstname: payload.firstname,
      lastname: payload.lastname,
      phone: payload.phone,
      email: payload.email,
      password: payload.password,
    }
    const usersRef = doc(this.fireStore, `Users/${payload.id}`)
    return updateDoc(usersRef, data)
  }

  /**
   * GET  user info by id
   * @param id 
   * @returns a particular user iNFO
   */
  getUserById(id: any): Observable<any> {
    const usersRef = doc(this.fireStore, `Users/${id}`)
    return docData(usersRef, { idField: 'id' }) as Observable<any>;
  }
}

