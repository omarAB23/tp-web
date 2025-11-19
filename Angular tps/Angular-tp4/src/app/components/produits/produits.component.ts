import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produits',
  imports: [CommonModule,FormsModule],
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent {
  products = [
    { nom: 'Produit A', stock: 70 },
    { nom: 'Produit B', stock: 35 },
    { nom: 'Produit C', stock: 10 }
  ];

  augmenterStock(p: any) {
    p.stock += 5;
  }


      diminuerStock(p: any) {
        if (p.stock > 0) p.stock -= 5;
      }
}
