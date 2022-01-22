import { Injectable } from '@angular/core';
import { Firestore, collectionData, deleteDoc, doc, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private fireStore: Firestore
  ) { }

  /**
   * 
   * @returns list of users
   */
  getUsers(): Observable<any> {
    const usersRef = collection(this.fireStore, `Users`)
    return collectionData(usersRef, { idField: 'id' }) as Observable<any>;
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  deleteUser(id: any) {
    const usersRef = doc(this.fireStore, `Users/${id}`)
    return deleteDoc(usersRef)
  }
}

