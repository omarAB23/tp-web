import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-articles',
  imports: [FormsModule,CommonModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {
// Liste des articles
articles = [
  { titre: 'Breaking Bad', contenu: 'serie a 20 euro.', importance: 'élevée' },
  { titre: 'Prison Break', contenu: 'Prison Break a 30 euro', importance: 'moyenne' },
  { titre: 'Better call saul', contenu: 'Better call saul a 40euro', importance: 'faible' }
];

 // Champs pour le formulaire
 newTitre: string = '';
 newContenu: string = '';
 newImportance: string = 'faible';

 // Fonction pour ajouter un article
 ajouterArticle() {
   if (this.newTitre.trim() === '' || this.newContenu.trim() === '') {
     alert('Veuillez remplir tous les champs !');
     return;
   }

   this.articles.push({
     titre: this.newTitre,
     contenu: this.newContenu,
     importance: this.newImportance
   });

   // Reset
   this.newTitre = '';
   this.newContenu = '';
   this.newImportance = 'faible';
 }
}

