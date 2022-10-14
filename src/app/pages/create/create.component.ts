import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CrudApiService} from "../../services/crud-api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  isValidUsername = false;
  isErrorUsername = false;
  isValidEmail = false;
  isErrorEmail = false;
  isValidFirstName = false;
  isErrorFirstName = false;
  isValidLastName = false;
  isErrorLastName = false;
  isValidAddress = false;
  isErrorAddress = false;
  isValidDateOfBirth = false;
  isErrorDateOfBirth = false;
  isValidSalary = false;
  isErrorSalary = false;

  constructor(private formBuilder: FormBuilder, private crudApiService: CrudApiService, private router: Router) {
    this.form = this.formBuilder.group({
      username: [
        "",
        [Validators.required, Validators.minLength(3), Validators.maxLength(8)]
      ],
      email: [
        "",
        [Validators.required, Validators.email]
      ],
      firstName: [
        "",
        [Validators.required, Validators.minLength(3), Validators.maxLength(20)]
      ],
      lastName: [
        "",
        [Validators.required, Validators.minLength(3), Validators.maxLength(20)]
      ],
      address: [
        "",
        [Validators.required, Validators.minLength(5), Validators.maxLength(80)]
      ],
      dateOfBirth: [
        "",
        [Validators.required,]
      ],
      salary: [
        "",
        [Validators.required, Validators.min(0)]
      ],
    })
  }


  ngOnInit(): void {
  }

  usernameChange() {
    const usernameControl = this.form.get("username");
    if (!usernameControl) {
      return;
    }
    if (usernameControl.valid) {
      this.isValidUsername = true;
      this.isErrorUsername = false
    } else {
      this.isErrorUsername = true;
      this.isValidUsername = false
    }
  }

  emailChange() {
    const emailControl = this.form.get("email");
    if (!emailControl) {
      return;
    }
    if (emailControl.valid) {
      this.isValidEmail = true;
      this.isErrorEmail = false
    } else {
      this.isErrorEmail = true;
      this.isValidEmail = false
    }
  }

  firstNameChange() {
    const firstNameControl = this.form.get("firstName");
    if (!firstNameControl) {
      return;
    }
    if (firstNameControl.valid) {
      this.isValidFirstName = true;
      this.isErrorFirstName = false
    } else {
      this.isErrorFirstName = true;
      this.isValidFirstName = false
    }
  }

  lastNameChange() {
    const lastNameControl = this.form.get("lastName");
    if (!lastNameControl) {
      return;
    }
    if (lastNameControl.valid) {
      this.isValidLastName = true;
      this.isErrorLastName = false
    } else {
      this.isErrorLastName = true;
      this.isValidLastName = false
    }
  }

  addressChange() {
    const addressControl = this.form.get("address");
    if (!addressControl) {
      return;
    }
    if (addressControl.valid) {
      this.isValidAddress = true;
      this.isErrorAddress = false
    } else {
      this.isErrorAddress = true;
      this.isValidAddress = false
    }
  }

  dateOfBirthChange() {
    const dateOfBirthControl = this.form.get("dateOfBirth");
    if (!dateOfBirthControl) {
      return;
    }
    if (dateOfBirthControl.valid) {
      this.isValidDateOfBirth = true;
      this.isErrorDateOfBirth = false
    } else {
      this.isErrorDateOfBirth = true;
      this.isValidDateOfBirth = false
    }
  }

  salaryChange() {
    const salaryControl = this.form.get("salary");
    if (!salaryControl) {
      return;
    }
    if (salaryControl.valid) {
      this.isValidSalary = true;
      this.isErrorSalary = false
    } else {
      this.isErrorSalary = true;
      this.isValidSalary = false
    }
  }

  resetForm() {
    this.form.reset()
    this.isValidUsername = false;
    this.isErrorUsername = false;
    this.isValidEmail = false;
    this.isErrorEmail = false;
    this.isValidFirstName = false;
    this.isErrorFirstName = false;
    this.isValidLastName = false;
    this.isErrorLastName = false;
    this.isValidAddress = false;
    this.isErrorAddress = false;
    this.isValidDateOfBirth = false;
    this.isErrorDateOfBirth = false;
    this.isValidSalary = false;
    this.isErrorSalary = false;

  }

  save() {
    const data = this.crudApiService.createUser(this.form.value);
    if (data) {
      data.subscribe(async value=>{
        // console.log(value);
        await this.router.navigateByUrl("", {replaceUrl: true});
      })

    }
  }
}
