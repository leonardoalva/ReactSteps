import Card from './Card';
import './App.css';
import TwitterFollowCard from './TwitterFollowCard';
function Contenedor() {
  return (
<>
<div className='Div-Contenedor'>
    <div>      
    <TwitterFollowCard userName="DonareloV" name="Leonardo Alva" isFollowing/>
    <TwitterFollowCard userName="midudev" name="Miguel Angel" isFollowing />
    <TwitterFollowCard userName="elonmusk" name="Elon Musk" isFollowing />
    <TwitterFollowCard userName="jack" name="Jack Dorsey" />
    <TwitterFollowCard userName="billgates" name="Bill Gates" />
    </div>

    <Card producto="Titulo1" descripcion="esto es una descripcion" precio="este es el precio"/>
    <Card producto="Titulo2" descripcion="esto es una descripcion" precio="este es el precio"/>
    <Card producto="Titulo3" descripcion="esto es una descripcion" precio="este es el precio"/>
</div>

</>
  );
}

export default Contenedor;
