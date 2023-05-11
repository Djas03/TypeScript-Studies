class Person1 {
  name: string;
  old: number;

  constructor(name: string, old: number) {
    this.name = name;
    this.old = old;
  }

  getName(): string {
    return this.name;
  }

  getOld(): number {
    return this.old;
  }

  setName(name: string): void {
    this.name = name;
  }
  setOld(old: number): void {
    this.old = old;
  }
}

let person1: Person1 = new Person1("Djas", 20);
let person2 = new Person1("Jonas", 22);

person2.setName("Silva");

console.log(person1.getName());
console.log(person2.getName());
