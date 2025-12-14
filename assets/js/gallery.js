fetch("gallery/gallery.json")
.then(r=>r.json())
.then(items=>{
  const g=document.getElementById("gallery");
  items.forEach(i=>{
    const d=document.createElement("div");
    d.className="gallery-item reveal show";
    d.innerHTML=i.type==="image"
      ? `<img src="gallery/${i.file}">`
      : `<video src="gallery/${i.file}" controls></video>`;
    g.appendChild(d);
  });
});
