import Global from "../../helpers/Global";

const Listado = ( { articulos } ) => {
    return(
            <>
                {
                    articulos.length > 0 ? 
                    (
                        <>
                            {
                                articulos.map(articulo => (
                                    <article key={articulo._id}>
                                        <h1> { articulo.titulo } </h1>
                                        <p> { articulo.contenido } </p>
                                        <img src= { Global.url + "fichero/" + articulo.imagen} />
                                    </article>
                                ))
                            }
                        </>
                    )
                    :
                    (
                        <h1> No hay artículos para mostrar </h1>
                    )
                }
            </>
    )
}

export default Listado;