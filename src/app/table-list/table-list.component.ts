import { Component, OnInit } from '@angular/core';
import { ApiSwapi } from 'app/services/swapi.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  data:any;
  dataPlanets:any;

  constructor(
    private apiSwapi: ApiSwapi
  ) { }

  ngOnInit() {
    this.getPlanets(1);
  }

  getPlanets(page:number) {
    let httpParams = { page: page };
    this.apiSwapi.getPlanets(httpParams).subscribe((response) => {
      this.data = response;
      this.dataPlanets = this.data.results.sort();
    });
  }

  changePage(page:number) {
    this.getPlanets(page);
  }


}
