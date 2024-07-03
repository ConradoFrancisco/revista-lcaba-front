import './carrusel-skeleton.css'
export default function CarruselSkeleton() {
    return (
      <div className='containter-fluid'>
        <div className="row d-flex justify-content-center gap-3">
          <div className="skeleton skeleton-border" style={{ height: '500px', maxWidth: '614px' }}></div>
          <div className="skeleton skeleton-border" style={{ height: '500px', maxWidth: '614px' }}></div>
          <div className="skeleton skeleton-border" style={{ height: '500px', maxWidth: '614px' }}></div>
        </div>
      </div>
    );
  }