 // Exemplo: adicionar eventos simples, sem dependências.
  // Pode remover ou estender conforme a necessidade do protótipo.
  (function(){
    // Simples acessibilidade: foco nos links quando usando keyboard
    document.querySelectorAll('a, button, input, textarea').forEach(el=>{
      el.addEventListener('focus', ()=> el.style.outline = '3px solid rgba(37,99,235,0.18)');
      el.addEventListener('blur', ()=> el.style.outline = '');
    });
  })();