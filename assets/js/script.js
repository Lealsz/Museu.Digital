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