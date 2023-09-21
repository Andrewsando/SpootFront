const Validate = (input) => {
    let errors = {};
    
  
    if (!input.name) {
      errors.name = "Nombre obligatorio";
    } else if (input.name.length > 15) {
      errors.name = 'Maximo 15 caracteres';
    }
  
    if (input.description.length > 100) {
      errors.description = 'Maximo de caracteres 100';
    }
  
    return errors; 
  }

  export default Validate

   