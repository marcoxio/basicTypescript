import { Component, OnInit } from '@angular/core';

class Alumn{
  name:string;
  lastName:string;
  excellence:boolean;

  constructor()
  {
    this.name = this.name;
    this.lastName = this.lastName;
  }
}
@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.scss']
})
export class BootstrapComponent implements OnInit {
  alumn: Alumn = new Alumn();
  listAlumns: Array<Alumn> = new Array<Alumn>();
  constructor() { }

  ngOnInit(): void {
  }

  Add(){
    this.listAlumns.push({
      name: this.alumn.name,
      lastName: this.alumn.lastName,
      excellence: this.alumn.excellence
    })

    this.alumn.name = '';
    this.alumn.lastName = '';
    this.alumn.excellence = false;
  }

}
