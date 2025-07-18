import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.html',
  styleUrls: ['./features.css']
})
export class FeaturesComponent {
  features = [
    "Pantalla de alta resolución de 6”. ",
    "Luz cálida ajustable para leer de noche.",
    "Almacenamiento gratuito en la nube para todo el contenido de Amazon.",
    "Se carga completamente en menos de 2 horas.",
    "16 GB, con espacio para miles de libros."
  ];
}
