import React from "react";
import styles from "./Carousel.module.css";
import { Box } from "@chakra-ui/react";
import {AiOutlineLeftCircle, AiOutlineRightCircle} from 'react-icons/ai'
import testimonial1 from '../../../../assets/testimonial1.png'
import testimonial2 from '../../../../assets/testimonial2.png'

export default function Carousel() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Box
                pos={'relative'}
              id="carouselExampleIndicators2"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-md-4 mb-3">
                        <img
                          className="img-fluid"
                          alt="100%x280"
                          src={testimonial1}
                        />
                    </div>
                    <div className={`col-md-4 mb-3 ${styles.testimonialCard}`}>
                        <img
                          className="img-fluid"
                          alt="100%x280"
                          src={testimonial2}
                        />
                    </div>
                    <div className={`col-md-4 mb-3 ${styles.testimonialCard}`}>
                        <img
                          className="img-fluid"
                          alt="100%x280"
                          src={testimonial2}
                        />
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-4 mb-3">
                        <img
                          className="img-fluid"
                          alt="100%x280"
                          src={testimonial1}
                        />
                    </div>
                    <div className={`col-md-4 mb-3 ${styles.testimonialCard}`}>
                        <img
                          className="img-fluid"
                          alt="100%x280"
                          src={testimonial2}
                        />
                    </div>
                    <div className={`col-md-4 mb-3 ${styles.testimonialCard}`}>
                        <img
                          className="img-fluid"
                          alt="100%x280"
                          src={testimonial2}
                        />
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-4 mb-3">
                        <img
                          className="img-fluid"
                          alt="100%x280"
                          src={testimonial1}
                        />
                    </div>
                    <div className={`col-md-4 mb-3 ${styles.testimonialCard}`}>
                        <img
                          className="img-fluid"
                          alt="100%x280"
                          src={testimonial2}
                        />
                    </div>
                    <div className={`col-md-4 mb-3 ${styles.testimonialCard}`}>
                        <img
                          className="img-fluid"
                          alt="100%x280"
                          src={testimonial2}
                        />
                    </div>
                  </div>
                </div>
              </div>
              <Box>
                <button
                  className={`carousel-control-prev ${styles.slideBtn1}`}
                  type="button"
                  data-target="#carouselExampleIndicators2"
                  data-slide="prev"
                  style={{position: 'absolute', left: '-4.3rem'}}
                >
                  <AiOutlineLeftCircle
                    // className="carousel-control-prev-icon"
                    aria-hidden="true"
                    size={40}
                    color="#5B4899"
                  />
                  <span className="sr-only">Previous</span>
                </button>
                <button
                  className={`carousel-control-next ${styles.slideBtn2}`}
                  type="button"
                  data-target="#carouselExampleIndicators2"
                  data-slide="next"
                  style={{position: 'absolute', right: '-4.3rem'}}
                >
                  <AiOutlineRightCircle
                    // className="carousel-control-next-icon"
                    aria-hidden="true"
                    size={40}
                    color="#5B4899"
                  />
                  <span className="sr-only">Next</span>
                </button>
              </Box>
            </Box>
          </div>
        </div>
      </div>
    </section>
  );
}
