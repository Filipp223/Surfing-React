import Gallery from "./Gallery.jsx";
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
            <Gallery/>

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