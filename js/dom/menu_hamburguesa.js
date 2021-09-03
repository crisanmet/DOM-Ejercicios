/*FUNCION QUE RECIBE TRES PARAMETROS: 1-BOTON QUE ACTIVA 2-EL ELEMENTO QUE SE MODIFICA 3-ELEMENTO QUE SE CIERRA AL HACER CLIC*/
export default function hamburgerMenu(panelBtn,panel,menu){
  
const d=document;

/*A LA CONSTANTE DOCUMENT LE ASIGNAMOS EL EVENTO CLICK 
Y SI EL ELEMENTO QUR ORIGINA EL EVENTO COINCIDE CON EL 1-PARAMETRO LE ASIGNA LA CLASE IS-ACTIVE*/ 
d.addEventListener("click", (e) =>{
  if(e.target.matches(panelBtn)|| e.target.matches(`${panelBtn} *`) ){
    d.querySelector(panel).classList.toggle("is-active");
    d.querySelector(panelBtn).classList.toggle("is-active");
  }

  if(e.target.matches(menu)){
    d.querySelector(panel).classList.remove("is-active");
    d.querySelector(panelBtn).classList.remove("is-active");
  }
});
}