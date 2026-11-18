import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Accueil} from './components/accueil/accueil';
import { Navigation } from './components/navigation/navigation';
import { APropos } from './components/a-propos/a-propos';
import { Competences } from './components/competences/competences';

@Component({
  imports: [RouterOutlet, Accueil, Navigation, APropos, Competences],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('portofolio-professionnel');
}
