import ReactElasticCarousel from 'react-elastic-carousel';
import useSimpleFetch from '../../../customHooks/useSimpleFetch';
import PostService from '../../../../services/PostService';

export default function HomeEmpleados() {
  const { data, loading, error } = useSimpleFetch({
    service: PostService.getAll,
    limit: 8,
    offset: 80,
  });

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <>
      <section className="pb-4">
        <h2 className="fs-2 text-center pt-4">EMPLEADOS EN ACCION</h2>

        <ReactElasticCarousel
          breakPoints={breakPoints}
          showEmptySlots={false}
          enableAutoPlay
        >
          {data && data.map((post)=>(
            <div>
            <img className='image-fluid' src={`https://www.legislatura.gob.ar/${post.location}/${post.filename}`} alt="" />
          </div>
          ))}
        </ReactElasticCarousel>
      </section>
    </>
  );
}
