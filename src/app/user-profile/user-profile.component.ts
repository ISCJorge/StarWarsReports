import { Component, OnInit } from '@angular/core';
import { ApiSwapi } from 'app/services/swapi.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  data:any;
  lstPeople:any;
  people:any;
  Nombre:string;
  txtPeso:string;
  txtAltura:string;
  txtColorCabello:string;
  txtNacimiento:string;

  constructor(
    private apiSwapi: ApiSwapi
  ) { }

  ngOnInit() {
    this.getPeoples();
  }

  getPeoples() {
    this.apiSwapi.getPeoples().subscribe((response) => {
      this.data = response;
      this.lstPeople = this.data.results;
      console.log(this.lstPeople);
    });
  }

  getPeople(url) {
    this.apiSwapi.getPeople(url).subscribe((response) => {
      this.people = response;
      this.setValuesToForm(this.people);
    });
  }

  setValuesToForm(personaje) {
    this.Nombre = personaje.name;
    this.txtPeso = personaje.mass;
    this.txtAltura = personaje.height;
    this.txtColorCabello = personaje.hair_color;
    this.txtNacimiento = personaje.birth_year;
  }

  toogleSelect() {
    let value = (<HTMLSelectElement>document.querySelector('#selectPeople')).value;
    this.getPeople(value);
  }

}
