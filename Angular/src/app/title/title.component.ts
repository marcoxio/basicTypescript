import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  name: string = 'Maria'
  lastName: string = 'Perez'
  alumn:any = 
  {
    name: 'Carlos',
    lastName: 'Pineda',
    age: 21
  }

  imagen: string = 'https://lh3.googleusercontent.com/proxy/me40n0ACA6SVtirWvCAcDlZr4X6t3l44Ma0wqKMyTsaNHF2BYWWZZx6AGlh-alxUMvaSBuJKX7uDP1U3r3nFD7sv4Vs_OPM'
  inputNew: string = "Whats your name?"

  email:string = ''
  password:string = ''
  
  
  
  
  constructor() { }

  ngOnInit(): void {
  }

  send() {
    console.log(this.email)
    console.log(this.password)
  }

}
