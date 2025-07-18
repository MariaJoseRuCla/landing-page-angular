import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome';
import { FeaturesComponent } from './components/features/features';
import { QuestionsComponent } from './components/questions/questions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WelcomeComponent, FeaturesComponent, QuestionsComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('mi-landing-angular');
}
