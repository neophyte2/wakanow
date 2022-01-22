import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GeneralService } from 'src/app/shared/services/general.service';
import { VALIDEMAILREGEX } from 'src/app/shared/utils/utils';
import { RegistersService } from '../services/registers.service';

@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.css']
})
export class RegistersComponent implements OnInit {

  id: any;
  registerForm!: FormGroup;
  btnLoading: boolean = false;
  updateBtnLoading: boolean = false;
  unsubscribe = new Subject();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private genSrv: GeneralService,
    private regSrv: RegistersService,
  ) {
    this.id = route.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this.ngOnForms();
    if (this.id) {
      this.getUserById()
    }
  }

  // Get register Form Value
  get rf() {
    return this.registerForm.controls;
  }

  ngOnForms() {
    this.registerForm = this.fb.group({
      id: [""],
      firstname: ["", Validators.required,],
      lastname: ["", Validators.required,],
      email: ["", Validators.compose([
        Validators.required,
        Validators.pattern(VALIDEMAILREGEX),
      ]),],
      phone: ["", Validators.required,],
      password: ["", Validators.required,],
      confirmPass: ["", Validators.required,],
    });
  }

  /**
   * Set the value for each input from getUserById()
   * @param data 
   */
  setValues(data: any) {
    this.registerForm.patchValue({
      id: data.id,
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      phone: data.phone,
      password: data.password,
      confirmPass: data.password
    })
  }

  /**
   * password match validations
   */
  get matchPassword() {
    const vaildPasswordInput = this.rf.password.value !== this.rf.confirmPass.value;
    return vaildPasswordInput && this.rf.password.value && this.rf.confirmPass.value;
  }

  /**
  * disble button for submission
  */
  get disableBtn() {
    const validState = this.rf.password.value && this.rf.confirmPass.value;
    const vaildMatchPassword = this.rf.password.value === this.rf.confirmPass.value;
    return !(vaildMatchPassword && validState);
  }

  /**
   * Signup method
   */
  signUp() {
    this.btnLoading = true;
    this.regSrv.createUser(this.registerForm.getRawValue()).then(res => {
      this.registerForm.reset()
      this.genSrv.sweetAlertSucess('User Has Been Successfully Registered')
      this.btnLoading = false;
      setTimeout(() => {
        this.router.navigate(["/users"]);
      }, 2000);
    }).catch(error => {
      this.genSrv.sweetAlertSucess('Sorry,Try Again')
      this.btnLoading = false;
    })

  }

  /**
   * Signup method
   */
  updateSignUp() {
    this.updateBtnLoading = true;
    this.regSrv.updateUser(this.registerForm.getRawValue()).then(res => {
      this.registerForm.reset()
      this.genSrv.sweetAlertSucess('User Has Been Successfully Updated')
      this.updateBtnLoading = false;
      setTimeout(() => {
        this.router.navigate(["/users"]);
      }, 2000);
    }).catch(error => {
      this.genSrv.sweetAlertSucess('Sorry,Try Again')
      this.updateBtnLoading = false;
    })

  }

  /**
   * Get User Info By their ID
   */
  getUserById() {
    this.regSrv.getUserById(this.id).pipe(takeUntil(this.unsubscribe)).subscribe((res: any) => {
      this.setValues(res)
    })
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}