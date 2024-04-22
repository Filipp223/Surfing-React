import Gallery from "./Gallery.jsx";
import Cards from "./Cards.jsx"
import "./css/cards/cards.css";
import "./css/speech/speech.css";
import "./css/gallery/gallery.css";

function Main() {
    return (
        <main>
            <Gallery/>

            <Cards/>

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