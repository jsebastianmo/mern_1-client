const ValidarForm = (formulario) => {

    let validacion = false;
    let count = 0;

    const formData = new FormData(formulario);

    let objetoCompleto = {};

    for (let [name, value] of formData) {
        objetoCompleto[name] = value;
        if(objetoCompleto[name].toString().trim() === ""){
            count = count + 1;
        }else{
            count = count;
        }
    }

    return validacion = count === 0 ? true : false;
}

export default ValidarForm;