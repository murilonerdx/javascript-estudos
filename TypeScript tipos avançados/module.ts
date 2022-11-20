/* eslint-disable @typescript-eslint/no-namespace */
namespace MeuNamespace {
    export const nomeDoNamespace = 'Murilo';

    export class PessoaDoNamespace {
        constructor(public nome: string) {}
    }

    const pessoaDoNamespace = new PessoaDoNamespace('Murilo');

    export namespace OutroNamespace {
        export const nomeDoNamespace = 'Nome no outro namespace';
    }
}

const constDoNamespace = 'Valor da const do namespace';
