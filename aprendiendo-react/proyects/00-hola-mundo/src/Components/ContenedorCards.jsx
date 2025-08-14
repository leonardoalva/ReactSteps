import Card from "./Card";
import "../App.css";

function ContenedorCards(props) {

  return (
    <>
      <div className="Div-Contenedor">
        {props.items.map((item) => (
          <Card className="Card" item={props}
            producto={item.nombre}
            descripcion={item.descripcion}
            precio={item.precio}
            categoria={item.categoria}
            imagen={item.imagen}
            key={item.id}
            id={item.id}        
          ></Card>
           
        ))}
      </div>
    </>
  );
}

export default ContenedorCards
