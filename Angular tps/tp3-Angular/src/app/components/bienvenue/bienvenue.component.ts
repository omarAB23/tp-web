import { Component } from '@angular/core';

@Component({
  selector: 'app-bienvenue',
  imports: [],
  templateUrl: './bienvenue.component.html',
  styleUrl: './bienvenue.component.css'
})
export class BienvenueComponent {
  message: string = "Bienvenue sur notre site!";
}
