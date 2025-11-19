
export {};

// --- Déclaration de variables primitives ---
let message: string = "Bonjour TypeScript";
let agee: number = 22;
let isActive: boolean = true;
let montant: number | null = null; // valeur nullable
let fruits: string[] = ["pomme", "banana", "orange"];

console.log(message, agee, isActive, montant, fruits);

// --- Fonction typée pour calculer la somme ---
function addition(a: number, b: number): number {
  return a + b;
}
console.log("Somme = ", addition(5, 7));

// --- Interface Étudiant ---
interface Etudiant {
  id: number;
  nom: string;
  prenom: string;
  age: number;
}

// --- Classe implémentant l'interface ---
class EtudiantImpl implements Etudiant {
  constructor(
    public id: number,
    public nom: string,
    public prenom: string,
    public age: number
  ) {}

  afficherInfos(): void {
    console.log(
      `Étudiant #${this.id} : ${this.prenom} ${this.nom}, ${this.age} ans`
    );
  }
}

const e1 = new EtudiantImpl(1, "Abidi", "Omar", 23);
e1.afficherInfos();



// --- Fonction générique qui retourne un tableau du même type ---
function generiqueArray<T>(val1: T, val2: T): T[] {
  return [val1, val2];
}

console.log(generiqueArray<number>(10, 20));
console.log(generiqueArray<string>("hello", "world"));

// --- Union types + paramètre optionnel ---
function afficherValeur(valeur: string | number, prefix?: string): void {
  if (prefix) {
    console.log(prefix + " " + valeur);
  } else {
    console.log("Valeur :", valeur);
  }
}

afficherValeur(10);
afficherValeur("Bonjour", "Message");

// --- Enumération ---
enum Niveau {
  DEBUTANT,
  INTERMEDIAIRE,
  AVANCE
}

let niveauOmar: Niveau = Niveau.INTERMEDIAIRE;
console.log("Niveau d'Omar :", Niveau[niveauOmar]);
