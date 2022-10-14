import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CrudApiService} from "../../services/crud-api.service";
import {UserModel} from "../../models/user.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  columnNames: string[];
  users: UserModel[] = []
  subscription!: Subscription;

  constructor(private router: Router, private crudApiService: CrudApiService) {
    this.columnNames = [
      "Email",
      "First Name",
      "Last Name",
      "Date of Birth",
      "Address",
      "Salary"
    ]
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(){
    this.subscription = this.crudApiService.viewUsers().subscribe((users) => {
      this.users = users;
    })
  }

  async create() {
    await this.router.navigateByUrl(`/create`, {replaceUrl: true})
  }

  async update(user: UserModel) {

    await this.router.navigateByUrl(`/update/${user.id}`, {replaceUrl: true})
  }

  async delete(id: string){

      this.crudApiService.deleteUser(id).subscribe(()=> {
        if (this.subscription){
          this.subscription.unsubscribe()
        }
        this.loadUsers();
      });


  }
}
