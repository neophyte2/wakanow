import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from "rxjs/operators";
import { Subject } from 'rxjs';
import { GeneralService } from 'src/app/shared/services/general.service';
import { UserService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  userList: any;
  isloading: boolean = false
  unsubscribe = new Subject();

  constructor(
    public genSrv: GeneralService,
    private userSrv: UserService,
  ) { }

  ngOnInit(): void {
    this.getUsersList();
  }

  /**
   * Get all users 
   */
  getUsersList() {
    this.isloading = true;
    this.userSrv.getUsers().pipe(takeUntil(this.unsubscribe)).subscribe((res: any) => {
      this.userList = res
      this.isloading = false;
    })
  }

  /**
   * decision making for delete button
   * @param data 
   */
  deleteUserDecision(data: any) {
    const fullName = `${data.firstname} ${data.lastname}`
    this.genSrv
      .sweetAlertFileDeletions(fullName)
      .then(async (result) => {
        if (result.value) {
          this.deleteUser(data);
        }
      });
  }

  /**
   * delete function
   * @param data 
   */
  deleteUser(data: any) {
    this.userSrv.deleteUser(data.id).then(res => {
      this.genSrv.sweetAlertSucess('User Has Been Successfully Deleted')
    }).catch(error => {
      this.genSrv.sweetAlertSucess('Sorry,Try Again')
    })
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}

