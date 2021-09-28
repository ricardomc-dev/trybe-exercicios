const sum = require('./sum');

describe("a função verifica a soma dos parâmetros()", () => {

  it('A função recebe (4, 5) e retorna 9', () => {
    expect(sum(4, 5)).tobe(9)
  }) 
})
