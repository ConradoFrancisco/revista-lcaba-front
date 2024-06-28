import { useState } from 'react';

export default function Nav() {
  const [menu, SetMenu] = useState([
    { id: 1, titulo: 'Home', colorClass: 'menu-color-home', url: '/' },
    {
      id: 2,
      titulo: 'Agenda',
      colorClass: 'menu-color-travel',
      url: '/agenda',
    },
    {
      id: 3,
      titulo: 'Historias de Vida',
      colorClass: 'menu-color-tech',
      url: '/historias-de-vida',
    },
    {
      id: 4,
      titulo: 'Autoridades',
      colorClass: 'menu-color-fashion',
      url: '/autoridades',
    },
    {
      id: 5,
      titulo: 'Parlametaria',
      colorClass: 'menu-color-sports',
      url: '/parlamentaria',
    },
    {
      id: 6,
      titulo: 'Bienestar',
      colorClass: 'menu-color-food',
      url: '/bienestar',
    },
    {
      id: 7,
      titulo: 'Capacitaciones',
      colorClass: 'menu-color-home',
      url: '/capacitaciones',
    },
    {
      id: 8,
      titulo: 'Nuestros Logros',
      colorClass: 'menu-color-travel',
      url: '/logros',
    },
    {
      id: 9,
      titulo: 'Beneficios',
      colorClass: 'menu-color-tech',
      url: '/beneficios',
    },
    {
      id: 10,
      titulo: 'Contacto',
      colorClass: 'menu-color-fashion',
      url: '/contacto',
    },
  ]);

  return (
    <div
      id="header-wrap"
      style={{ position: 'unset' }}
      class="border-top border-f5 mt-2"
    >
      <div class="container">
        <div class="header-row justify-content-between flex-row-reverse flex-lg-row">
          <nav class="primary-menu with-arrows">
            <ul class="menu-container" style={{ display: 'flex', gap: '20px' }}>
              {menu.map((item) => {
                return (
                  <li key={item.id} class={`menu-item ${item.colorClass}`}>
                    <a class="menu-link" href={item.url}>
                      <div>{item.titulo}</div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
