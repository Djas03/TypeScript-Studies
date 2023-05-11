function Person5(){
    return {name: 'Djas',old: 20}
}

type P = ReturnType<typeof Person5>;

interface Test{
    name: P;
}

class Tests implements Test{
    name = {name: 'Jonas',old: 25}
}