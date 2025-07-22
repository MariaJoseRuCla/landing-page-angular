import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StarRatingComponent } from '../star-rating/star-rating';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, StarRatingComponent],
  templateUrl: './reviews.html',
  styleUrls: ['./reviews.css']
})
export class ReviewsComponent implements OnInit {
  reviews: any[] = [];
  loading = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:4321/api/review').subscribe({
      next: (data) => {
        this.reviews = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.reviews = [];
      }
    });
  }
}
