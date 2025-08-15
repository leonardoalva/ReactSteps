import Counter from "./Counter";

function ItemDetail({ detail }) {

  return (
    <div className="Div-Contenedor  Card-Size">
      <p>{detail?.nombre}</p>
      <p>{detail?.descripcion}</p>
      <img className="Card-Img" src={detail?.imagen} alt="imagen rota" />
      <Counter item={detail}/>
    </div>
  );
}

export default ItemDetail;
