let item1 = document.querySelector('#elementoOndeVoceEsta');

let item2 = document.querySelector('#elementoOndeVoceEsta').parentElement;
item2.style.color = 'red';

let item3 = document.querySelector('#elementoOndeVoceEsta').firstChild;
item3.innerText = 'Adcionando texto no primeiroFilhoDoFilho';

let item4 = document.querySelector('#pai').firstChild;

let item5 = document.querySelector('#elementoOndeVoceEsta').previousElementSibling;

let item6 = document.querySelector('#elementoOndeVoceEsta').nextSibling;
item6.innerText = 'Mudou o texto Atenção';

let item7 = document.querySelector('#elementoOndeVoceEsta').nextElementSibling;

let item8 = document.querySelector('#pai').lastChild.previousElementSibling;

let item9 = document.createElement('div');
let texto9 = item9.innerHTML = 'Criado um irmão para elementoOndeVoceEsta ';
