import './App.css'
import Contenedor from './Contenedor';
import Nabvar from './Navbar';
import Footer from './Footer';  
import TwitterFollowCard from './TwitterFollowCard';
function App() {


  return (
<>
<div className='Contenedor-App'>
<Nabvar />
<div className='Div-Contenedor'>
  <div>
<TwitterFollowCard userName={'DonareloV'} name={'Leonardo Alva'} isFollowing/>
<TwitterFollowCard userName={'Midudev'} name={'Miguel Angel Duran'} isFollowing/>
<TwitterFollowCard userName={'PabloHidalgo'} name={'Pablo Hidalgo'} isFollowing={false}/>
  </div>
</div>
<Footer className='footer'/>
</div>
</>)}


export default App
