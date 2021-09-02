import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})

export class UserComponent implements OnInit {

  users : any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.sendGetRequest("/users").subscribe((data: any)=>{
      this.users = data;
    })  
  }
}
