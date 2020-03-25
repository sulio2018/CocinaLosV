import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
// import ImgComp from "./ImgComp";
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";
import img5 from "../../images/img5.jpg";
import img6 from "../../images/img6.jpg";
import img7 from "../../images/img7.jpg";
import "./style.css";


function SlideCarousel() {
    return (

        <div className='container'>
            <Carousel>
                <div>
                    <img src={img1} alt="img1" />
                    <h2 className="legend">Consomé</h2>
                </div>

                <div>
                    <img src={img2} alt="img2" />
                    <h2 className="legend">Birria Ramen</h2>
                </div>

                <div>
                    <img src={img3} alt="img3" />
                    <h2 className="legend">Taco paired with Consomé</h2>
                </div>

                <div>
                    <img src={img4} alt="img4" />
                    <h2 className="legend">Dorados</h2>
                </div>

                <div>
                    <img src={img5} alt="img5" />
                    <h2 className="legend">Birria Burrito</h2>
                </div>

                <div>
                    <img src={img6} alt="img6" />
                    <h2 className="legend">Vampiro</h2>
                </div>

                <div>
                    <img src={img7} alt="img7" />
                    <h2 className="legend">Quesabirria</h2>
                </div>

            </Carousel>
        </div>
    );

}

export default SlideCarousel;