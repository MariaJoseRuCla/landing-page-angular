import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome';
import { FeaturesComponent } from './components/features/features';
import { QuestionsComponent } from './components/questions/questions';
import { GalleryComponent } from './components/gallery/gallery';
import { TableComponent } from './components/table/table';
import { VideoComponent } from './components/video/video';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WelcomeComponent, FeaturesComponent, QuestionsComponent, GalleryComponent, TableComponent, VideoComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('mi-landing-angular');
}
