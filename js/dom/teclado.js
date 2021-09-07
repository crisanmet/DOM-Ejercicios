const d = document;
let x = 0;
let y = 0;

export function atajos(e) {
  if (e.key === "a" && e.altKey) {
    alert("alerta lanzada con el atajo de alt + a");
  }
}

export function moverPelota(e, ball, stage) {
  const $ball = d.querySelector(ball);
  const $stage = d.querySelector(stage);
  console.log(e.keyCode);
  console.log(e.key);

  switch (e.keyCode) {
    case 37:
      x--;
      break;
    case 38:
      y--;
      break;
    case 39:
      x++;
      break;
    case 40:
      y++;
      break;

    default:
      break;
  }
  $ball.style.transform = `translate{${x * 10}px, ${y * 10}px}`;
}
