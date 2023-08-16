const removeItem = require('./script');

//Verifique se a chamada removeItem([1, 2, 3, 4], 3) retorna o array esperado.

it('removeItem', () => {
  expect(removeItem(3)).toBe([1 ,2, 4])
});

//Verifique se a chamada removeItem([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4].
//Verifique se a chamada removeItem([1, 2, 3, 4], 5) retorna o array esperado.
