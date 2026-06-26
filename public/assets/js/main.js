(function(){
  const body=document.body;
  const menuToggle=document.querySelector('[data-menu-toggle]');
  const nav=document.querySelector('[data-nav]');
  if(menuToggle&&nav){
    menuToggle.addEventListener('click',()=>{
      const isOpen=nav.classList.toggle('open');
      body.classList.toggle('menu-open',isOpen);
      menuToggle.setAttribute('aria-expanded',String(isOpen));
    });
    nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
      nav.classList.remove('open');
      body.classList.remove('menu-open');
      menuToggle.setAttribute('aria-expanded','false');
    }));
  }
  document.querySelectorAll('[data-year]').forEach(el=>{el.textContent=new Date().getFullYear();});
  const reveals=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}
      });
    },{threshold:.12});
    reveals.forEach(el=>observer.observe(el));
  }else{reveals.forEach(el=>el.classList.add('visible'));}
  document.querySelectorAll('[data-faq]').forEach(item=>{
    const btn=item.querySelector('button');
    if(!btn) return;
    btn.addEventListener('click',()=>{
      const open=item.classList.toggle('open');
      btn.setAttribute('aria-expanded',String(open));
    });
  });
  const form=document.querySelector('[data-contact-form]');
  if(form){
    const status=form.querySelector('[data-form-status]');
    const submit=form.querySelector('[type="submit"]');
    const showStatus=(type,msg)=>{
      if(!status) return;
      status.className='form-status show '+type;
      status.textContent=msg;
    };
    form.addEventListener('submit',async(event)=>{
      event.preventDefault();
      const formData=new FormData(form);
      const payload=Object.fromEntries(formData.entries());
      if(payload.companyWebsite){return;}
      if(!payload.name||!payload.email||!payload.message){
        showStatus('error','Please fill out your name, email, and details before submitting.');
        return;
      }
      if(submit){submit.disabled=true;submit.textContent='Sending...';}
      try{
        const response=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
        const result=await response.json().catch(()=>({}));
        if(response.ok && result.status==='sent'){
          window.location.href='thank-you.html';
          return;
        }
        if(response.ok && result.status==='not_configured'){
          showStatus('error','The form design is ready, but email delivery is not connected yet. For now, please email colbystechlife@gmail.com directly.');
          return;
        }
        throw new Error(result.message||'Unable to submit right now.');
      }catch(error){
        showStatus('error','The form could not send yet. Please email colbystechlife@gmail.com directly while the form connection is finished.');
      }finally{
        if(submit){submit.disabled=false;submit.textContent='Send request';}
      }
    });
  }
})();
