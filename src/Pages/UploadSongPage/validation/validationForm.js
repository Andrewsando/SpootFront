const validationForm = (form) => {
    const errors= {};
    
    if (form.name.length < 3) {
        errors.name = "El nombre de la canción debe tener al menos 3 caracteres.";
    }
    if (/[0-9$%|<>#@]/g.test(form.name)) {
        errors.name = "El nombre no puede tener caracteres especiales.";
    }
    if (!form.name) {
        errors.name = "El nombre de la canción es obligatorio.";
    }
    
    if (form.description.length < 20) {
        errors.description = "La descripción de la canción debe tener al menos 20 caracteres."
    }
    if (!form.description) {
        errors.description = "La descripción de la canción es obligatoria.";
    }
    
    if (form.artist.length < 3) {
        errors.artist = "El artista debe tener al menos 3 personajes.";
    }
    if (!form.artist) {
        errors.artist = "Se requiere la artista de la canción.";
    }
    
    if (form.genre.length < 2) {
        errors.genre = "El género debe tener al menos 2 carácteres"
    }
    if (!form.genre) {
        errors.genre = "Se requiere el género de la canción.";
    }
    
    if (!form.image) {
        errors.image = "La imagen de la canción es obligatoria.";
    }
    if (!form.sound) {
        errors.sound = "El sonido es necesario";
    }
    
    return errors;
};

export default validationForm;