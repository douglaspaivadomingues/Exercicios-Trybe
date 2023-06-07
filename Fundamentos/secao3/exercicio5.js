function obterMovimentos(p) {
    const peca = p.toLowerCase();
  
    switch (peca) {
      case 'rei':
        return 'O rei pode mover-se para qualquer posição adjacente a ele.';
      case 'rainha':
        return 'A rainha pode mover-se em qualquer direção: vertical, horizontal e nas diagonais.';
      case 'torre':
        return 'As torres podem mover-se em linha reta, tanto verticalmente como horizontalmente.';
      case 'cavalo':
        return 'Os cavalos têm um movimento peculiar em forma de "L".';
      case 'bispo':
        return 'Os bispos podem mover-se nas diagonais.';
      case 'peão':
        return 'Os peões têm movimentos especiais, podendo mover-se para frente e capturar peças diagonalmente.';
      default:
        return 'Peça inválida. Por favor, informe uma peça válida de xadrez.';
    }
  }
  
  
  console.log(obterMovimentos('Rei')); 
  console.log(obterMovimentos('bispo')); 
  console.log(obterMovimentos('cavalo'));
  console.log(obterMovimentos('Rainha')); 
  console.log(obterMovimentos('Peão')); 
  console.log(obterMovimentos('torre')); 
  console.log(obterMovimentos('peça inválida')); 
  
