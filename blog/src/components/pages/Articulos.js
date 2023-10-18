import { useEffect, useState } from "react";
import Global from "../../helpers/Global";
import Peticion from "../../helpers/Peticion";
import Listado from "./Listado";

const Articulos = () => {

    const [ articulos, setArticulos ] = useState({});
    const [ cargando, setCargando ] = useState(true);

    useEffect(()=>{
        const url = Global.url + "articulos";
        obtenerArticulo(url);
    }, [])

    const obtenerArticulo = async (url) => {
        const { articulos } = await Peticion(url, "GET");
        setArticulos(articulos);
        setCargando(false);
    }

    return(
        <>
            <h2> Articulos </h2>
            { 
                cargando ? 
                (
                    <h1> Cargando... </h1>
                ) 
                : 
                (
                    <Listado articulos={articulos} />
                )
            }
        </>
    )
}

export default Articulos;