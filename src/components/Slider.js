

import './Slider.css'

function Slider() {
  return (
    <>
      <div id="carouselExample" 
      class="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://tse2.mm.bing.net/th?id=OIP.UwDoBLIqkWkWpp3rHDxwPQHaEK&pid=Api&P=0&h=220" class="d-block w-100 height-500" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.wallpapersafari.com/26/69/FCi5yH.png" class="d-block w-100 height-500" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://tse3.mm.bing.net/th?id=OIP.vvAU5JMnHMprryH8gV_lHwHaFj&pid=Api&P=0&h=220" class="d-block w-100 height-500" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" 
  type="button" 
  data-bs-target="#carouselExample" 
  data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</>
  );
}

export default Slider;