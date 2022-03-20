// type CoresObj = {
//    vermelho: string;
//    verde: string;
//    azul: string;
//};

type CoresObj = typeof coresObj;
type CoresChaves = keyof CoresObj;

const coresObj = {
    vermelho: 'red',
    verde: 'verde',
    azul: 'azul',
}

function traduzirCor(cor: 'verde'| 'vermelho' | 'azul', cores: CoresObj): string{
    return cores[cor]
}

console.log(traduzirCor('vermelho', coresObj));