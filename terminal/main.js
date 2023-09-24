const readline = require('readline');

const tamagotchi = {
  nome: 'Tamagotchi',
  fome: 0,
  felicidade: 100,
  estado: 'feliz', // Pode ser 'feliz', 'triste' ou 'morto'
  emoji: '😀',
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function mostrarStatus() {
  console.clear();
  console.log(`Nome: ${tamagotchi.nome}`);
  console.log(`Emoji: ${tamagotchi.emoji}`);
  console.log(`Fome: ${tamagotchi.fome}`);
  console.log(`Felicidade: ${tamagotchi.felicidade}`);
  console.log(`Estado: ${tamagotchi.estado}`);
  console.log('--- Opções ---');
  console.log('1. Alimentar');
  console.log('2. Dar carinho');
  console.log('3. Trocar de roupa');
  console.log('4. Colocar para dormir');
  console.log('5. Sair');
  console.log('--------------');
}

function alimentar() {
  if (tamagotchi.estado === 'morto') {
    console.log('Seu Tamagotchi está morto! Crie um novo.');
    rl.close();
    return;
  }

  tamagotchi.fome -= 20;
  if (tamagotchi.fome < 0) tamagotchi.fome = 0;

  tamagotchi.felicidade += 10;
  if (tamagotchi.felicidade > 100) tamagotchi.felicidade = 100;

  verificarEstado();
  mostrarStatus();
}

function darCarinho() {
  if (tamagotchi.estado === 'morto') {
    console.log('Seu Tamagotchi está morto! Crie um novo.');
    rl.close();
    return;
  }

  tamagotchi.felicidade += 20;
  if (tamagotchi.felicidade > 100) tamagotchi.felicidade = 100;

  tamagotchi.fome += 10;
  if (tamagotchi.fome > 100) tamagotchi.fome = 100;

  verificarEstado();
  mostrarStatus();
}

function trocarRoupa() {
  if (tamagotchi.estado === 'morto') {
    console.log('Seu Tamagotchi está morto! Crie um novo.');
    rl.close();
    return;
  }

  // Aqui você pode implementar a lógica para trocar o emoji do Tamagotchi
  // Por exemplo: tamagotchi.emoji = '🐶';

  mostrarStatus();
}

function dormir() {
  if (tamagotchi.estado === 'morto') {
    console.log('Seu Tamagotchi está morto! Crie um novo.');
    rl.close();
    return;
  }

  tamagotchi.fome += 10;
  if (tamagotchi.fome > 100) tamagotchi.fome = 100;

  verificarEstado();
  mostrarStatus();
}

function verificarEstado() {
  if (tamagotchi.fome >= 100 || tamagotchi.felicidade <= 0) {
    tamagotchi.estado = 'morto';
    tamagotchi.emoji = '💀';
  } else if (tamagotchi.fome >= 70 || tamagotchi.felicidade <= 30) {
    tamagotchi.estado = 'triste';
    tamagotchi.emoji = '😢';
  } else {
    tamagotchi.estado = 'feliz';
    tamagotchi.emoji = '😀';
  }
}

mostrarStatus();

rl.on('line', (input) => {
  switch (input) {
    case '1':
      alimentar();
      break;
    case '2':
      darCarinho();
      break;
    case '3':
      trocarRoupa();
      break;
    case '4':
      dormir();
      break;
    case '5':
      rl.close();
      break;
    default:
      console.log('Opção inválida! Tente novamente.');
  }
});

rl.on('close', () => {
  console.log('Obrigado por brincar com seu Tamagotchi!');
});
