import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BienvenueComponent } from "./components/bienvenue/bienvenue.component";
import { ProduitComponent } from "./components/produit/produit.component";
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { PanierComponent } from "./components/panier/panier.component";

@Component({
  selector: 'app-root',
  imports: [BienvenueComponent, ProduitComponent, UtilisateurComponent, PanierComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp3-Angular';
  message = "";
  onProduitAjoute(nom: string) {
    this.message = `Vous avez ajouté : ${nom}`;
  }

}
