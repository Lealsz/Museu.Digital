document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const obraId = urlParams.get("obra");

  // Dados das obras
  const obras = {
    1: {
      titulo: "Noite Estrelada",
      artista: "Vincent van Gogh",
      ano: "1889",
      estilo: "Pós-impressionismo",
      descricao: "Noite Estrelada é uma das obras mais emblemáticas de van Gogh, criada durante sua estadia no hospital Saint-Paul-de-Mausole. A pintura transmite uma sensação de movimento no céu estrelado e tranquilidade na vila abaixo.",
      curiosidade: "A obra foi pintada enquanto Van Gogh estava internado, e reflete seu estado emocional tumultuado, que contrastava com a serenidade da paisagem.",
      imagem: "/assets/img/noitess.jpg"
    },
    2: {
      titulo: "O Grito",
      artista: "Edvard Munch",
      ano: "1893",
      estilo: "Expressionismo",
      descricao: "O Grito é uma das imagens mais conhecidas da arte ocidental. A pintura transmite uma sensação de angústia existencial, representada pela figura distorcida no centro da obra.",
      curiosidade: "Munch pintou várias versões de O Grito ao longo de sua vida, sendo esta a mais famosa, expressando seu estado psicológico perturbado.",
      imagem: "/assets/img/o grito.jpg"
    },
    3: {
      titulo: "Mona Lisa",
      artista: "Leonardo da Vinci",
      ano: "1503",
      estilo: "Renascimento",
      descricao: "Mona Lisa é provavelmente o retrato mais famoso do mundo, caracterizado pelo sorriso enigmático e pela técnica de sfumato que confere uma suavidade sem igual ao rosto da mulher.",
      curiosidade: "A obra foi roubada do Louvre em 1911 e recuperada dois anos depois, gerando grande comoção na época.",
      imagem: "/assets/img/mona.jpg"
    }
  };

  // Exibir os detalhes da obra
  const obra = obras[obraId];

  if (obra) {
    document.getElementById("obra-titulo").textContent = obra.titulo;
    document.getElementById("obra-artista").textContent = obra.artista;
    document.getElementById("obra-ano").textContent = obra.ano;
    document.getElementById("obra-estilo").textContent = obra.estilo;
    document.getElementById("obra-descricao").textContent = obra.descricao;
    document.getElementById("obra-curiosidade").textContent = obra.curiosidade;
    document.getElementById("obra-imagem").src = obra.imagem;
  } else {
    // Caso a obra não seja encontrada
    document.querySelector("main").innerHTML = "<p>Obra não encontrada.</p>";
  }

  // Animação de Fade-In ao rolar
  const fadeInElements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  fadeInElements.forEach(element => {
    observer.observe(element);
  });
});
const curiosidades = [
  "Van Gogh vendeu apenas uma pintura em vida: 'O Vinhedo Vermelho'.",
  "A Mona Lisa não tem sobrancelhas — isso era moda na época renascentista.",
  "O 'Grito' de Edvard Munch tem quatro versões diferentes.",
  "Leonardo da Vinci levou cerca de 4 anos para terminar a Mona Lisa.",
  "Picasso produziu cerca de 50 mil obras durante sua vida.",
  "O quadro 'Noite Estrelada' foi pintado de dentro de um asilo.",
  "Michelangelo escreveu poemas além de pintar e esculpir.",
  "Salvador Dalí dizia que era reencarnação de seu irmão morto com o mesmo nome.",
  "A técnica do sfumato usada por Da Vinci é o segredo do sorriso da Mona Lisa.",
  "As cores vibrantes de Van Gogh surgem do uso expressivo do pós-impressionismo."
];

function mostrarCuriosidade() {
  const index = Math.floor(Math.random() * curiosidades.length);
  document.getElementById("curiosidade-texto").textContent = curiosidades[index];
}

