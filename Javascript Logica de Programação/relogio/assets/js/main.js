function relogio() {
  function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);//0 * 1000 = 0 segundos, 1 * 1000 = 1 segundo ...
    return data.toLocaleTimeString('pt-BR', { //pt-br é o tipo da timestamp hour12 false = tira o pm e am, timezone tira o horario do navegador padrão
      hour12: false,
      timeZone: 'UTC'
    });
  }

  const relogio = document.querySelector('.relogio'); //pegando a div relogio
  let segundos = 0; //setando o valor inicial de 0 segundos
  let timer; //timer setando caso pause o timer

  function iniciaRelogio() {
    timer = setInterval(function() { //função que executa a cada 1 segundo adicionando na div relogio os segundos e a cada segundo adiciona um segundo
      segundos++;
      relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
  }

  document.addEventListener('click', function(e) {
    const el = e.target; //Mostra que elemento está sendo clickado

    if (el.classList.contains('zerar')) {
      clearInterval(timer); //serve exatamente para pausar o timer
      relogio.innerHTML = '00:00:00'; //Adiciona no html o 00:00:00
      relogio.classList.remove('pausado'); //remove o atributo pausado que no caso é vermelho caso ele esteja pausado
      segundos = 0; //Volta os segundos para 0;
    }

    if (el.classList.contains('iniciar')) { // ClassList vai pegar a classe e .contains verificar se a classe é .iniciar
      relogio.classList.remove('pausado');
      clearInterval(timer); //serve exatamente para pausar o timer
      iniciaRelogio(); //iniciando relogio
    }

    if (el.classList.contains('pausar')) {
      clearInterval(timer);
      relogio.classList.add('pausado'); //Adiciona no relogio a classe com o css de pausado que é vermelho
    }
  });
}
relogio();
