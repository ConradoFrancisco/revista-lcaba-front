export default function AgendaPost({post}){
    return(
        <div className="entry event col-lg-4 col-md-4 d-flex">
                  <div className="grid-inner row g-0 p-4 bg-transparent shadow-sm h-shadow all-ts h-translatey-sm card border">
                    <div className="entry-image">
                      <a href={`/posts/${post.id_post}`}>
                        <img
                          style={{
                            maxHeight: '244px',
                            objectFit: 'cover',
                            minHeight: '15.2em',
                          }}
                          src={`https://www.legislatura.gob.ar/${post.location}/${post.filename}`}
                          alt="Inventore voluptates velit totam ipsa tenetur"
                        />
                        <div
                          className="entry-date"
                          style={{ color: '#bbce46' }}
                        >
                          {post.date_ins_parsed}
                        </div>
                      </a>
                    </div>
                    <div className="entry-title title-sm">
                      <h2>
                        <a href="#">{post.titulo}</a>
                      </h2>
                    </div>
                    <div className="entry-meta">
                      <ul style={{ padding: '0px' }}>
                        <li>
                          <a href="#">
                            <i className="bi-clock" /> 11:00 - 19:00
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="uil uil-map-marker" /> CABA
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="entry-content">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.descripcion.slice(0, 420),
                        }}
                      ></p>
                      <a
                        href={`/posts/${post.id_post}`}
                        className="btn"
                        style={{ backgroundColor: '#bbce46' }}
                      >
                        Leer mas
                      </a>{' '}
                      <a href="#" className="btn btn-outline-secondary">
                        Compartir
                      </a>
                    </div>
                  </div>
                </div>
    )
}