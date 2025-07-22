import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [CommonModule],  // Aquí está el CommonModule que tiene NgFor
  templateUrl: './star-rating.html',
  styleUrls: ['./star-rating.css']
})
export class StarRatingComponent {
  @Input() rating = 0;
  @Output() ratingChange = new EventEmitter<number>();

  hover: number | null = null;

  stars = [1, 2, 3, 4, 5];

  setRating(value: number) {
    this.ratingChange.emit(value);
  }

  setHover(value: number | null) {
    this.hover = value;
  }
}
