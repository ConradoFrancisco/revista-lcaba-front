import { hr } from 'date-fns/locale';
import PostService from '../../../../services/PostService';
import useSimpleFetch from '../../../customHooks/useSimpleFetch';

export default function AgendaHome() {
  const { data, loading, error } = useSimpleFetch({
    service: PostService.getAll,
    limit: 3,
    offset: 150,
  });
  return (
    <>
      <div className="content-wrap bg-light pt-4">
        <div className="container">
          <div className="d-flex justify-content-center">
            <h2 className="fs-2">AGENDA</h2>
          </div>
          <div className="row g-4 mb-5">
            {data && data.length > 0
              ? data.map((post) => {
                  return (
                    <article className="d-flex entry event col-md-6 col-lg-4 mb-0">
                      <div className="grid-inner bg-white row g-0 p-3 border-0 rounded-5 shadow-sm h-shadow all-ts h-translate-y-sm">
                        <div className="col-12 mb-md-0">
                          <a href="#" className="entry-image">
                            <img
                              src={`https://www.legislatura.gob.ar/${post.location}/${post.filename}`}
                              alt="Inventore voluptates velit totam ipsa tenetur"
                              className="rounded-2"
                            />
                            <div className="bg-overlay">
                              <div className="bg-overlay-content justify-content-start align-items-start">
                                <div className="badge bg-light text-dark rounded-pill">
                                  {post.category_title}
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="col-12 p-4 pt-0">
                          <div className="entry-meta no-separator mb-1 mt-0">
                            <ul>
                              <li>
                                <a
                                  href="#"
                                  className="text-uppercase fw-medium"
                                >
                                  {post.date_ins_parsed}
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="entry-title nott">
                            <h3>
                              <a href="#">{post.titulo}</a>
                            </h3>
                          </div>
                          <div className="entry-content my-3">
                            <p
                              dangerouslySetInnerHTML={{
                                __html: post.descripcion.slice(0, 200) + '...',
                              }}
                              className="mb-0"
                            ></p>
                          </div>
                          <div className="entry-meta no-separator">
                            <ul>
                              <li>
                                <a href="#" className="fw-normal">
                                  <i className="uil uil-map-marker"></i> Buenos Aires, Argentina
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })
              : ''}
          </div>
        </div>
      </div>
    </>
  );
}
