import React from 'react'


import img1 from '../../assets/image/navbar/image1.jpeg'
import image2 from '../../assets/image/navbar/image2.jpeg'
import image3 from '../../assets/image/navbar/image3.jpeg'
import image4 from '../../assets/image/navbar/image4.jpeg'
import image5 from '../../assets/image/navbar/image5.jpeg'
import image6 from '../../assets/image/navbar/image6.jpeg'
import image7 from '../../assets/image/navbar/image7.jpeg'


const BannerTop = () => {
  return (
    <div>
          <div id="slider">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="4"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="5"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="6"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div id="over" class="carousel-item active">
              <img src={img1} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block" id="text">
                <div class="imgb">
                  <h5 class="h5text">
                    Scrumptious Croutons, 20% Off - Croutons Cafe
                  </h5>
                </div>
              </div>
            </div>
  
            <div id="over" class="carousel-item">
              <img src={image2} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block" id="text">
                <div class="imgb">
                  <h5 class="h5text">
                    Flavours around the World, 20% Off - The Black Cat Cafe
                  </h5>
                </div>
              </div>
            </div>
            <div id="over" class="carousel-item">
              <img src={image3 } class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block" id="text">
                <h5>Vegan Ice-Cream Indulgence,15% Off - Negative 12 Degrees</h5>
              </div>
            </div>
            <div id="over" class="carousel-item">
              <img src={image4} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block" id="text">
                <h5>Tasty,Joyful Moments,10% Off - Moments of Joy</h5>
              </div>
            </div>
            <div id="over" class="carousel-item">
              <img src={image5} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block"  id = "text2" >
                <h5 >Rawsome Lifestyle,20% Off - Rawsome</h5>
              </div>
            </div>
            <div id="over" class="carousel-item">
              <img src={image6} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block" id="text">
                <h5>Japanese Vegan Fest,10% Off - Supe Vegan </h5>
              </div>
            </div>
            <div id="over" class="carousel-item">
              <img src={image7} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block" id="text">
                <h5>Authentic Italian Indulgence,15% Off - The Italian Job</h5>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>

  


  
  )
}

export default BannerTop