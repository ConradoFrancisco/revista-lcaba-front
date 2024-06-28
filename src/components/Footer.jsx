import { useState } from 'react';

export default function Footer() {
  const [menu, SetMenu] = useState([
    { id: 1, titulo: 'Home', colorClass: 'menu-color-home' },
    { id: 2, titulo: 'Agenda', colorClass: 'menu-color-travel' },
    { id: 3, titulo: 'Historias de Vida', colorClass: 'menu-color-tech' },
    { id: 4, titulo: 'Autoridades', colorClass: 'menu-color-fashion' },
    { id: 5, titulo: 'Parlametaria', colorClass: 'menu-color-sports' },
    { id: 6, titulo: 'Bienestar', colorClass: 'menu-color-food' },
    { id: 7, titulo: 'Capacitaciones', colorClass: 'menu-color-home' },
    { id: 8, titulo: 'Nuestros Logros', colorClass: 'menu-color-travel' },
    { id: 9, titulo: 'Beneficios', colorClass: 'menu-color-tech' },
    { id: 10, titulo: 'Contacto', colorClass: 'menu-color-fashion' },
  ]);
  return (
    <div id="copyrights">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 align-self-center">
            Copyrights © 2023 All Rights Reserved by Canvas Inc.
            <br />
            <div className="copyright-links">
              <a href="#">Terms of Use</a> / <a href="#">Privacy Policy</a>
            </div>
          </div>
          <div className="col-md-6 align-self-center">
            <div className="copyrights-menu text-end copyright-links m-0">
              {menu.map((item) => {
                const ref =
                  item.titulo === 'Home'
                    ? '/'
                    : item.titulo.toLocaleLowerCase();
                return (
                  <>
                    <a key={item.id} href={ref}>
                      {item.titulo}
                    </a>{' '}
                    <span>/</span>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
