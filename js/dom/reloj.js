const d=document;

export function relojDigital(reloj,btnPlay, btnStop) {
  let relojTiempo;

  d.addEventListener("click", e=>{
    if(e.target.matches(btnPlay)){
      relojTiempo=setInterval(() => {
        let relojHora= new Date().toLocaleTimeString();
        d.querySelector(reloj).innerHTML=`<h3>${relojHora}</h3>`;
      }, 1000);

      e.target.disabled=true;

      } 
    if(e.target.matches(btnStop)){
      clearInterval(relojTiempo);
      d.querySelector(reloj).innerHTML=null;
      d.querySelector(btnPlay).disabled=false;
    }
  })
}
export function alarma() {

}