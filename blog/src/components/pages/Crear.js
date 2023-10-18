import useForm from "../../hooks/useForm";
import ValidarForm from "../../helpers/ValidarForm";
import Peticion from "../../helpers/Peticion";
import Global from "../../helpers/Global";
import { useRef } from "react";

const Crear = () => {

    const { formulario, cambiado } = useForm();

    const file = useRef();

    const guardarArticulo = async (e) => {
        e.preventDefault();
        const validacion = ValidarForm(e.target);
        if(validacion){
            const url = Global.url + "crear";
            const { status, articulo } = await Peticion(url, "POST", formulario);
            if(formulario.file && status === "success"){
                const formData = new FormData();
                formData.append('file0', file.current.files[0]);
                const url_imagen = Global.url + "subir-imagen/" + articulo._id;
                const data = await Peticion(url_imagen, "POST", formData, true);
                console.log(data);
            }
        }
    }

    return(
        <>
            <h1> Nuevo artículo </h1>
            { JSON.stringify(formulario) }
            <form onSubmit={ guardarArticulo }>
                <input name="titulo" placeholder="Titulo" onChange={cambiado}/>
                <input name="contenido" placeholder="Contenido" onChange={cambiado}/>
                <input type="file" ref={file} name="file" onChange={cambiado}/>
                <input type="submit" value= "Guardar" />
            </form>
        </>
    )
}

export default Crear;