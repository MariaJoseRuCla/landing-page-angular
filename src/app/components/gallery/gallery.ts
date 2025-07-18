import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  // Muy importante para reconocer <swiper-slide> y <swiper-container>
})
export class GalleryComponent {
  images = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.png',
  ];
}
