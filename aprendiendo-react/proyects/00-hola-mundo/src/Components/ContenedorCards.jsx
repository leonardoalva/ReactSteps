import Card from "./Card";
import "../App.css";

function ContenedorCards(props) {

  return (
    <>
      <div className="Div-Contenedor">
        {props.items.map((item) => (
          <Card item={props}
            producto={item.title}
            descripcion={item.description}
            precio={item.price}
            categoria={item.category}
            imagen={item.thumbnail}
            key={item.id}
            id={item.id}        
          ></Card>
           
        ))}
      </div>
    </>
  );
}

export default ContenedorCards
