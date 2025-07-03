import './styles/App.css'
import { FaChevronDown } from "react-icons/fa6";

function App() {

  return (
    <>
      <main >
         <header>
          <a href='#' className='container'>
            <div className='icono'><img src="/riverplate.svg" alt="River Plate Logo" className="logo" /></div>
            <h1 className="title">River Plate</h1>
          </a>
          <a href='#' className='arrow'>
            <FaChevronDown color='#fff' size={'2em'}/>
          </a>
        </header>
      </main>
      <main></main>
    </>
  )
}

export default App
