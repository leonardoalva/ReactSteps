import Card from "./Card";
import "../App.css";
import { useEffect, useState } from "react";
import { withLoading } from "../Hocs/withLoading";

const CardWithLoading = withLoading(Card);

function ContenedorCards() {
  const [items, setItems] = useState([]);


  useEffect(() => {
  fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data => {
      // console.log(data);  // Primero imprimes
      setItems(data.products);  // Luego actualizas el estado
    });
}, []);

  return (
    <>
      <div className="Div-Contenedor">
        {items.map((item) => (
          <CardWithLoading
            producto={item.title}
            descripcion={item.description}
            precio={item.price}
            categoria={item.category}
            imagen={item.thumbnail}
            key={item.id}        
          ></CardWithLoading>
           
        ))}
      </div>
    </>
  );
}

export default ContenedorCards;
