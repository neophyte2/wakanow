import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { Location } from "@angular/common";

@Injectable({
  providedIn: "root",
})

export class GeneralService {

  constructor(
    private location: Location
  ) { }

  /**
   * For Success Messages
   * @param msg 
   * @returns 
   */
  sweetAlertSucess(msg: any) {
    return Swal.fire('Success', msg, "success");
  }

  /**
   * For Error Messages
   * @param msg 
   * @returns 
   */
  sweetAlertError(msg: any) {
    return Swal.fire("Sorry ,Try Again", msg, "error");
  }

  /**
   * For making Delete Decesions
   * @param type 
   * @returns 
   */
  sweetAlertFileDeletions(type: any) {
    return Swal.fire({
      title: `Delete ${type}?`,
      text: "You won't be able to revert this!",
      // type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete!",
    });
  }

  /**
   * Use to go back to the last page
   */
  goBack() {
    this.location.back();
  }

}
