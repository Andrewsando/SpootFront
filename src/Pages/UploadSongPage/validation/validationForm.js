const validationForm = (form) => {
    const errors= {};
    
    if (form.name.length < 3) {
        errors.name = "The name of the song must have at least 3 characters";
    }
    if (/[0-9$%|<>#@]/g.test(form.name)) {
        errors.name = "The name can't have special characters";
    }
    if (!form.name) {
        errors.name = "The name of the song is required";
    }
    
    if (!form.song) {
        errors.song = "The song is required"
    }
    
    if (form.description.length < 20) {
        errors.description = "The description of the song must have at least 20 characters"
    }
    if (!form.description) {
        errors.description = "The description of the song is required";
    }
    
    if (form.artist.length < 3) {
        errors.artist = "The artist must have at least 3 characters";
    }
    if (!form.artist) {
        errors.artist = "The artist of the song is required";
    }
    
    if (form.genre.length < 2) {
        errors.genre = "The genre must have at least 2 characters"
    }
    if (!form.genre) {
        errors.genre = "The genre of the song is required";
    }
    
    if (!form.image) {
        errors.image = "The image of the song is required";
    }
    
    return errors;
};

export default validationForm;