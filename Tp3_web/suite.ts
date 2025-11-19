class person{
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}


class StudentPerson extends person{
  school:string;

  constructor(name:string,age:number,school:string){
    super(name,age);
    this.school=school;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old and I study at ${this.school}.`);
  }
}


//3

abstract class Shape{
  abstract area():number;
}

class Circle extends Shape{
  constructor(private radius:number){
    super();
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super();
  }
  area(): number {
    return this.width * this.height;
  }
}


interface Drivable {
  drive(): void;
}

class Car implements Drivable {
  constructor(public brand: string) {}
  drive(): void {
    console.log(`${this.brand} is driving...`);
  }
}

// Tests
let p = new person("Omar", 23);
p.greet();

let s = new StudentPerson("Sara", 21, "FST");
s.greet();

let c = new Circle(5);
console.log("Circle area:", c.area());

let r = new Rectangle(4, 6);
console.log("Rectangle area:", r.area());

let car = new Car("Toyota");
car.drive();


//ex7

function identity<T>(arg:T):T{
  return arg;
}

function getFirst<T>(arr:T[]):T | undefined{
  return arr[0];
}

class Repository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  remove(item: T): void {
    this.items = this.items.filter(i => i !== item);
  }

  getAll(): T[] {
    return this.items;
  }
}

// 4. Interface ApiResponse
interface ApiResponse<T> {
  data: T;
  error?: string;
}

// Tests
console.log(identity<string>("Hello"));
console.log(identity<number>(42));

console.log(getFirst([1, 2, 3]));
console.log(getFirst(["a", "b", "c"]));

let repo = new Repository<number>();
repo.add(10);
repo.add(20);
console.log(repo.getAll());
repo.remove(10);
console.log(repo.getAll());

let response: ApiResponse<string> = { data: "Success" };
console.log(response);
