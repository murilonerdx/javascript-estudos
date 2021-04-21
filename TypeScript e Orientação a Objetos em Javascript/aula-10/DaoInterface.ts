export interface DaoInterface<T> {
  nomeTabela: string;
  inserir(object: T): boolean;
  atualizar(object: any): boolean;
  remover(id: number): any;
  selecionar(id: number): any;
  selecionarTodos(): [any];
}