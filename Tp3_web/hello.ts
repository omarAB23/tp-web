console.log("hello");

//ex2

let userName:string="omar";

let age:number=22;

let isAdmin:boolean=true;

let scores:number[]= [100,200,300];

let student:[string,number]=["omar",20];


enum Role {User,Admin,SuperAdmin};


let myrole:Role=Role.Admin;

console.log(myrole);



//ex3

let id:number|string;
id=5;
id="5";

type A={name:string};
type B={age:number};

type C=A&B;

let user:C={name:"omar",age:22};

type status="pending"|"done"|"cancelled";

let currentStatus:status="done";

let unknownValue: unknown = "Hello world";
let strLength: number = (unknownValue as string).length;
console.log(strLength);


//ex4

interface User{
  id:number;
  name:string;
  email?:string;
  readonly isAdmin:boolean;

}

const user1:User={
  id:1,
  name:"omar",
  isAdmin:true

};

interface Admin extends User{
  permissions:string[];
}

function add(x:number,y:number):number{
  return x+y;
}

function greet(name:string,age?:number):void{
  if(age!==undefined){
    console.log(`Hello ${name}, you are ${age} years old.`);
  }else{
    console.log(`Hello ${name}`);
  }
}


function power(base:number,exponent:number=2):number{
  return base**exponent;
} 

function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
  return a + b;
}