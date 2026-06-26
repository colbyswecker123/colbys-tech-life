const toggle=document.querySelector('[data-menu-toggle]');
const nav=document.querySelector('[data-site-nav]');
if(toggle&&nav){
  toggle.addEventListener('click',()=>{
    const open=toggle.getAttribute('aria-expanded')==='true';
    toggle.setAttribute('aria-expanded',String(!open));
    toggle.classList.toggle('open',!open);
    nav.classList.toggle('open',!open);
  });
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
    toggle.setAttribute('aria-expanded','false');
    toggle.classList.remove('open');
    nav.classList.remove('open');
  }));
}
document.querySelectorAll('[data-year]').forEach(el=>{el.textContent=new Date().getFullYear();});
const form=document.querySelector('[data-contact-form]');
if(form){
  form.addEventListener('submit',()=>{
    try{sessionStorage.setItem('ctlLastRequest',new Date().toISOString());}catch(e){}
  });
}
