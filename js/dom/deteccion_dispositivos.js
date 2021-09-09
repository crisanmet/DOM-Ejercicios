const d = document;
const n = navigator;
const ua = n.userAgent;

export default function userDeviceInfo(id) {
  const $id = d.getElementById(id);
  const isMobile = {
    android: () => ua.match(/android/i),
    ios: () => ua.match(/iphone|ipag|ipod/i),
    any: function () {
      return this.android() || this.ios();
    },
  };
  const isDesktop = {
    linux: () => ua.match(/linux/i),
    mac: () => ua.match(/mac os/i),
    windows: () => ua.match(/windows nt/i),
    any: function () {
      return this.linux() || this.mac() || this.windows();
    },
  };
  const isBrowser = {
    chrome: () => ua.match(/chrome/i),
    safari: () => ua.match(/safari/i),
    firefox: () => ua.match(/firefox/i),
    opera: () => ua.match(/opera|opera mini/i),
    ie: () => ua.match(/msie|iemobile/i),
    edge: () => ua.match(/edge/i),
    any: function () {
      return (
        this.chrome() ||
        this.safari() ||
        this.firefox() ||
        this.opera() ||
        this.ie() ||
        this.edge()
      );
    },
  };

  $id.innerHTML = `
  <ul>
    <li>User Agent: <b>${ua}</b></li>
    <li>Plataforma: <b>${
      isMobile.any() ? isMobile.any() : isDesktop.any()
    }</b></li> 
    <li>Navegador: <b>${isBrowser.any()}</b></li>
    `;

  /*CONTENIDO SEGUN BROWSER*/

  if (isBrowser.chrome()) {
    $id.innerHTML += `<p> <mark>Solo se ve en Chrome</mark> </p>`;
  }

  /*DESCARGAS SEGUN SISTEMA*/
  if (isDesktop.linux()) {
    $id.innerHTML += `<p> <mark>Descarga software para linux</mark> </p>`;
  }
  if (isDesktop.windows()) {
    $id.innerHTML += `<p> <mark>Descarga software para Windows</mark> </p>`;
  }
  if (isDesktop.mac()) {
    $id.innerHTML += `<p> <mark>Descarga software para Mac os</mark> </p>`;
  }

  /*REDIRECCIONES*/
  if (isMobile.android()) {
    window.location.href = "...";
  }
}
