import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { FormsModule } from '@angular/forms';
import { ProfilComponent } from "./components/profil/profil.component";
import { EtudiantComponent } from "./components/etudiant/etudiant.component";
@Component({
  selector: 'app-root',
  imports: [UtilisateurComponent, FormsModule, ProfilComponent, EtudiantComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //title = 'Angular-tps';
  title = 'MyClass Will be Angular Heroes';
}
