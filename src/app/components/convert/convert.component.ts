import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})
export class ConvertComponent implements OnInit {

  cantidad!: number;
  tengo = 'USD';
  quiero = 'EUR';
  total = 0;

  monedas: string[] = ['USD','EUR','LIBRA','PESOS'];

  convertir(): void
  {
    switch(this.tengo)
    {
      case 'USD':
        if( this.quiero === 'USD')
        {
          this.total = this.cantidad
        }else if(this.quiero === 'LIBRA')
        {
          this.total = this.cantidad * 0.74 
        }else if(this.quiero === 'EUR')
        {
          this.total = this.cantidad * 0.89 
        }else if(this.quiero === 'PESOS')
        {
          this.total = this.cantidad * 4080
        }
      break;
      case 'EUR':
        if( this.quiero === 'EUR')
        {
          this.total = this.cantidad
        }else if(this.quiero === 'LIBRA')
        {
          this.total = this.cantidad * 0.83 
        }else if(this.quiero === 'USD')
        {
          this.total = this.cantidad * 1.13 
        }else if(this.quiero === 'PESOS')
        {
          this.total = this.cantidad * 4605 
        }
      break;
      case 'LIBRA':
        if( this.quiero === 'LIBRA')
        {
          this.total = this.cantidad
        }else if(this.quiero === 'USD')
        {
          this.total = this.cantidad * 1.35
        }else if(this.quiero === 'EUR')
        {
          this.total = this.cantidad * 1.20 
        }else if(this.quiero === 'PESOS')
        {
          this.total = this.cantidad * 5522 
        }
      break;
      case 'PESOS':
        if( this.quiero === 'PESOS')
        {
          this.total = this.cantidad
        }else if(this.quiero === 'LIBRA')
        {
          this.total = this.cantidad * 0.00018 
        }else if(this.quiero === 'EUR')
        {
          this.total = this.cantidad * 0.00022 
        }else if(this.quiero === 'USD')
        {
          this.total = this.cantidad * 0.00025 
        }
      break;
      default:
      alert("Muy chistoso, no?");
    }
  }

  constructor() 
  { 

  }

  ngOnInit(): void {
  }

}
