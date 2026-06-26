
(function(){
  const body=document.body;
  const menuToggle=document.querySelector('[data-menu-toggle]');
  const nav=document.querySelector('[data-nav]');
  if(menuToggle&&nav){
    menuToggle.addEventListener('click',()=>{
      const open=nav.classList.toggle('open');
      body.classList.toggle('menu-open',open);
      menuToggle.setAttribute('aria-expanded',String(open));
    });
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
      nav.classList.remove('open');body.classList.remove('menu-open');menuToggle.setAttribute('aria-expanded','false');
    }));
  }
  document.querySelectorAll('[data-year]').forEach(el=>{el.textContent=new Date().getFullYear();});
  const revealEls=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});
    },{threshold:.1});
    revealEls.forEach(el=>observer.observe(el));
  }else{revealEls.forEach(el=>el.classList.add('visible'));}
  document.querySelectorAll('[data-faq]').forEach(item=>{
    const btn=item.querySelector('button');
    if(!btn)return;
    btn.addEventListener('click',()=>{
      const open=item.classList.toggle('open');
      btn.setAttribute('aria-expanded',String(open));
    });
  });
  const form=document.querySelector('[data-contact-form]');
  if(form){
    const status=form.querySelector('[data-form-status]');
    form.addEventListener('submit',(event)=>{
      const name=form.querySelector('[name="name"]');
      const email=form.querySelector('[name="email"]');
      const message=form.querySelector('[name="message"]');
      if(!name.value.trim()||!email.value.trim()||!message.value.trim()){
        event.preventDefault();
        if(status){status.textContent='Please fill out your name, email, and details before submitting.';status.classList.add('show');}
      }
    });
  }
})();