document.addEventListener("DOMContentLoaded", mostrarCuriosidade);
document.getElementById("quiz-form").addEventListener("submit", function (e) {
  e.preventDefault();
  let score = 0;

  const respostas = {
    q1: "Vincent van Gogh",
    q2: "Barroco",
    q3: "Leonardo da Vinci"
  };

  for (const [key, correctAnswer] of Object.entries(respostas)) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    if (selected && selected.value === correctAnswer) {
      score++;
    }
  }

  const total = Object.keys(respostas).length;
  const resultDiv = document.getElementById("quiz-result");
  resultDiv.textContent = `Você acertou ${score} de ${total} perguntas.`;
});

// Glossário JS
const termos = [
  { termo: "Chiaroscuro", definicao: "Técnica que utiliza o contraste forte entre luz e sombra." },
  { termo: "Sfumato", definicao: "Técnica usada para suavizar transições de cor e luz." },
  { termo: "Cubismo", definicao: "Movimento artístico que fragmenta objetos em formas geométricas." },
  { termo: "Impressionismo", definicao: "Estilo que captura efeitos da luz e da cor em pinceladas rápidas." },
  { termo: "Barroco", definicao: "Estilo artístico marcado pela dramaticidade e contraste de luz." }
];

const listaGlossario = document.getElementById("glossario-lista");
const inputBusca = document.getElementById("glossario-busca");

function mostrarTermos(filtro = "") {
  listaGlossario.innerHTML = "";
  const termosFiltrados = termos.filter(t => t.termo.toLowerCase().includes(filtro.toLowerCase()));
  termosFiltrados.forEach(({ termo, definicao }) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${termo}</strong>: ${definicao}`;
    listaGlossario.appendChild(li);
  });
}

inputBusca.addEventListener("input", (e) => {
  mostrarTermos(e.target.value);
});

// Mostrar todos os termos inicialmente
mostrarTermos();

// Registro do Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('Service Worker registrado com sucesso:', reg))
      .catch(err => console.log('Falha ao registrar SW:', err));
  });
}

// Prompt para instalação PWA
let deferredPrompt;
const btnInstall = document.createElement('button');
btnInstall.textContent = '📱 Instalar App';
btnInstall.style.position = 'fixed';
btnInstall.style.bottom = '20px';
btnInstall.style.right = '20px';
btnInstall.style.padding = '12px 20px';
btnInstall.style.backgroundColor = '#003366';
btnInstall.style.color = '#fff';
btnInstall.style.border = 'none';
btnInstall.style.borderRadius = '8px';
btnInstall.style.cursor = 'pointer';
btnInstall.style.display = 'none';
document.body.appendChild(btnInstall);

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  btnInstall.style.display = 'block';
});

btnInstall.addEventListener('click', async () => {
  btnInstall.style.display = 'none';
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const choiceResult = await deferredPrompt.userChoice;
    if (choiceResult.outcome === 'accepted') {
      console.log('Usuário aceitou a instalação');
    } else {
      console.log('Usuário rejeitou a instalação');
    }
    deferredPrompt = null;
  }
});

// Função para vibração leve ao clicar em botões no celular
document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  });
});
const loginModal = document.getElementById('login-modal');
    const loginForm = document.getElementById('login-form');
    const loginError = document.getElementById('login-error');

    // Checar se usuário já entrou antes (localStorage)
    if(localStorage.getItem('usuarioNome') && localStorage.getItem('usuarioIdade')){
      loginModal.classList.add('hidden'); // Oculta login se já está salvo
    }

    loginForm.addEventListener('submit', function(e){
      e.preventDefault();

      const nome = document.getElementById('nome').value.trim();
      const idade = parseInt(document.getElementById('idade').value);

      if(nome === ''){
        loginError.textContent = 'Por favor, insira seu nome.';
        return;
      }
      if(isNaN(idade) || idade < 1){
        loginError.textContent = 'Por favor, insira uma idade válida.';
        return;
      }

      // Salvar no localStorage
      localStorage.setItem('usuarioNome', nome);
      localStorage.setItem('usuarioIdade', idade);

      // Ocultar modal e liberar conteúdo
      loginModal.classList.add('hidden');
    });