import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-responsive-modal/styles.css';
import { useParams } from 'react-router-dom';
import PostService from '../../../services/PostService';
import { Carousel } from 'react-bootstrap';
import Modal from 'react-responsive-modal';

export default function () {
  const [openModal, setOpenModal] = useState(false);
  const [post, setPost] = useState(null);
  const [images, setImages] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // Estado para la imagen seleccionada
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const result = await PostService.getById({ id });
      setPost(result.rows[0]);
      setImages(result.images);
      console.log('post:', result.rows[0]);
      console.log('images:', result.images);
    };
    fetchPost();
  }, []);

  const openImageModal = (image) => {
    setSelectedImage(image);
    setOpenModal(true);
  };

  return (
    <>
      <div className="container my-4">
        <div className="entry">
          <div className="entry-title">
            <h2>{post ? post.title : 'Titulo del post'}</h2>
          </div>
          <div className="entry-meta">
            <ul>
              <li>
                <i className="uil uil-schedule" /> 10th July 2021
              </li>
              <li>
                <a href="#">
                  <i className="uil uil-user" /> admin
                </a>
              </li>
              <li>
                <i className="uil uil-folder-open" /> <a href="#">General</a>,{' '}
                <a href="#">Media</a>
              </li>
              <li>
                <a href="#">
                  <i className="uil uil-comments-alt" /> 43 Comments
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="uil uil-camera" />
                </a>
              </li>
            </ul>
          </div>

          <Carousel>
            {images
              ? images.map((image) => {
                  return (
                    <Carousel.Item key={image.id}>
                      <a onClick={() => openImageModal(image)}>
                        <img
                          src={`https://www.legislatura.gob.ar/${image.location}/${image.filename}`}
                          alt=""
                        />
                      </a>
                    </Carousel.Item>
                  );
                })
              : ''}
          </Carousel>

          <div className="entry-content mt-0">
            {post ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: post.description,
                }}
              ></div>
            ) : (
              ''
            )}
            <div className="tagcloud mb-5">
              <a href="#">general</a>
              <a href="#">information</a>
              <a href="#">media</a>
              <a href="#">press</a>
              <a href="#">gallery</a>
              <a href="#">illustration</a>
            </div>
            <div className="clear" />
            <div className="card border-default my-4">
              <div className="card-body p-3">
                <div className="d-flex align-items-center justify-content-between">
                  <h6 className="fs-6 fw-semibold mb-0">Share:</h6>
                  <div className="d-flex">
                    <a
                      className="social-icon si-small text-white border-transparent rounded-circle bg-facebook"
                      href="#"
                      title="Facebook"
                    >
                      <i className="fa-brands fa-facebook-f" />
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                    <a
                      className="social-icon si-small text-white border-transparent rounded-circle bg-x-twitter"
                      href="#"
                      title="Twitter"
                    >
                      <i className="fa-brands fa-x-twitter" />
                      <i className="fa-brands fa-x-twitter" />
                    </a>
                    <a
                      className="social-icon si-small text-white border-transparent rounded-circle bg-pinterest"
                      href="#"
                      title="Pinterest"
                    >
                      <i className="fa-brands fa-pinterest-p" />
                      <i className="fa-brands fa-pinterest-p" />
                    </a>
                    <a
                      className="social-icon si-small text-white border-transparent rounded-circle bg-whatsapp"
                      href="#"
                      title="Whatsapp"
                    >
                      <i className="fa-brands fa-whatsapp" />
                      <i className="fa-brands fa-whatsapp" />
                    </a>
                    <a
                      className="social-icon si-small text-white border-transparent rounded-circle bg-rss"
                      href="#"
                      title="RSS"
                    >
                      <i className="fa-solid fa-rss" />
                      <i className="fa-solid fa-rss" />
                    </a>
                    <a
                      className="social-icon si-small text-white border-transparent rounded-circle bg-email3 me-0"
                      href="#"
                      title="Mail"
                    >
                      <i className="fa-solid fa-envelope" />
                      <i className="fa-solid fa-envelope" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal open={openModal} onClose={() => setOpenModal(false)} center>
        {selectedImage && (
          <img
            src={`https://www.legislatura.gob.ar/${selectedImage.location}/${selectedImage.filename}`}
            alt=""
            style={{ width: '100%' }}
          />
        )}
      </Modal>
    </>
  );
}
