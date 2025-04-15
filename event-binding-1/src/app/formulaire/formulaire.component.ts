import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.scss'
})
export class FormulaireComponent {
  // Use in components with the @Output directive to emit custom events 
  // synchronously or asynchronously, and register handlers for those 
  // events by subscribing to an instance.
  @Output() nouvelleTacheEvt = new EventEmitter<string>();

  ajoutNouvelleTache(tache: string) {
    console.log(tache);
    this.nouvelleTacheEvt.emit(tache)
  }
}
