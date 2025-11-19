//ex1

var x = 1;
let y = 2;
const z = 3;

{
  var x = 20;
  let y = 4;
  const z = 7;
}

console.log(x);
console.log(y);
console.log(z);
//ex2

const somme2=(a,b)=>a+b; //implicite


const somme3=(a,b)=>{return a+b}; //explicite

console.log(somme2(2,3));
console.log(somme3(2,3));

//ex3


const  user = { name: "John", age: 30 };

var name=user.name;
var age=user.age;   



//2eme methode


const {n,a}=user;

console.log(n);
console.log(a);

//ex4
const tab1=[1,2,3];
const tab2=[4,5,6];
const fusion=[...tab1,...tab2];
//etaler
console.log(fusion);



// Copie d’un objet
const obj1 = { x: 1, y: 2 };
const obj2 = { ...obj1, y: 10 }; // copie puis modif
console.log(obj2); // {x: 1, y: 10}

//ex5
const livre = {
    titre: "L’Étranger",
    auteur: "Albert Camus",
    annee: 1942,
    getInfo() {
        return `${this.titre} écrit par ${this.auteur} en ${this.annee}`;
    }
};

console.log(livre.getInfo());


//ex6
class Etudiant {
    constructor(nom, note) {
        this.nom = nom;
        this.note = note;
    }

    getMention() {
        if (this.note >= 16) return "Très bien";
        else if (this.note >= 14) return "Bien";
        else if (this.note >= 10) return "Passable";
        else return "Échec";
    }
}

const e1 = new Etudiant("Ali", 18);
const e2 = new Etudiant("Noor", 12);
const e3 = new Etudiant("Sami", 8);

console.log(e1.nom, ":", e1.getMention()); // Ali : Très bien
console.log(e2.nom, ":", e2.getMention()); // Noor : Passable
console.log(e3.nom, ":", e3.getMention()); // Sami : Échec


//ex7

const notes = [12, 5, 17, 9, 20];

// 1. Moyenne
const moyenne = notes.reduce((acc, val) => acc + val, 0) / notes.length;
console.log("Moyenne :", moyenne);

// 2. Tri décroissant
const trie = [...notes].sort((a, b) => b - a);
console.log("Tri décroissant :", trie);

// 3. Filtrer ≥ 10
const admissibles = notes.filter(n => n >= 10);
console.log("Notes ≥ 10 :", admissibles);


//ex8
const wait = ms => new Promise(res => setTimeout(res, ms));

async function telechargement() {
    console.log("Début");
    await wait(2000); // pause de 2 secondes
    console.log("Fin");
}

telechargement();

//ex9
async function getPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();

        // Afficher les 5 premiers titres
        data.slice(0, 5).forEach(post => {
            console.log(post.title);
        });
    } catch (error) {
        console.error("Erreur :", error);
    }
}

getPosts();