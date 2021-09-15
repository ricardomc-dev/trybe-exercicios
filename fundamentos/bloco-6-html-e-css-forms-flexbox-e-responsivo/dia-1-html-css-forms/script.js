let states = [
  { 'AC': 'Acre' },
  { 'AL': 'Alagoas' },
  { 'AP': 'Amapá' },
  { 'AM': 'Amazonas' },
  { 'BA': 'Bahia' },
  { 'CE': 'Ceará' },
  { 'DF': 'Distrito Federal' },
  { 'ES': 'Espírito Santo' },
  { 'GO': 'Goías' },
  { 'MA': 'Maranhão' },
  { 'MT': 'Mato Grosso' },
  { 'MS': 'Mato Grosso do Sul' },
  { 'MG': 'Minas Gerais' },
  { 'PA': 'Pará' },
  { 'PB': 'Paraíba' },
  { 'PR': 'Paraná' },
  { 'PE': 'Pernambuco' },
  { 'PI': 'Piauí' },
  { 'RJ': 'Rio de Janeiro' },
  { 'RN': 'Rio Grande do Norte' },
  { 'RS': 'Rio Grande do Sul' },
  { 'RO': 'Rondônia' },
  { 'RR': 'Roraíma' },
  { 'SC': 'Santa Catarina' },
  { 'SP': 'São Paulo' },
  { 'SE': 'Sergipe' },
  { 'TO': 'Tocantins' },
];
//console.log(states[3])
// let states =
//   {'AC': 'Acre', 
//    'AL': 'Alagoas',
//    'AP': 'Amapá',
//    'AM': 'Amazonas',
//    'BA': 'Bahia',
//    'CE': 'Ceará',
//    'DF': 'Distrito Federal',
//    'ES': 'Espírito Santo',
//    'GO': 'Goías',
//    'MA': 'Maranhão',
//    'MT': 'Mato Grosso',
//    'MS': 'Mato Grosso do Sul',
//    'MG': 'Minas Gerais',
//    'PA': 'Pará',
//    'PB': 'Paraíba',
//    'PR': 'Paraná',
//    'PE': 'Pernambuco',
//    'PI': 'Piauí',
//    'RJ': 'Rio de Janeiro',
//    'RN': 'Rio Grande do Norte',
//    'RS': 'Rio Grande do Sul',
//    'RO': 'Rondônia',
//    'RR': 'Roraíma',
//    'SC': 'Santa Catarina',
//    'SP': 'São Paulo' ,
//    'SE': 'Sergipe' ,
//    'TO': 'Tocantins' ,
//   };
console.log(states[1])

//function createStateSelect() {
  const getSelect = document.querySelector('select');
  const state = document.createElement('option');
  for (let i = 0; i < states.length; i += 1) {
    state.innerText = states[i];
    getSelect.appendChild(state)
  }
  console.log(state)
// }
// createStateSelect();