import { removeItem, myFizzBuzz, encode, decode, techList } from './script';

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

//Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz".
describe('verifica se a função myFizzBuzz() funciona corretamente', () => {
  it('Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('Caso num seja um número divisível apenas por 3, a função retorna "buzz"', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  });
  it('Caso num seja um número divisível apenas por 5, a função retorna "buzz".', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });
  it('Caso num seja um número que não é divisível nem por 3 nem por 5, \
  a função retorna o próprio número num.', () => {
    expect(myFizzBuzz(1)).toBe(1);
  })
  it('Caso num não seja um número, a função retorna false.', () => {
    expect(myFizzBuzz('null')).toBe (false);
  })
});

describe('Exercício 3 - testando as funções encode e decode', () => {
  it('Teste se encode é uma função.', () => {
    expect(encode).toBeInstanceOf(Function);
  })
  it('teste se decode é uma função.', () => {
    expect(decode).toBeInstanceOf(Function);
  });
  it('Para a função encode, teste se as vogais a, e, i, o, u \
  são convertidas em 1, 2, 3, 4, 5, respectivamente.', () => {
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
  });
  it('Para a função decode, teste se os números 1, 2, 3, 4, 5 \
  são convertidas em a, e, i, o, u respectivamente.', () => {
    expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
  });

  it('teste se as demais letras e os demais números não são convertidos para cada caso.', () => {
    expect(decode('1, 2, 3')).toBe('a, e, i');
  })
});

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologia deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

