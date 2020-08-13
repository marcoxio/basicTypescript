import { Component, OnInit } from '@angular/core';


interface Product{
  name:string;
  stock:number;
  maker:string;
  closure:Date;

}

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {

  loading:boolean =false;
  names: Array<string> = ["Maria", "Ana","Juan","Pedro"]
  tab:string = ''
  isSquare:boolean = true
  products: Array<Product> = [
    {
      name: 'Arroz',
      stock: 15,
      maker: 'Fruver',
      closure: new Date('04/15/2020')
    },
    {
      name: 'Maiz',
      stock: 10,
      maker: 'Fruver',
      closure: new Date('05/15/2020')
    },
    {
      name: 'Pepsi',
      stock: 20,
      maker: 'Fruver',
      closure: new Date('04/15/2024')
    },
  ]

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
        this.loading = false;
    }, 3000);
  }

  showLoading(){
    this.loading = !this.loading;
  }

  changeTab(tab:string){
    this.tab = tab;
  }

  showSquare(){
    this.isSquare = !this.isSquare;
  }

}
