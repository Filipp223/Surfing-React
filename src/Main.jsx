import "./css/cards/cards.css";
import "./css/speech/speech.css";
import "./css/gallery/gallery.css";

function Main() {
    return (
        <main>
            <section className="gallery container">
                <div className="gallery__content">
                    <img src="images/s1p1.png" alt="Surfer on a wave" className="gallery__item"/>
                    <img src="images/s1p2.png" alt="Dog on the board" className="gallery__item"/>
                    <img src="images/s1p3.png" alt="Surfer on a wave" className="gallery__item"/>
                    <img src="images/s1p4.png" alt="Surfer on a wave" className="gallery__item"/>
                    <img src="images/s1p5.png" alt="Surfboards" className="gallery__item"/>
                    <img src="images/s1p6.png" alt="Surfer on a wave" className="gallery__item"/>
                    <img src="images/s1p7.png" alt="Surfer on a wave" className="gallery__item"/>
                    <img src="images/s1p8.png" alt="Surfer on the beach" className="gallery__item"/>
                    <img src="images/s1p9.png" alt="Surfer on the beach" className="gallery__item"/>
                </div>
            </section>


            <section className="cards container">
                <div className="cards__grid">
                    <div className="cards__item card1">
                        <img src="images/s2p1.png" alt="A picture of an airplane flying away"/>
                        <p>Travel</p>
                    </div>
                    <div className="cards__item card2">
                        <img src="images/s2p2.png" alt="Surfboards picture"/>
                        <p>Buy with us</p>
                    </div>
                    <div className="cards__item card3">
                        <img src="images/s2p3.png" alt="A picture of the training process"/>
                        <p>Work out with a trainer</p>
                    </div>
                    <div className="cards__item card4">
                        <img src="images/s2p4.png" alt="Surfer on a wave"/>
                        <p>Enjoy</p>
                    </div>
                    <div className="cards__item card5">
                        <img src="images/s2p5.png" alt="Beach image"/>
                        <p>The best beaches</p>
                    </div>
                    <div className="cards__item card6">
                        <img src="images/s2p6.png" alt="Surfer conquering a wave"/>
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