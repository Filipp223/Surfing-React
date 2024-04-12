import images1p1 from "./images/s1p1.png";
import images1p2 from "./images/s1p2.png";
import images1p3 from "./images/s1p3.png";
import images1p4 from "./images/s1p4.png";
import images1p5 from "./images/s1p5.png";
import images1p6 from "./images/s1p6.png";
import images1p7 from "./images/s1p7.png";
import images1p8 from "./images/s1p8.png";
import images1p9 from "./images/s1p9.png";
import images2p1 from "./images/s2p1.png";
import images2p2 from "./images/s2p2.png";
import images2p3 from "./images/s2p3.png";
import images2p4 from "./images/s2p4.png";
import images2p5 from "./images/s2p5.png";
import images2p6 from "./images/s2p6.png";
import "./css/cards/cards.css";
import "./css/speech/speech.css";
import "./css/gallery/gallery.css";

function Main() {
    return (
        <main>
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


            <section className="cards container">
                <div className="cards__grid">
                    <div className="cards__item card1">
                        <img src={images2p1} alt="A picture of an airplane flying away"/>
                        <p>Travel</p>
                    </div>
                    <div className="cards__item card2">
                        <img src={images2p2} alt="Surfboards picture"/>
                        <p>Buy with us</p>
                    </div>
                    <div className="cards__item card3">
                        <img src={images2p3} alt="A picture of the training process"/>
                        <p>Work out with a trainer</p>
                    </div>
                    <div className="cards__item card4">
                        <img src={images2p4} alt="Surfer on a wave"/>
                        <p>Enjoy</p>
                    </div>
                    <div className="cards__item card5">
                        <img src={images2p5} alt="Beach image"/>
                        <p>The best beaches</p>
                    </div>
                    <div className="cards__item card6">
                        <img src={images2p6} alt="Surfer conquering a wave"/>
                        <p>Improve your skills</p>
                    </div>
                </div>
            </section>


            <section className="speech container">
                <div className="speech__content">
                    <div className="speech__item"></div>
                    <div className="speech__item"></div>
                    <div className="speech__item"></div>
                    <div className="speech__item"></div>
                </div>
            </section>
        </main>
    )
}

export default Main;