function validarLogin() {
  const email = document.getElementById("email-login").value;
  const password = document.getElementById("contra-login").value;
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/;

  if (!emailRegex.test(email.trim())) {
    swal("Opps!", "Por favor, ingresa un email válido", "warning");
    return;
  } else if (email.trim().length === 0 || password.trim().length === 0) {
    swal("Opps!", "Debes completar todos los campos", "warning");
    return;
  } else if (email === "admin@gmail.com" && password === "admin123") {
    window.location.href = "index.html";
    return;
  } else {
    swal(
      "Opps!",
      "El email y/o la contraseña son incorrectos. Vuelva a intentarlo! :)",
      "error"
    );
    return;
  }
}
