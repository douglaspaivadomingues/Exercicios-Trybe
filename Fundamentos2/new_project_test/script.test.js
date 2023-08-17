const removeItem = require('./script');
const myFizzBuzz = require('./script');

//Verifique se a chamada removeItem([1, 2, 3, 4], 3) retorna o array esperado.
describe('Verifica se a função removeItem() está funcionando como esperado', () => {
  it('Verifique se a chamada removeItem([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(removeItem([1, 2, 3, 4],3)).toEqual([1, 2, 4]);
  });
//Verifique se a chamada removeItem([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4].
  it('Verifique se a chamada removeItem([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]' , () => {
    expect(removeItem([1, 2, 3, 4],3)).not.toEqual([1, 2, 3, 4]);
  });
//Verifique se a chamada removeItem([1, 2, 3, 4], 5) retorna o array esperado.
  it('Verifique se a chamada removeItem([1, 2, 3, 4], 5) retorna o array esperado.', () => {
    expect(removeItem([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })

});

//Caso num seja um número divisível apenas por 3, a função retorna "fizz".
//Caso num seja um número divisível apenas por 5, a função retorna "buzz".
//Caso num seja um número que não é divisível nem por 3 nem por 5, a função retorna o próprio número num.
//Caso num não seja um número, a função retorna false.

//Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz".
describe('verifica se a função myFizzBuzz() está funcionando corretamente', () => {
  it('Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  })
});