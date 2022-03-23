// let states = [
//   { 'AC': 'Acre' },
//   { 'AL': 'Alagoas' },
//   { 'AP': 'Amapá' },
//   { 'AM': 'Amazonas' },
//   { 'BA': 'Bahia' },
//   { 'CE': 'Ceará' },
//   { 'DF': 'Distrito Federal' },
//   { 'ES': 'Espírito Santo' },
//   { 'GO': 'Goías' },
//   { 'MA': 'Maranhão' },
//   { 'MT': 'Mato Grosso' },
//   { 'MS': 'Mato Grosso do Sul' },
//   { 'MG': 'Minas Gerais' },
//   { 'PA': 'Pará' },
//   { 'PB': 'Paraíba' },
//   { 'PR': 'Paraná' },
//   { 'PE': 'Pernambuco' },
//   { 'PI': 'Piauí' },
//   { 'RJ': 'Rio de Janeiro' },
//   { 'RN': 'Rio Grande do Norte' },
//   { 'RS': 'Rio Grande do Sul' },
//   { 'RO': 'Rondônia' },
//   { 'RR': 'Roraíma' },
//   { 'SC': 'Santa Catarina' },
//   { 'SP': 'São Paulo' },
//   { 'SE': 'Sergipe' },
//   { 'TO': 'Tocantins' },
// ];

function createStateSelect() {
  const getSelect = document.querySelector('select');
  let stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  
  for (let i = 0; i < stateOptions.length; i += 1) {
    const state = document.createElement('option');
    state.innerText = stateOptions[i];
    state.value = stateOptions[i];
    getSelect.appendChild(state)
  }

  window.onload = function () {
    createStateSelect();
    let submitButton = document.querySelector('.submit-button');
    submitButton.addEventListener('click', handleSubmit);
  
    let clearButton = document.querySelector('.clear-button');
    clearButton.addEventListener('click', clearFields)
  }

  function handleSubmit(event) {
    event.preventDefault();
  
    let validation = validateData();
  
    clearDivs();
    
    if(validation.errorQtd === 0){
      renderData();
    } else {
      validation.messages.unshift('Dados Inválidos')
  
      renderErrorMessages(validation.messages)
    }
  }