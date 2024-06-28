import { Carousel, Spinner } from 'react-bootstrap';
import './mainPost.css';
import useSimpleFetch from '../../../customHooks/useSimpleFetch';
import PostService from '../../../../services/PostService';
export default function MainPost() {
  const { data, loading, error } = useSimpleFetch({
    service: PostService.getAll,
  });

  if (loading) {
    return (
      <div className="d-flex justify-content-center items-center my-4">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data || data.length === 0) {
    return <div>ups, parece que no hay datos</div>;
  }

  return (
    <div className="d-flex justify-content-center py-4">
      <div className="image-container d-flex">
        <img src={`https://www.legislatura.gob.ar/${data[0].location}/${data[0].filename}`} alt="" />
        {<div className="overlay">
          <div className="d-flex flex-column p-5">
            <div class="entry-categories" style={{ position: 'relative' }}>
              <a href="demo-news-category.html" className="bg-travel">
                {data[0].category_title}
              </a>
            </div>
            <h1 className="m-0" style={{ color: '#fff' }}>
              {data[0].titulo}
            </h1>
            <span
              className="m-0"
              style={{ color: '#fff' }}
              dangerouslySetInnerHTML={{
                __html: data[0].descripcion.slice(0, 200) + '...',
              }}
            ></span>
            <span
              className="mt-2"
              style={{ color: '#fff' }}
            >{`${data[0].name} ${data[0].surname}`}</span>
            <span style={{ color: '#fff' }}>
              <i className=" me-2 mt-2 bi-clock"></i>
              {data[0].date_ins_parsed}
            </span>
          </div>
        </div>}
      </div>
    </div>
  );
}
