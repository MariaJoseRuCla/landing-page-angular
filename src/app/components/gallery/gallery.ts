import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule para directivas estructurales como *ngFor y *ngIf

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],  // Aquí agregas CommonModule
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css'],
})
export class GalleryComponent {
  images = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.png',
  ];

  currentIndex = 0;

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  goTo(index: number) {
    this.currentIndex = index;
  }
}
