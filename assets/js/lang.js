const translations = {
    pt: {
      bem_vindo: "Bem-vindo ao Museu Digital",
      explore: "Explore as mais icônicas obras de arte de diversos períodos históricos e estilos.",
      explorar_btn: "Explorar Galeria"
    },
    en: {
      bem_vindo: "Welcome to the Digital Museum",
      explore: "Explore the most iconic artworks from various historical periods and styles.",
      explorar_btn: "Explore Gallery"
    },
    es: {
      bem_vindo: "Bienvenido al Museo Digital",
      explore: "Explora las obras de arte más icónicas de diferentes períodos históricos y estilos.",
      explorar_btn: "Explorar Galería"
    }
  };
  
  function setLanguage(lang) {
    localStorage.setItem("lang", lang);
    applyTranslations(lang);
  }
  
  function applyTranslations(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      el.textContent = translations[lang][key] || key;
    });
  }
  
  // Auto aplicar linguagem salva
  document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "pt";
    applyTranslations(savedLang);
  });
  