const Validate = (input) => {
    let errors = {};
    const regexImage = /^(http|https):\/\/[^\s]+(\.jpg|\.jpeg|\.png|\.gif)$/;
  
    if (!input.name) {
      errors.name = "Nombre obligatorio";
    } else if (input.name.length > 15) {
      errors.name = 'Maximo 15 caracteres';
    }
  
    if (!regexImage.test(input.image)) {
      errors.image = "Ingresa una URL valida";
    }
  
    if (input.description.length > 100) {
      errors.description = 'Maximo de caracteres 100';
    }
  
    return errors; 
  }

  export default Validate

   