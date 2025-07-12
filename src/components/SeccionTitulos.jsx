import Trofeo3D from './Trofeo3d'

import "../styles/SeccionTitulos.css"


const titulosInternacionales = [
    {nombre: "Libertadores" ,year: "2018, 2015, 1996, 1986", path: "/models/libertadores.glb", key: 1},
    {nombre: "Sudamericana" ,year: "2014", path: "/models/sudamericana.glb", key: 2},
    {nombre: "Recopa Sudamericana" ,year: "2019, 2016, 2015", path: "/models/recopa-sudamericana.glb", key: 3},
    {nombre: "Intercontinental" ,year: "1986", path: "/models/intercontinental.glb", key: 4},
    {nombre: "Suruga Bank" ,year: "2015", path: "/models/suruga-bank.glb", key: 5},
    {nombre: "Interamericana" ,year: "1987", path: "/models/mate.glb", key: 6},
    {nombre: "Supercopa" ,year: "1997", path: "/models/mate.glb", key: 7},
    {nombre: "Cup Tie Competition" ,year: "1914", path: "/models/mate.glb", key: 8},
    {nombre: "Copa Aldao" ,year: "1947, 1945, 1941, 1937, 1936", path: "/models/mate.glb", key: 9},
]

const titulosNacionales = [
    {nombre: "Primera Division" ,year: "2023, 2021, 2014, 2008, 2004, 2003, 2002, 2000, 1999, 1997, 1997, 1996, 1994, 1993, 1991, 1989/90, 1985/86, 1981, 1980, 1979, 1979, 1977, 1975, 1975, 1957, 1956, 1955, 1953, 1952, 1947, 1945, 1942, 1941, 1937, 1936, 1936, 1932, 1920", path: "/models/mate.glb", key: 1},
    {nombre: "Copa Argentina" ,year: "2019, 2017, 2016", path: "/models/mate.glb", key: 2},
    {nombre: "Supercopa Argentina" ,year: "2023, 2020, 2018", path: "/models/mate.glb", key: 3},
    {nombre: "Trofeo de Campeones" ,year: "2023, 2021", path: "/models/mate.glb", key: 4},
    {nombre: "Copa Campeonato" ,year: "2014", path: "/models/mate.glb", key: 5},
    {nombre: "Copa Carlos Ibarguren" ,year: "1952, 1942, 1941, 1937", path: "/models/mate.glb", key: 5},
    {nombre: "Copa Adrián Escobar" ,year: "1941", path: "/models/mate.glb", key: 5},
    {nombre: "Copa Competencia Liga Argentina" ,year: "1932", path: "/models/mate.glb", key: 5},
    {nombre: "Copa Competencia Jockey Club" ,year: "1914", path: "/models/mate.glb", key: 5},
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
                <div>
                  <p style={{fontFamily: "var(--fuente-titulo)", fontSize: "1.8em", color: "var(--color-negro)"}}>{trofeo.nombre}</p>
                  <p style={{color: "#777777"}}>{trofeo.year}</p>
                </div>
              </div>
            ))}
        </div>
        
        <h2 style={{marginTop: 55}} >52x Titulos Nacionales</h2>
        <div className="grid">
            {titulosNacionales.map((trofeo) => (
              <div
               key={trofeo.i} 
               className='trofeo-wrapper'
              >
                <Trofeo3D modelPath={trofeo.path} />
                <div>
                  <p style={{fontFamily: "var(--fuente-titulo)", fontSize: "1.8em", color: "var(--color-negro)"}}>{trofeo.nombre}</p>
                  <p style={{color: "#777777", width: '200px'}}>{trofeo.year}</p>
                </div>
              </div>
            ))}
        </div>
    </div>
   ) 
}