import React from "react";
import shopping from "../Img/shopping.jpg";
import online from "../Img/online.jpg";
function SlideShow() {
  return (
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src={shopping}
          class="d-block w-100"
          alt={shopping}
          height="550px"
        />
        <div class="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 class="card-title disply-1 fw-bolder fs-1 text-white mb-0">
              NEW SEASON ARRIVALS
            </h5>

            <p class="card-text lead fs-1 text-primary">CHECK OUT ALL TRENDS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideShow;
