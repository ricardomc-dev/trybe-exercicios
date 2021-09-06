let cabecalho = document.querySelector('#header-container');
cabecalho.style.backgroundColor = 'green';

let box1 = document.querySelector('.emergency-tasks');
box1.style.backgroundColor = 'orange';

let faixa1 = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i < faixa1.length; i += 1) {
    faixa1[i].style.backgroundColor = 'red'
}

let box2 = document.getElementsByClassName('no-emergency-tasks')
box2[0].style.backgroundColor = 'yellow';

let faixa2 = document.querySelectorAll('.no-emergency-tasks h3');
for (let i = 0; i < faixa1.length; i += 1) {
    faixa2[i].style.backgroundColor = 'black'
}