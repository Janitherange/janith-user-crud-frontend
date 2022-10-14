import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModel} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class CrudApiService {

  constructor(private http:HttpClient) { }

  viewUsers(): Observable<UserModel[]>{
      return this.http.get<UserModel[]>("http://localhost:3000/backend/view");
  }

  createUser(data: UserModel): Observable<UserModel>{
    return this.http.post<UserModel>("http://localhost:3000/backend/create", data);
  }

  viewUser(id: string): Observable<UserModel> {
    return this.http.get<UserModel>(`http://localhost:3000/backend/view/${id}`)
  }

  updateUser(id: string, data: UserModel): Observable<UserModel>{
    return this.http.put<UserModel>(`http://localhost:3000/backend/update/${id}`, data);
  }

  deleteUser(id: string): Observable<UserModel>{
    return this.http.delete<UserModel>(`http://localhost:3000/backend/delete/${id}`);
  }
}
