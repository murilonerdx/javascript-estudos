export class Animal {
    constructor(public cor: string){}
}

function decorator(target: any): any{
    return target;
}

function decorator2<T extends new (...args: any) => any>(target: T){
    return class extends target{
        cor: string;

        constructor(...args: any[]){
            super(...args)
            this.cor = 'Qualquer coisa';
        }
    }
}

function inverteNomeECor<T extends new (...args: any) => any>(target: T){
    return class extends target{
        cor: string;
        nome: string;

        constructor(...args: any[]){
            super(...args);
            this.nome = this.invert(args[0])
            this.cor = this.invert(args[1])
        }

        invert(valor: string){
            return valor.split('').reverse().join('');
        }
    }
}

@inverteNomeECor
// @ts-ignore
export class AnimalTwo{
    constructor(public nome: string, public cor: string){
        const text: string = `Eu sou um $this.nome $this.cor`
        console.log(text)
    }
}

const AnimalDecorated = decorator(Animal);
const animal = new AnimalDecorated('roxo')
console.log(animal)


