import Counter from "./Counter";

function ItemDetail({ detail }) {
  const item = {
    title: detail?.producto,
    description: detail?.descripcion,
    price: detail?.precio,
    category: detail?.categoria,
    thumbnail: detail?.imagen,
    id: detail?.id
  };

  return (
    <div className="Div-Contenedor  Card-Size">
      <p>{detail?.title}</p>
      <p>{detail?.description}</p>
      <img className="Card-Img" src={detail?.thumbnail} alt="imagen rota" />
      <Counter item={item}/>
    </div>
  );
}

export default ItemDetail;
