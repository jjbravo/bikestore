import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.styl']
})
export class ListUserComponent implements OnInit {
  generoSelect = 'T';

  listUsers = [
    {
      nombres: "Juan Mario",
      edad: 20,
      genero: 'M', 
      dependencia: 'SISTEMAS'
    },
    {
      nombres: "Andres Bermudez",
      edad: 28,
      genero: 'M', 
      dependencia: 'CONTABILIDAD'
    },
    {
      nombres: "Sandra Alvear",
      edad: 26,
      genero: 'F', 
      dependencia: 'SISTEMAS'
    },
    {
      nombres: "Jaime Mesa",
      edad: 28,
      genero: 'M', 
      dependencia: 'SISTEMAS'
    },
    {
      nombres: "Carolina Quintero",
      edad: 28,
      genero: 'F', 
      dependencia: 'ADMINISTRACION'
    },
    {
      nombres: "Sandra Patricia",
      edad: 27,
      genero: 'F', 
      dependencia: 'SISTEMAS'
    },
    {
      nombres: "Mauricio Aguilar",
      edad: 21,
      genero: 'M', 
      dependencia: 'SISTEMAS'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getCountFemale(): number {
    return this.listUsers.filter(item => item.genero === 'F').length;
  }

  getCountMale(): number {
    return this.listUsers.filter(item => item.genero === 'M').length;
  }

  setItemSelected(value: string): void {
    console.warn('DATA ', value);
    this.generoSelect = value;
  }
}
