import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { ArticlesComponent } from "./components/articles/articles.component";
import { ProduitsComponent } from "./components/produits/produits.component";
import { TachesComponent } from "./components/taches/taches.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, ArticlesComponent, ProduitsComponent, TachesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-tp4';
}
