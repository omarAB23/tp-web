import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-taches',
  imports: [CommonModule],
  templateUrl: './taches.component.html',
  styleUrl: './taches.component.css'
})
export class TachesComponent {
  taches = [
    { description: 'Faire Angular', completed: false, priorite: 'haute' },
    { description: 'Étudier TS', completed: true, priorite: 'moyenne' },
    { description: 'CSS basics', completed: false, priorite: 'basse' }
  ];

  // Toggle du statut d'une tâche
  toggleStatus(t: any) {
    t.completed = !t.completed;
  }
}
