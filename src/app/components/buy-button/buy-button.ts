import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-buy-button',
  standalone: true,
  templateUrl: './buy-button.html',
  styleUrl: './buy-button.css'
})
export class BuyButtonComponent {
  @Input() price!: number;

  handleClick(): void {
    alert('Gracias por la compra');
  }

}
