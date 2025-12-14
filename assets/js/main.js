async function loadComponent(id,file){
  const res=await fetch(file);
  document.getElementById(id).innerHTML=await res.text();
}

loadComponent("header","components/header.html");
loadComponent("footer","components/footer.html");

document.addEventListener("click",e=>{
  if(e.target.id==="themeToggle"){
    document.body.classList.toggle("light");
    localStorage.theme=document.body.classList.contains("light")?"light":"dark";
  }
});

if(localStorage.theme==="light") document.body.classList.add("light");

/* reveal */
const obs=new IntersectionObserver(e=>{
  e.forEach(x=>x.isIntersecting&&x.target.classList.add("show"));
});
document.querySelectorAll(".reveal").forEach(el=>obs.observe(el));
