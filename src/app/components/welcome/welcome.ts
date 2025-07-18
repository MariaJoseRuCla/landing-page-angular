import { Component } from '@angular/core';
import { BuyButtonComponent } from '../buy-button/buy-button';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [BuyButtonComponent],
  templateUrl: './welcome.html',
  styleUrls: ['./welcome.css']
})
export class WelcomeComponent {
  productName = 'Kindle Paperwhite';
  productDescription = 'Lee cómodamente tanto de día como de noche.';
  productPrice = 119; // mejor número, no string
}
