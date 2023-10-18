const Peticion = async (url, metodo, payload = "", archivo = false) => {
    let datos = [];
    let options = {
        method: "GET"
    }
    if(metodo === "GET" || metodo === "DELETE"){
        options = {
            method: metodo
        }
    }

    if(metodo === "POST" || metodo === "PUT"){

        if(archivo){
            options = {
                method: metodo,
                body: payload
            }
        }else{
            options = {
                method: metodo,
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        }
    }

    const req = await fetch(url, options);
    const data = await req.json();
    datos = data;

    return datos;
}

export default Peticion;