// const { it, expect } = require('@jest/globals');
// const { describe } = require('yargs');
const { sum, myRemove, myFizzBuzz }  = require('./sum');

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
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
  
})


describe("teste a função myFizzbuzz", () => {

  it('A função recebe 15 e retorna fizzbuzz', () => {
    expect(myFizzBuzz(15)).toMatch('fizzbuzz')
  })
  it('A função recebe 3 e retorna fizz', () => {
    expect(myFizzBuzz(3)).toMatch('fizz')
  })
  it('A função recebe 5 e retorna buzz', () => {
    expect(myFizzBuzz(5)).toMatch('buzz')
  })
  it('A função recebe 2 e retorna 2', () => {
    expect(myFizzBuzz(2)).toEqual(2)
  })
  it('A função recebe a e retorna false', () => {
    expect(myFizzBuzz('a')).toBeFalsy()
  })

})
