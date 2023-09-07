import "../Styles/Validation.css";

export default function Validation({email, password}) {
  const errors = {};

  if(email){
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = (
      <span className="error">Por favor ingresa un correo válido</span>
    );
  }
  if (!email) {
    errors.email = (
      <span className="error">Tu correo electrónico es requerido</span>
    );
  }
  if (email.length > 35) {
    errors.email = (
      <span className="error">El correo no puede exceder más de 35 carácteres</span>
    );
  }
}
  if(password){
  if (!/.*\d+.*/.test(password)) {
    errors.password = (
      <span className="error">
        la contraseña debe contener al menos un número
      </span>
    );
  }
  if (password.length < 6 || password.length > 25) {
    errors.password = (
      <span className="error">
        la contraseña debe tener un tamaño entre 6 y 10 caracteres
      </span>
    );
  }
  }
  return errors;
}
