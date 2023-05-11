interface Person3 {
    name: string,
    old?: number,
    height?: number
}

function person3(par: Person3){
    return par.name;
}

console.log(person3({name: "Djas", old: 20, height: 1.87}));