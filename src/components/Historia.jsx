import { useEffect } from 'react'
import '../styles/Historia.css'

export default function Historia(){
    useEffect(() => {
        fetch('/data/riverplate-history.json')
         .then(res => res.json())
         .then(data => {
            if(window.TL) {
                new window.TL.Timeline('timeline-container', data);
            }
         });
    }, []);
    return(
        <section id='historia' className="history-section">
            <h2 className='title-section'>Historia</h2>
            <div id="timeline-container" className='timeline-river'></div>
        </section >
    )
}