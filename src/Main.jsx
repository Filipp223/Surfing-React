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

            <Speech/>
        </main>
    )
}

export default Main;