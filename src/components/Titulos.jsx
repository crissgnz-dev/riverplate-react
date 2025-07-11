import "../styles/Titulos.css";
import SeccionTitulos from "./SeccionTitulos";

export default function Titulos (){
    return (
        <section className="titulos">
            <article className="filter">
                <h2 className='title-section'>Titulos</h2>
                <SeccionTitulos />
            </article>
        </section>
    )
}