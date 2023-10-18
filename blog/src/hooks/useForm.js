import { useState } from "react";

const useForm = () => {
    const [ formulario, setFormulario ] = useState();

    const serializar = (formulario) => {
        const formData = new FormData(formulario);

        let objetoCompleto = {};

        for (let [name, value] of formData) {
            objetoCompleto[name] = value;
        }

        return objetoCompleto;
    }

    const enviado = (e) => {
        e.preventDefault();
        const data = serializar(e.target);
        setFormulario(data);
    }

    const cambiado = ( {target} ) => {
        const { name, value } = target;
        setFormulario({
            ...formulario,
            [name]: value
        })
    }

    return {
        formulario,
        enviado,
        cambiado
    }
}

export default useForm;