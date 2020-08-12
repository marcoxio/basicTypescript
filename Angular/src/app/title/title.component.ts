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

  email:string = 'dummy@gmail.com'
  password:string = 'Dummy123!'
  
  
  
  
  constructor() { }

  ngOnInit(): void {
  }

  send(event) {
    if (event.key == "Enter") {
      console.log("Hacking the system")
    }
    console.log(this.email)
    console.log(this.password)
  }

  callAlert(){
    alert('Press Double click');
  }

  changePassword(){
    console.log(this.password);
  }

  write(value:string){
    console.log(value);
  }

  FillBackground(event){
    event.srcElement.style.background = "#66CC66"
    event.srcElement.style.width = "200px"
  }

  changeSize(event){
    event.srcElement.style.width = "500px"
    event.srcElement.style.heigth = "200px"
    event.srcElement.style.border = "1px solid #FA8082"
  }

  incrementSize(event){
    event.srcElement.style.width = "800px"
    event.srcElement.style.heigth = "400px"
    event.srcElement.style.border = "1px solid #66CC66"
  }

}
