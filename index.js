const CosasQueAprendimos=[
  {
    Tema: "Terminal",
    Class: "",
  },
  {
    Tema: "Node",
    Class: "",
  },
  {
    Tema: "POO",
    Class: "",
  },
  {
    Tema: "TypeScript",
    Class: "",
  },
  {
    Tema: "CSS",
    Class: "",
  },
  {
    Tema: "DOM",
    Class: "Especial",
  },
];

function Principal(){
  //Version Extensa:
  /*
  const ListaElement=document.querySelector(".lista");
  console.log(ListaElement);
  const ListaLI=ListaElement.querySelectorAll("li");
  console.log(ListaLI);
  const ItemsElement=document.querySelectorAll(".lista li");
  console.lob(ItemsElement);
  //Para ver el tiempo que tarda en ejecutarse:
  setTimeout(()=>{
    for (let e of ItemsElement){
      e.remove();
    }
  },6000)
  */
  //Version Simple:
  const ListaElement=document.querySelector(".lista");
  const ItemsElement=document.querySelectorAll(".lista li");
  for (let e of ItemsElement){
    e.remove();
  };
  for (const i of CosasQueAprendimos) {
    const NuevoLI=document.createElement("li");
    NuevoLI.textContent=i.Tema;
    const ClaseAsignada= i.Class||"sin-clase";
    NuevoLI.classList.add(ClaseAsignada);
    //console.log(NuevoLI);
    ListaElement.appendChild(NuevoLI);
  };
};
Principal();