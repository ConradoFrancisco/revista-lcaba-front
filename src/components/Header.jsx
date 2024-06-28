import { format } from 'date-fns';
import { es } from 'date-fns/locale';
export default function MainHeader() {
  const fecha = new Date();
  const fechaFormateada = format(fecha, "eeee dd 'de' MMMM", { locale: es });
  return (
    <header id="header" className="header-size-sm" data-sticky-shrink="false">
      <div class="container">
        <div class="header-row justify-content-between">
          <div id="logo" className="col-4 ms-auto ms-mb-0 me-mb-0 order-md-2">
            <a href="demo-news.html " style={{display:'flex', justifyContent:'center', alignItems:'center',gap:'.7em'}}>
              <img
                className="logo-default mx-0"
				style={{height:'120px'}}
                srcSet="https://i.ibb.co/BZBX3f8/Captura-de-pantalla-2024-06-27-153351.png"
                src="https://i.ibb.co/BZBX3f8/Captura-de-pantalla-2024-06-27-153351.png"
                alt="Canvas Logo"
				/>
				<h1 className='mb-0'>LA CASA</h1>
            </a>
          </div>
          <div className="w-100 d-block d-md-none"></div>
          <div className="col-12 col-sm-6 col-md-4 justify-content-center justify-content-sm-start d-flex order-md-1 mb-4 mb-sm-0">
            <div className="d-flex">
              <a
                href="https://facebook.com/semiColonWeb"
                className="social-icon rounded-circle bg-dark h-bg-facebook"
              >
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com/__semicolon"
                className="social-icon rounded-circle bg-dark h-bg-x-twitter"
              >
                <i className="fa-brands fa-x-twitter"></i>
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a
                href="https://instagram.com/semicolonweb"
                className="social-icon rounded-circle bg-dark h-bg-instagram"
              >
                <i className="bi-instagram"></i>
                <i className="bi-instagram"></i>
              </a>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 order-md-3 mb-4 mb-md-0">
            <ul className="nav align-items-center justify-content-center justify-content-sm-end">
              <li className="nav-item">
                <a className="nav-link text-uppercase fw-medium" href="#">
                  Ingresar
                </a>
              </li>
              <li className="nav-item">
                <div className="date-today text-uppercase badge bg-dark rounded-pill py-2 px-3 fw-medium">
                  {fechaFormateada}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
