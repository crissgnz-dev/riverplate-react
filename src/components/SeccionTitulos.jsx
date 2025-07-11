import Trofeo3D from './Trofeo3d'

import "../styles/SeccionTitulos.css"


const titulosInternacionales = [
    {nombre: "Libertadores" ,year: "2018, 2015, 1996, 1986", path: "/models/libertadores.glb", key: 1},
    {nombre: "Sudamericana" ,year: "2014", path: "/models/sudamericana.glb", key: 2},
    {nombre: "Recopa Sudamericana" ,year: "2019, 2016, 2015", path: "/models/recopa-sudamericana.glb", key: 3},
    {nombre: "Intercontinental" ,year: "1986", path: "/models/intercontinental.glb", key: 4},
    {nombre: "Suruga Bank" ,year: "2015", path: "/models/suruga-bank.glb", key: 5},

]

export default function SeccionTitulos (){

   return (
    <div className='titulos-container'>
        <h2>18x Titulos Internacionales</h2>
        <div className="grid">
            {titulosInternacionales.map((trofeo) => (
              <div
               key={trofeo.i} 
               className='trofeo-wrapper'
              >
                <Trofeo3D modelPath={trofeo.path} />
                <p style={{fontFamily: "var(--fuente-titulo)", fontSize: "1.5em", color: "var(--color-negro)"}}>{trofeo.nombre}</p>
                <p style={{color: "#777777"}}>{trofeo.year}</p>
              </div>
            ))}
        </div>
    </div>
   ) 
}