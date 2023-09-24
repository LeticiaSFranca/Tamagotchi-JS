const tamagotchi = {
    nome: 'Tamagotchi',
    fome: 0,
    felicidade: 100,
    estado: 'Feliz',
    emoji: '😀',
  };
  
  function mostrarStatus() {
    document.getElementById('name').textContent = tamagotchi.nome;
    document.getElementById('fome').textContent = tamagotchi.fome;
    document.getElementById('felicidade').textContent = tamagotchi.felicidade;
    document.getElementById('estado').textContent = tamagotchi.estado;
    document.getElementById('emoji').textContent = tamagotchi.emoji;
  }
  
  function alimentar() {
    tamagotchi.fome -= 20;
    if (tamagotchi.fome < 0) tamagotchi.fome = 0;
  
    tamagotchi.felicidade += 10;
    if (tamagotchi.felicidade > 100) tamagotchi.felicidade = 100;
  
    verificarEstado();
    mostrarStatus();
  }
  
  function darCarinho() {
    tamagotchi.felicidade += 20;
    if (tamagotchi.felicidade > 100) tamagotchi.felicidade = 100;
  
    tamagotchi.fome += 10;
    if (tamagotchi.fome > 100) tamagotchi.fome = 100;
  
    verificarEstado();
    mostrarStatus();
  }
  
  function trocarRoupa() {
    // Aqui você pode implementar a lógica para trocar o emoji do Tamagotchi
    // Por exemplo: tamagotchi.emoji = '🐶';
  
    mostrarStatus();
  }
  
  function dormir() {
    tamagotchi.fome += 10;
    if (tamagotchi.fome > 100) tamagotchi.fome = 100;
  
    verificarEstado();
    mostrarStatus();
  }
  
  function verificarEstado() {
    if (tamagotchi.fome >= 100 || tamagotchi.felicidade <= 0) {
      tamagotchi.estado = 'Morto';
      tamagotchi.emoji = '💀';
    } else if (tamagotchi.fome >= 70 || tamagotchi.felicidade <= 30) {
      tamagotchi.estado = 'Triste';
      tamagotchi.emoji = '😢';
    } else {
      tamagotchi.estado = 'Feliz';
      tamagotchi.emoji = '😀';
    }
  }
  
  mostrarStatus();
  