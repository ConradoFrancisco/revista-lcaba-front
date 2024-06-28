import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../views/home/Home';
import Autoridades from '../views/autoridades/Autoridades';
import Agenda from '../views/agenda/Agenda';
import Beneficios from '../views/beneficios/Beneficios';
import Bienestar from '../views/bienestar/Bienestar';
import Contacto from '../views/contacto/Contacto';
import HistoriasDeVida from '../views/historias-de-vida/HistoriasDeVida';
import Logros from '../views/logros/Logros';
import Parlamentaria from '../views/parlamentaria/Parlamentaria';
import Capacitaciones from '../views/capacitaciones/Capacitacion';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
            <Route path='/' element={<Home />}/>
            <Route path='/autoridades' element={<Autoridades />}/>
            <Route path='/agenda' element={<Agenda />}/>
            <Route path='/beneficios' element={<Beneficios />}/>
            <Route path='/bienestar' element={<Bienestar/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
            <Route path='/capacitaciones' element={<Capacitaciones/>}/>
            <Route path='/historias-de-vida' element={<HistoriasDeVida/>}/>
            <Route path='/logros' element={<Logros/>}/>
            <Route path='/parlamentaria' element={<Parlamentaria/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
