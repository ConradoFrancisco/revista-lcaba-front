import React, { useRef, useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import PostService from '../../../../services/PostService';
import useSimpleFetch from '../../../customHooks/useSimpleFetch';
import './slide.css';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import CarruselSkeleton from '../../../skeletons/Carrusel/CarruselSkeleton';

export default function MainPost() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const { data, loading, error } = useSimpleFetch({
    service: PostService.getAll,
    limit: 4,
    offset: 20,
  });

  const handleButtonClick = (index) => {
    setActiveIndex(index);
    if (carouselRef.current) {
      const adjustedIndex = index - 1; 
      carouselRef.current.slideTo(adjustedIndex >= 0 ? adjustedIndex : 0);
    }
  };

  const items = data?.map((post, index) => (
    <div
      key={index}
      className={`image-container ${activeIndex === index ? 'active-slide' : ''}`}
    >
      <img
        src={`https://www.legislatura.gob.ar/${post.location}/${post.filename}`}
        alt=""
      />
      <div className="overlay">
        <div className="d-flex flex-column p-5">
          <div className="entry-categories" style={{ position: 'relative' }}>
            <a href="demo-news-category.html" className="bg-travel">
              {post.category_title}
            </a>
          </div>
          <h1 className="m-0" style={{ color: '#fff' }}>
            {post.titulo}
          </h1>
          <span
            className="m-0"
            style={{ color: '#fff' }}
            dangerouslySetInnerHTML={{
              __html: post.descripcion.slice(0, 200) + '...',
            }}
          ></span>
          <span className="mt-2" style={{ color: '#fff' }}>
            {`${post.name} ${post.surname}`}
          </span>
          <span style={{ color: '#fff' }}>
            <i className="me-2 mt-2 bi-clock"></i>
            {post.date_ins_parsed}
          </span>
        </div>
      </div>
    </div>
  ));

  useEffect(() => {
    if (carouselRef.current) {
      const adjustedIndex = activeIndex - 1; // Ajustar el índice para centrar el slide
      carouselRef.current.slideTo(adjustedIndex >= 0 ? adjustedIndex : 0);
    }
  }, [activeIndex]);

  return (
    <>
      {loading ? (
        <CarruselSkeleton />
      ) : (
        <AliceCarousel
          ref={carouselRef}
          activeIndex={activeIndex}
          autoPlay
          autoPlayInterval={8000}
          infinite
          items={items}
          responsive={{
            0: { items: 1 },
            768: { items: 2 },
            1024: { items: 3 },
          }}
          slidesToScroll={1}
          mouseTracking
          dotsDisabled={true}
          renderPrevButton={() => (
            <button className="carousel-button carousel-prev">
              <FaArrowAltCircleLeft />
            </button>
          )}
          renderNextButton={() => (
            <button className="carousel-button carousel-next">
              <FaArrowAltCircleRight />
            </button>
          )}
        />
      )}
      <div style={{ backgroundColor: '#555' }} className="carousel-buttons">
        <div className="row">
          {data?.map((post, index) => (
            <div key={index} className="col-3 d-flex">
              <div
                style={{ padding: '25px' }}
                className={`w-100 d-flex carousel-nav-button gap-3 align-items-center ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleButtonClick(index)}
              >
                <img
                  height={60}
                  width={60}
                  src={`https://www.legislatura.gob.ar/${post.location}/${post.tn}`}
                  alt=""
                />
                <div className="d-flex flex-column">
                  <span style={{ fontWeight: '500', fontSize: '14px' }}>
                    {post.category_title}
                  </span>
                  <span>{post.titulo}</span>
                  <span>{post.date_ins_parsed}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
