import Concessionaria from './Concessionaria';
import { Dao } from './Dao';
import { Pessoa } from './Pessoa';

let concessionaria = new Concessionaria('', []);
let pessoa: Pessoa = new Pessoa('', '');


let dao3: Dao<Concessionaria> = new Dao();

dao3.inserir(concessionaria);