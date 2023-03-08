const form = document.getElementById("formulario");
const email = document.getElementById("email");
const message = document.getElementById("mensaje");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!emailRegex.test(email.value.trim())) {
    swal("Opps!", "Por favor, ingresa un email válido", "warning");
    return;
  }

  if (message.value.trim().length < 10 || message.value.trim().length > 100) {
    swal(
      "Opps!",
      "Por favor, ingresa un mensaje entre 10 y 100 caracteres",
      "warning"
    );
    return;
  }

  form.submit();
});
