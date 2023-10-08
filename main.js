//AINDA TEM ALGUMAS FUNCIONALIDADES COMO O DESCLICK DE UMA TAREFA QUE NÃO ESTÁ FUNCIONANDO
//Possiveis atualizações serão feitas ao decorrer do tempo baseado nos avanços dos conhecimentos em JavaScript

//VARIVAIES DE VALORES DOS INPUTS
let task = document.getElementById('task');
let desc = document.getElementById('desc');
let data = document.getElementById('data');
//BOTÃO
let criar = document.getElementById('create');
//CONTADOR
let idX = 0;
let  lista = document.getElementById('lista');

function newTask(){
  // armazena de fato o valor que o usuario digitou
  let nome = task.value;
  let descricao = desc.value;
  let prazo = data.value;

  //Validação dos campos
  if((nome != null) && (descricao != null) && (prazo != null) || (nome != "") && (descricao != "") && (prazo != "") && (nome != undefined) && (descricao != undefined) && (prazo != undefined)){

    ++idX;

    //criando a adicção dos elementos a serem exibidos baseado com html
    let novaTask = `
      <div class="criado" id="${idX}">
        <div class="criado-icon" onclick="feito(${idX})">
          <i id="icon_${idX}"  class="fa-regular fa-square"></i>
        </div>
        <div class="criado-nome" onclick="feito(${idX})">
          <p>${nome}</p>
        </div>

        <div class="criado-desc">
          <p>${descricao}</p>
        </div>
        <div class="criado-data">
          <p>${prazo}</p>
        </div>
        <div class="criado-del" id="delete" onclick="finalizar(${idX})">
          <i class="fa-solid fa-trash"></i>
        </div>
      </div>`;

    //Adicionando os valores dos inputs no html
    lista.innerHTML += novaTask;

    //zerando valores dos inputs
    task.value = '';
    desc.value = '';
    data.value = '';

  };
};

function finalizar(id) {
  var fimTask = document.getElementById(id)
  fimTask.remove();
};

function feito(id){
  var criado = document.getElementById(id);
  var cond =  criado.getAttribute('class');

  if (cond == 'criado'){
    criado.classList.add('feito');

    var icon_create = document.querySelector(`#icon_${id}`);
    icon_create.classList.remove('fa-regular', 'fa-square');
    icon_create.classList.add('fa-solid', 'fa-square-check');

    criado.parentNode.appendChild(criado);
  }
  /*else {
    criado.classList.add('feito');

    var icon_create = document.querySelector(`#icon_${id}`);
    icon_create.classList.remove('fa-solid', 'fa-square-check');
    icon_create.classList.add('fa-regular', 'fa-square');
  }*/

}

//teclando enter para criar uma tarefa
data.addEventListener("keyup", function(event){
  if(event.keyCode == 13){
    criar.click();
  }
});