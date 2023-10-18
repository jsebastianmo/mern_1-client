import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from '../components/pages/Inicio';
import Articulos from '../components/pages/Articulos';
import Crear from '../components/pages/Crear';
import Articulo from '../components/pages/Articulo';
import Nav from '../components/layout/Nav';

const Rutas = () => {

    return(
        <BrowserRouter>
            <Nav />
            <section id='content' className='content'>
                <Routes>
                    <Route path='/' element={ <Inicio /> }/>
                    <Route path='/inicio' element={ <Inicio /> }/>
                    <Route path='/articulos' element={ <Articulos /> }/>
                    <Route path='/nuevo-articulo' element={ <Crear /> }/>
                    <Route path='/articulo' element={ <Articulo /> }/>
                </Routes>
            </section>
        </BrowserRouter>
    )
}

export default Rutas;