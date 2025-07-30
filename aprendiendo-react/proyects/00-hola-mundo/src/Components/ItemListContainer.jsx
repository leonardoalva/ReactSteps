import Card from "./Card";

function ItemListContainer(items) {
  return (
      <div className="Div-Contenedor">
        {items.map((item) => (
          <Card
            producto={item.title}
            descripcion={item.description}
            precio={item.price}
            categoria={item.category}
            imagen={item.thumbnail}
            key={item.id}        
          ></Card>
           
        ))}
      </div>
  );
}

export default ItemListContainer;