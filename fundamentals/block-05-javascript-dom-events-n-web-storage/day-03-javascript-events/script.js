function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

/* Exercício 1:
O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.

Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
 */

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth(){
  let daysList = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let dayItem = document.createElement('li');
    if (day === 24 || day === 31) {
      dayItem.className = "day holiday";
      dayItem.innerHTML = day;
      daysList.appendChild(dayItem);
    } else if (day === 4 || day === 11 || day === 18) {
      dayItem.className = "day friday";
      dayItem.innerHTML = day;
      daysList.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = "day holiday friday";
      dayItem.innerHTML = day;
      daysList.appendChild(dayItem);
    } else {
      dayItem.className = "day";
      dayItem.innerHTML = day;
      daysList.appendChild(dayItem);
    }
  }
}

createDaysOfTheMonth();

/* Exercício 2:
Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday".
Adicione este botão como filho/filha da tag <div> com classe "buttons-container". */


function createButton(button1) {
  let buttons = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  button.id = "btn-holiday";
  button.innerHTML = button1;
  buttons.appendChild(button);
}

createButton("Feriados");

/* Exercício 3:
Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)". */

function buttonHolidayColor() {
  let holiButton = document.querySelector('#btn-holiday');
  let fridays = document.querySelectorAll('.holiday');

  holiButton.addEventListener('click', function() {
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].style.backgroundColor === 'white') {
        fridays[index].style.backgroundColor = 'rgb(238,238,238)';
      } else {
        fridays[index].style.backgroundColor = 'white';
      }
    }
  })
};

buttonHolidayColor();

/* Exercício 4:
Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
Adicione a este botão o ID "btn-friday".
Adicione este botão como filho/filha da tag <div> com classe "buttons-container". */

function sextouButton(button2) {
  let buttons = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  button.id = "btn-friday";
  button.innerHTML = button2;
  buttons.appendChild(button);
}

sextouButton("Sexta-feira");

/* Exercício 5:
Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias. */

  let fridayDays = [4, 11, 18, 25];

  let fridayButton = document.querySelector('#btn-friday');  

  fridayButton.addEventListener('click', function() {
    let fridays = document.getElementsByClassName('friday');
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML !== "SEXTOU") {
        fridays[index].innerHTML = "SEXTOU";
      } else {
        fridays[index].innerHTML = fridayDays[index];
      }
    }
  })

/* Exercício 6:
Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
Dica - Propriedade: event.target. */

function mouseOver() {
  let daysList = document.querySelector('#days')

  daysList.addEventListener("mouseover", function(event){
    
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';

  });
}


function mouseOut() {
  let daysList = document.querySelector('#days')

  daysList.addEventListener("mouseout", function(event){
    
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';

  });
}

mouseOver();
mouseOut();

/* Exercício 7:
Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks". */

function newTask(task) {
  let myTasks = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerHTML = task;
  myTasks.appendChild(taskName);
}

newTask("Walk the dog!");

/* Exercício 8:
Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task.
O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks". */

function newTaskDiv(color) {
  let myTasks = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');

  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  myTasks.appendChild(newTask);
}

newTaskDiv("red");

/* Exercício 9:
Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected, ela estará selecionada.
Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, esta tarefa está deixando de ser uma tarefa selecionada. */

function selectTask() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};

selectTask();