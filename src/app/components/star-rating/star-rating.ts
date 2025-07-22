import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-rating.html',
  styleUrls: ['./star-rating.css']
})
export class StarRatingComponent {
  @Input() rating = 0;
  @Output() ratingChange = new EventEmitter<number>();

  @Input() readOnly = false;  // <--- Agrega esta línea

  hover: number | null = null;

  stars = [1, 2, 3, 4, 5];

  setRating(value: number) {
    if (!this.readOnly) {  // Solo cambiar rating si NO es readonly
      this.ratingChange.emit(value);
    }
  }

  setHover(value: number | null) {
    if (!this.readOnly) {  // Solo mostrar hover si NO es readonly
      this.hover = value;
    }
  }
}
