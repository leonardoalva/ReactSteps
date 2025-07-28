import Card from "./Card";
import "./App.css";
import { useState, useEffect} from "react";

function Contenedor() {
  const [items, setItems] = useState([]);


  useEffect(() => {
  fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data => {
      console.log(data);  // Primero imprimes
      setItems(data.products);  // Luego actualizas el estado
    });
}, []);

  return (
    <>
      <div className="Div-Contenedor">
        {items.map((item) => (
          <Card
            producto={item.title}
            descripcion={item.description}
            precio={item.price}
            categoria={item.category}
            imagen={item.images}
            key={item.id}
          />
        ))}
      </div>
    </>
  );
}

export default Contenedor;
