import { DaoInterface } from "./DaoInterface";

export class Dao<T> implements DaoInterface<T>{
  nomeTabela = '';

  inserir(object: T): boolean {
    console.log("logica de insert");
    return true;
  }
  atualizar(object: any): boolean {
    console.log("logica de update")
    return Object();
  }
  remover(id: number) {
    console.log("logica de remove");
    return Object();
  }
  selecionar(id: number) {
    console.log("logica de select");
    return Object();
  }
  selecionarTodos(): [any] {
    console.log("logica getAll");
    return [Object()];
  }
  
}