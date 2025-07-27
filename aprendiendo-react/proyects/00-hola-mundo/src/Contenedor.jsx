import Card from "./Card";
import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";
import Counter from "./Counter";

function Contenedor() {
  return (
    <>
      <div className="Div-Contenedor">
        {/* <Counter />
    <TwitterFollowCard 
      userName="midudev" 
      name="Miguel Angel Durán" 
      isFollowing={true}/> */}

        <Card
          producto="Titulo1"
          descripcion="esto es una descripcion"
          precio="este es el precio"
        />

        <Card
          producto="Titulo2"
          descripcion="esto es una descripcion"
          precio="este es el precio"
        />

        <Card
          producto="Titulo3"
          descripcion="esto es una descripcion"
          precio="este es el precio"
        />
      </div>
    </>
  );
}

export default Contenedor;
