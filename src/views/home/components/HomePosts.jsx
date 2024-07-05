import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useSimpleFetch from '../../../customHooks/useSimpleFetch';
import PostService from '../../../../services/PostService';
import LatestPostsSkeleton from '../../../skeletons/latestPosts/LatestPostsSkeleton';

export default function  HomePosts({}) {
  const { data, loading, error } = useSimpleFetch({
    service: PostService.getAll,
    limit:4,
    offset:1
  });

  return (
    <section id="content">
      <div className="content-wrap bg-light py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav class="navbar navbar-expand-lg navbar-light p-0">
                <h4 class="mb-0 pe-2 ls-1 text-uppercase fw-bold">
                  Ultimos posts por categoría
                </h4>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarToggler1"
                  aria-controls="navbarToggler1"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="bi-list"></i>
                </button>
                <div
                  className="collapse navbar-collapse justify-content-between"
                  id="navbarToggler1"
                >
                  <div></div>
                  <ul
                    className="nav nav-sm navbar-nav me-md-auto me-lg-0 mt-2 mt-lg-0 align-self-end"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link bg-color-travel container-modules-loaded active"
                        id="nav-outdoor-tab"
                        data-bs-toggle="tab"
                        href="#nav-outdoor"
                        role="tab"
                        aria-selected="true"
                      >
                        Travel
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link bg-color-food container-modules-loaded"
                        id="nav-food-tab"
                        data-bs-toggle="tab"
                        href="#nav-food"
                        role="tab"
                        aria-selected="false"
                        tabindex="-1"
                      >
                        Food
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link bg-color-sports container-modules-loaded"
                        id="nav-travel-tab"
                        data-bs-toggle="tab"
                        href="#nav-outdoor"
                        role="tab"
                        aria-selected="false"
                        tabindex="-1"
                      >
                        Sports
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link bg-color-fashion container-modules-loaded"
                        id="nav-fashion-tab"
                        data-bs-toggle="tab"
                        href="#nav-fashion"
                        role="tab"
                        aria-selected="false"
                        tabindex="-1"
                      >
                        Fashion
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="line line-xs line-dark"></div>
              <div className="tab-content">
                <div className="tab-pane fade active show">
                  <div className="row col-mb-30 mb-0">
                    {loading? <LatestPostsSkeleton /> : data &&
                      (data.length > 0
                        ? data.map((post, key) => {
                            if (key === 0) {
                              return;
                            }
                            return (
                              <div class="col-lg-4" key={post.id_post}>
                                <div class="posts-md">
                                  <div class="entry">
                                    <div class="entry-image">
                                      <a href={`/posts/${post.id_post}`}>
                                        <img
                                          src={`https://www.legislatura.gob.ar/${post.location}/${post.filename}`}
                                          alt=""
                                        />
                                      </a>
                                      <div class="entry-categories">
                                        <a
                                          href={`/posts/${post.id_post}`}
                                          class="bg-travel"
                                        >
                                          {post.category_title}
                                        </a>
                                      </div>
                                    </div>
                                    <div class="entry-title text-transform-none">
                                      <h3 class="mb-2">
                                        <a href={`/posts/${post.id_post}`}>
                                          {post.titulo}
                                        </a>
                                      </h3>
                                    </div>
                                    <div class="entry-meta">
                                      <ul>
                                        <li>
                                          <a href="#">{`${post.name} ${post.surname}`}</a>
                                        </li>
                                        <li>
                                          <i class="bi-clock"></i>
                                          <a href="#">{post.date_ins_parsed}</a>
                                        </li>
                                      </ul>
                                    </div>
                                    <div class="entry-content">
                                      <p
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            post.descripcion.slice(0, 400) +
                                            '...',
                                        }}
                                      ></p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })
                        : '')}
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
