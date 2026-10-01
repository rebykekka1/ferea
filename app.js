const btn=document.querySelector('.mobile-menu-btn'),drawer=document.querySelector('.drawer'),shade=document.querySelector('.shade');
function closeM(){drawer?.classList.remove('open');shade?.classList.remove('open')}
btn?.addEventListener('click',()=>{drawer?.classList.add('open');shade?.classList.add('open')});shade?.addEventListener('click',closeM);document.querySelectorAll('.drawer a').forEach(a=>a.addEventListener('click',closeM));
