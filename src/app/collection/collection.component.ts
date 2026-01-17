import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-collection',
  imports: [CommonModule],
  templateUrl: './collection.component.html',
  styleUrls:[ './collection.component.scss', './collection-responsive.component.scss' ]
})
export class CollectionComponent {


  // Array, um den Flip-Status der Karten zu speichern
  flippedCards: boolean[] = [false, false, false, false];

  // Funktion, um den Flip-Zustand zu toggeln
  toggleCard(index: number): void {
    this.flippedCards[index] = !this.flippedCards[index];
  }
}

