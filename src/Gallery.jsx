import images1p1 from "./images/s1p1.png";
import images1p2 from "./images/s1p2.png";
import images1p3 from "./images/s1p3.png";
import images1p4 from "./images/s1p4.png";
import images1p5 from "./images/s1p5.png";
import images1p6 from "./images/s1p6.png";
import images1p7 from "./images/s1p7.png";
import images1p8 from "./images/s1p8.png";
import images1p9 from "./images/s1p9.png";

function Gallery() {
    return (
        <section className="gallery container">
                <div className="gallery__content">
                    <img src={images1p1} alt="Surfer on a wave" className="gallery__item"/>
                    <img src={images1p2} alt="Dog on the board" className="gallery__item"/>
                    <img src={images1p3} alt="Surfer on a wave" className="gallery__item"/>
                    <img src={images1p4} alt="Surfer on a wave" className="gallery__item"/>
                    <img src={images1p5} alt="Surfboards" className="gallery__item"/>
                    <img src={images1p6} alt="Surfer on a wave" className="gallery__item"/>
                    <img src={images1p7} alt="Surfer on a wave" className="gallery__item"/>
                    <img src={images1p8} alt="Surfer on the beach" className="gallery__item"/>
                    <img src={images1p9} alt="Surfer on the beach" className="gallery__item"/>
                </div>
            </section>
    )
}

export default Gallery;