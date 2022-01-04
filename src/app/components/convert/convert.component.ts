import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})
export class ConvertComponent implements OnInit {

  cantidad = 0;
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
          this.total = this.cantidad * 2 
        }else if(this.quiero === 'EUR')
        {
          this.total = this.cantidad * 3 
        }else if(this.quiero === 'PESOS')
        {
          this.total = this.cantidad * 4 
        }
      break;
      case 'EUR':
        if( this.quiero === 'USD')
        {
          this.total = this.cantidad
        }else if(this.quiero === 'LIBRA')
        {
          this.total = this.cantidad * 2 
        }else if(this.quiero === 'EUR')
        {
          this.total = this.cantidad * 3 
        }else if(this.quiero === 'PESOS')
        {
          this.total = this.cantidad * 4 
        }
      break;
      case 'LIBRA':
        if( this.quiero === 'USD')
        {
          this.total = this.cantidad
        }else if(this.quiero === 'LIBRA')
        {
          this.total = this.cantidad * 2 
        }else if(this.quiero === 'EUR')
        {
          this.total = this.cantidad * 3 
        }else if(this.quiero === 'PESOS')
        {
          this.total = this.cantidad * 4 
        }
      break;
      case 'PESOS':
        if( this.quiero === 'USD')
        {
          this.total = this.cantidad
        }else if(this.quiero === 'LIBRA')
        {
          this.total = this.cantidad * 2 
        }else if(this.quiero === 'EUR')
        {
          this.total = this.cantidad * 3 
        }else if(this.quiero === 'PESOS')
        {
          this.total = this.cantidad * 4 
        }
      break;
      default:
      alert("Muy chistoso, no?");
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
