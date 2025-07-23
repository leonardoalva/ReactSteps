import './App.css'
import Contenedor from './Contenedor';
import Nabvar from './Navbar';
import Footer from './Footer';  
function App() {


  return (
<>
<div className='Contenedor-App'>
<Nabvar />
<Contenedor />
</div>
<Footer className='footer'/>
</>
  )
}

export default App
