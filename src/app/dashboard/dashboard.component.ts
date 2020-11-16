import { Component, OnInit } from '@angular/core';
import { ApiSwapi } from "../services/swapi.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data:any;
  dataPeoples:any;

  constructor(
    private apiSwapi: ApiSwapi
  ) { }
  
  ngOnInit() {
    
  }

  getPeoples(ordenador:string, page:number) {
    let httpParams = { page: page, sort: ordenador };
    this.apiSwapi.getPeoplesByOrder(httpParams).subscribe((response) => {
      this.data = response;
      this.dataPeoples = this.data.results;
    });
  }

  changePage(page:number) {
    this.getPeoples('name', page);
  }

  toogleSelect() {
    let value = (<HTMLSelectElement>document.querySelector('#selectOrder')).value;
    this.getPeoples(value, 1);
  }

}
