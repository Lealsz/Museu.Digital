
const obras = [
    {
      titulo: "A Noite Estrelada",
      artista: "Vincent van Gogh",
      ano: "1889",
      estilo: "Pós-impressionismo",
      descricao: "Uma das obras mais icônicas de Van Gogh.",
      imagem: "/assets/img/noitess.jpg"
    },
    {
      titulo: "O Grito",
      artista: "Edvard Munch",
      ano: "1893",
      estilo: "Expressionismo",
      descricao: "Expressa angústia existencial em uma forma intensa.",
      imagem: "/assets/img/o grito.jpg"
    }
  ];
  
  const galeria = document.getElementById("galeria");
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalArtist = document.getElementById("modal-artist");
  const modalYear = document.getElementById("modal-year");
  const modalStyle = document.getElementById("modal-style");
  const modalDesc = document.getElementById("modal-desc");
  const closeModal = document.getElementById("closeModal");
  
  function renderGaleria(filtro = "") {
    galeria.innerHTML = "";
    obras.filter(o => o.titulo.toLowerCase().includes(filtro.toLowerCase()))
      .forEach(obra => {
        const img = document.createElement("img");
        img.src = obra.imagem;
        img.alt = obra.titulo;
        img.addEventListener("click", () => abrirModal(obra));
        galeria.appendChild(img);
      });
  }
  
  function abrirModal(obra) {
    modalImg.src = obra.imagem;
    modalTitle.textContent = obra.titulo;
    modalArtist.textContent = "Artista: " + obra.artista;
    modalYear.textContent = "Ano: " + obra.ano;
    modalStyle.textContent = "Estilo: " + obra.estilo;
    modalDesc.textContent = obra.descricao;
    modal.classList.remove("hidden");
  }
  
  closeModal.addEventListener("click", () => modal.classList.add("hidden"));
  document.getElementById("search").addEventListener("input", (e) => renderGaleria(e.target.value));
  document.getElementById("toggleTheme").addEventListener("click", () => document.body.classList.toggle("light"));
  
  renderGaleria();
