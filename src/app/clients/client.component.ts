import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
})

export class ClientComponent implements OnInit {

  clients : any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.sendGetRequest("/clients").subscribe((data: any)=>{
      this.clients = data;
    })  
  }
}
