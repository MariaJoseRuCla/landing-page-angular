import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StarRatingComponent } from '../star-rating/star-rating';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-review-button',
  standalone: true,
  imports: [CommonModule, FormsModule, StarRatingComponent],
  templateUrl: './review-button.html',
  styleUrls: ['./review-button.css']
})
export class ReviewButtonComponent {
  showForm = false;
  userName = '';
  review = '';
  rating = 0;
  message = '';

  constructor(private http: HttpClient) {}
  
  
  handleWriteReview() {
    this.showForm = true;
    this.message = '';
  }

  handleSubmit() {
    if (!this.userName.trim() || !this.review.trim() || this.rating === 0) {
      this.message = 'Por favor completa los campos y la valoración.';
      return;
    }

    const body = {
      nombre: this.userName,
      texto: this.review,
      rating: this.rating
    };
    
    this.http.post('http://localhost:4321/api/reviews', body).subscribe({
      next: () => {
        this.userName = '';
        this.review = '';
        this.rating = 0;
        this.showForm = false;
        this.message = 'Gracias por tu opinión';
      },
      error: () => {
        this.message = 'Error al enviar la opinión';
      }
    });
  }

}
