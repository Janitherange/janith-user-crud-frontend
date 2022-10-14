import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CrudApiService} from "../../services/crud-api.service";
import {UserModel} from "../../models/user.model";

import * as moment from 'moment-timezone';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
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

  id: string | null = "";

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private crudApiService: CrudApiService, private router: Router) {
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
    this.id = this.route.snapshot.paramMap.get("id");
    if (!this.id) {
      return;
    }

    this.crudApiService.viewUser(this.id).subscribe(user => {
      this.form.setValue({
        username: user.username,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        address: user.address,
        dateOfBirth: moment(user.dateOfBirth).format('YYYY-MM-DD'),
        salary: user.salary
      });
    })
  }

  usernameChange() {
    const usernameControl = this.form.get("username");
    if (!usernameControl) {
      return;
    }
    if (usernameControl.valid && usernameControl.dirty) {
      this.isValidUsername = true;
      this.isErrorUsername = false;
    } else if (usernameControl.invalid && usernameControl.dirty) {
      this.isErrorUsername = true;
      this.isValidUsername = false;
    } else if (usernameControl.untouched) {
      this.isErrorUsername = false;
      this.isValidUsername = false;
    }
  }

  emailChange() {
    const emailControl = this.form.get("email");
    if (!emailControl) {
      return;
    }
    if (emailControl.valid && emailControl.dirty) {
      this.isValidEmail = true;
      this.isErrorEmail = false
    } else if (emailControl.invalid && emailControl.dirty) {
      this.isErrorEmail = true;
      this.isValidEmail = false
    } else if (emailControl.untouched) {
      this.isErrorEmail = false;
      this.isValidEmail = false;
    }
  }

  firstNameChange() {
    const firstNameControl = this.form.get("firstName");
    if (!firstNameControl) {
      return;
    }
    if (firstNameControl.valid && firstNameControl.dirty) {
      this.isValidFirstName = true;
      this.isErrorFirstName = false
    } else if (firstNameControl.invalid && firstNameControl.dirty) {
      this.isErrorFirstName = true;
      this.isValidFirstName = false
    } else if (firstNameControl.untouched) {
      this.isValidFirstName = false;
      this.isErrorFirstName = false;
    }
  }

  lastNameChange() {
    const lastNameControl = this.form.get("lastName");
    if (!lastNameControl) {
      return;
    }
    if (lastNameControl.valid && lastNameControl.dirty) {
      this.isValidLastName = true;
      this.isErrorLastName = false
    } else if (lastNameControl.invalid && lastNameControl.dirty) {
      this.isErrorLastName = true;
      this.isValidLastName = false
    } else if (lastNameControl.untouched) {
      this.isValidLastName = false;
      this.isErrorLastName = false;
    }
  }

  addressChange() {
    const addressControl = this.form.get("address");
    if (!addressControl) {
      return;
    }
    if (addressControl.valid && addressControl.dirty) {
      this.isValidAddress = true;
      this.isErrorAddress = false
    } else if (addressControl.invalid && addressControl.dirty) {
      this.isErrorAddress = true;
      this.isValidAddress = false
    } else if (addressControl.untouched) {
      this.isErrorAddress = false;
      this.isValidAddress = false;
    }
  }

  dateOfBirthChange() {
    const dateOfBirthControl = this.form.get("dateOfBirth");
    if (!dateOfBirthControl) {
      return;
    }
    if (dateOfBirthControl.valid && dateOfBirthControl.dirty) {
      this.isValidDateOfBirth = true;
      this.isErrorDateOfBirth = false
    } else if (dateOfBirthControl.invalid && dateOfBirthControl.dirty) {
      this.isErrorDateOfBirth = true;
      this.isValidDateOfBirth = false
    } else if (dateOfBirthControl.untouched) {
      this.isValidDateOfBirth = false;
      this.isErrorDateOfBirth = false;
    }
  }

  salaryChange() {
    const salaryControl = this.form.get("salary");
    if (!salaryControl) {
      return;
    }
    if (salaryControl.valid && salaryControl.dirty) {
      this.isValidSalary = true;
      this.isErrorSalary = false
    } else if (salaryControl.invalid && salaryControl.dirty) {
      this.isErrorSalary = true;
      this.isValidSalary = false
    } else if (salaryControl.untouched) {
      this.isValidSalary = false;
      this.isErrorSalary = false;
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

  update() {
    if (!this.id) {
      return;
    }

    const user: UserModel = this.form.value
    return this.crudApiService.updateUser(this.id, user).subscribe(async () => {
      await this.router.navigateByUrl("", {replaceUrl: true})
    });
  }

}
