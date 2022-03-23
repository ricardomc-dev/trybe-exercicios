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

//Crie um irmão para elementoOndeVoceEsta
let irmao = 'Irmao criado para elementoOndeVoceEsta';
let elemCriado = document.createElement('section');
elemCriado.innerText = irmao;
let elemRec = document.querySelector('#pai');
elemRec.appendChild(elemCriado);
elemCriado.id = 'quintoFilho';

//Crie um filho para elementoOndeVoceEsta 
let filho = 'Filho criado para elementoOndeVoceEsta';
let elemCriado2 = document.createElement('p');
elemCriado2.innerText = filho;
let elemRec2 = document.querySelector('#elementoOndeVoceEsta');
elemRec2.appendChild(elemCriado2);
elemCriado2.id = 'terceiroFilhoDoFilho'

//Crie um filho para primeiroFilhoDoFilho .
let neto = 'filho do filho criado';
let elemCriado3 = document.createElement('h4');
elemCriado3.innerText = neto;
let elemRec3 = document.querySelector('#primeiroFilhoDoFilho');
elemRec3.appendChild(elemCriado3);
elemCriado3.id = 'filhoDoPrimeiroFilhoDoFilho'

//A partir desse filho criado, acesse terceiroFilho 
let item9 = document.querySelector('#filhoDoPrimeiroFilhoDoFilho').parentElement.parentElement.nextElementSibling
console.log(item9)

// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho 
let elemPai = document.querySelector('#pai');
let elemRemove1 = elemPai.lastElementChild;
elemPai.removeChild(elemRemove1)


console.log(elemRemove1);