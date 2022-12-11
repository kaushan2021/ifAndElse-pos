import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  userArray:any;
  display = "none";

constructor(private http:HttpClient){}

ngOnInit(): void {
 this.getUserData();

}

async getUserData(){
  await this.http.get('http://localhost:9000/users/getUsersData').subscribe((response)=>this.userArray=response);
}
openModal() {
  this.display = "block";
}
onCloseHandled() {
  this.display = "none";
}
}