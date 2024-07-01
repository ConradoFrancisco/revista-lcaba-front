import React, { useRef, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import PostService from '../../../../services/PostService';
import useSimpleFetch from '../../../customHooks/useSimpleFetch';
import './slide.css';
export default function MainPost() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const handleButtonClick = (index) => {
    setActiveIndex(index);
    if (carouselRef.current) {
      carouselRef.current.slideTo(index);
    }
  };
  const { data } = useSimpleFetch({ service: PostService.getAll });

  const items = data.map((post, index) => (
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

  return (
    <>
      <AliceCarousel
        ref={carouselRef}
        activeIndex={activeIndex}
        autoPlay
        autoPlayInterval={5000000000000}
        infinite
        buttonsDisabled={true}
        items={items}
        responsive={{
          0: { items: 1 },
          768: { items: 2 },
          1024: { items: 3 },
        }}
        slidesToScroll={1}
        mouseTracking
        renderPrevButton={() => (
          <button className="carousel-button carousel-prev">Prev</button>
        )}
        renderNextButton={() => (
          <button className="carousel-button carousel-next">Next</button>
        )}
      />
      <div className="carousel-buttons">
        {data?.map((post, index) => (
          <div className={`carousel-nav-button ${activeIndex === index ? 'active' : ''}`}
          onClick={() => handleButtonClick(index -1)}>
            <img src={`https://www.legislatura.gob.ar/${post.location}/${post.tn}`} alt="" />
          </div>
        ))}
      </div>
    </>
  );
}
