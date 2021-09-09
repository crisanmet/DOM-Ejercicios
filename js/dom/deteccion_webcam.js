const d = document;
const w = window;
const n = navigator;

export default function webCam(id) {
  const $video = d.getElementById(id);

  if (n.mediaDevices.getUserMedia) {
    n.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        $video.srcObject = stream;
        $video.onplay();
      })
      .catch((err) => {
        $video.insertAdjacentElement(
          "afterend",
          `<p> <mark>${err}</mark></p> `
        );
      });
  }
}
