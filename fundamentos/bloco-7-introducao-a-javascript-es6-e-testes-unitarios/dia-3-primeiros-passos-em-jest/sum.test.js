// const { it, expect } = require('@jest/globals');
// const { describe } = require('yargs');
const { sum, myRemove }  = require('./sum');

describe("teste a função sum", () => {

  it('A função recebe (4, 5) e retorna 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('A função recebe (0, 0) e retorna 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('A função recebe (4, "5") e retorna um error', () => {
    expect(() => {sum(4, "5")}).toThrowError();
  });
});

describe("teste a função myRemove", () => {

  it('A função deve retornar um array removendo o item do parâmetro', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    
  })
})
