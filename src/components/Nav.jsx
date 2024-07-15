import { useEffect, useState } from 'react';
import useSimpleFetch from '../customHooks/useSimpleFetch';
import MenuService from '../../services/MenuService';
import { NavDropdown } from 'react-bootstrap';

export default function Nav() {
  const [menus, SetMenus] = useState([
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
  useEffect(()=>{
    const fetchmenu = async () =>{
      try{
        const result = await MenuService.getMenus({pageId:6})
        SetMenus(result.menues)
        console.log(result.menues)
      }catch(e){
        console.error(e);
      }
    }
    fetchmenu();
  },[])
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
              {
                menus?.map((menu,key)=>{
                  return (
                    <NavDropdown title={menu.menu_title}>
                      {menu.submenus?.map((submenu,key)=>{
                        return(
                          <NavDropdown.Item>
                            {submenu.submenu_title}
                        </NavDropdown.Item>
                        )
                      })}
                    </NavDropdown>
                  )
                })
              }
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
