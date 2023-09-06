import "../Styles/Validation.css";

export default function Validation(userData) {
  const errors = {};

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)) {
    errors.email = (
      <span className="error">Por favor ingresa un correo válido</span>
    );
  }
  if (!userData.email) {
    errors.email = (
      <span className="error">Tu correo electrónico es requerido</span>
    );
  }
  if (userData.email.length > 35) {
    errors.email = (
      <span className="error">El correo no puede exceder más de 35 carácteres</span>
    );
  }
  if (!/.*\d+.*/.test(userData.password)) {
    errors.password = (
      <span className="error">
        la contraseña debe contener al menos un número
      </span>
    );
  }
  if (userData.password.length < 6 || userData.password.length > 25) {
    errors.password = (
      <span className="error">
        la contraseña debe tener un tamaño entre 6 y 10 caracteres
      </span>
    );
  }
  if (!userData.password) {
    errors.password = (
      <span className="error">Debes ingresar tu contraseña</span>
    );
  }

  return errors;
}
