const removeItem = require('./script');

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

