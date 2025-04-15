import { Component } from '@angular/core';
import { FormulaireComponent } from './formulaire/formulaire.component';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  taches: string[] = [];

  ajouterTache(nouvelleTache: string) {
    this.taches.push(nouvelleTache);
  }
}