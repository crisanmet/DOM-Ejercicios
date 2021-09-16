const d = document;

export default function contactFormValidation() {
  const $form = d.querySelector(".contact-form");
  const $inputs = d.querySelectorAll(".contact-form [required]");

  console.log($inputs);
  $inputs.forEach((input) => {
    const $span = d.createElement("span");
    $span.id = input.name;
    console.log($span);
    $span.textContent = input.title;
    $span.classList.add("contact-form-error", "none");
    input.insertAdjacentElement("afterend", $span);
  });
}
