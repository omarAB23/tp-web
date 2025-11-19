import { CurrencyPipe } from '@angular/common';
import { Component ,EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-produit',
  imports: [CurrencyPipe],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent {
  imageUrl: string = "https://th.bing.com/th/id/R.c6a3f05cd851610fec1987785b241632?rik=JWjiCsxBR1bBpw&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f4%2f9%2ff%2f702687-most-popular-cristiano-ronaldo-hd-wallpaper-2042x3000-for-phones.jpg&ehk=S7qUBk%2bCoOcw9jidI9LL9vicAW2KSiAwjMMAA2aiU8o%3d&risl=&pid=ImgRaw&r=0";
  enStock: boolean = true;
  prix: number = 1299.99;




  @Input() nomProduit: string = "Produit par défaut";
  @Output() ajouterAuPanier = new EventEmitter<string>();

  afficherAlerte() {
    alert("Produit ajouté au panier");
  }

  ajouter(){
    this.ajouterAuPanier.emit(this.nomProduit);  
  }


  toggleStock() {
    this.enStock = !this.enStock;
  }
}