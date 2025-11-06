
// AI Olive – Shared interactions
document.addEventListener('click', (e)=>{
  const t = e.target;
  if(t.matches('[data-open]')){
    const id = t.getAttribute('data-open');
    document.getElementById(id)?.classList.add('open');
    document.querySelector('.modal-backdrop')?.classList.add('open');
  }
  if(t.matches('[data-close]') || t.classList.contains('modal-backdrop')){
    document.querySelectorAll('.modal').forEach(m=>m.classList.remove('open'));
    document.querySelector('.modal-backdrop')?.classList.remove('open');
  }
});
// Very small router for active nav
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(a=>{
    if(a.getAttribute('href').endsWith(path)){ a.classList.add('badge'); }
  });
})();
