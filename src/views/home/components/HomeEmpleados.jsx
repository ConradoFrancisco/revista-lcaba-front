import ReactElasticCarousel from 'react-elastic-carousel';

export default function HomeEmpleados() {
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
          <div>
            <img src="https://placehold.co/416x277" alt="" />
          </div>
          <div>
            <img src="https://placehold.co/416x277" alt="" />
          </div>
          <div>
            <img src="https://placehold.co/416x277" alt="" />
          </div>
          <div>
            <img src="https://placehold.co/416x277" alt="" />
          </div>
          <div>
            <img src="https://placehold.co/416x277" alt="" />
          </div>
          <div>
            <img src="https://placehold.co/416x277" alt="" />
          </div>
          <div>
            <img src="https://placehold.co/416x277" alt="" />
          </div>
          <div>
            <img src="https://placehold.co/416x277" alt="" />
          </div>
        </ReactElasticCarousel>
      </section>
    </>
  );
}
