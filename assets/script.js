document.addEventListener('DOMContentLoaded', ()=>{
  const menuToggle = document.getElementById('menuToggle');
  const navList = document.getElementById('navList');
  if(menuToggle){
    menuToggle.addEventListener('click', ()=>{
      if(navList.style.display === 'flex') navList.style.display = 'none';
      else navList.style.display = 'flex';
    });
  }
  // smooth scroll for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const target = document.querySelector(a.getAttribute('href'));
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth',block:'start'}); if(navList) navList.style.display='none'; }
    });
  });
});
