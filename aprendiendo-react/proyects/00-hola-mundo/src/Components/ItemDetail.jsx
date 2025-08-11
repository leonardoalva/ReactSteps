import Counter from "./Counter";

function ItemDetail({ detail }) {
  return (
    <div className="Div-Contenedor  Card-Size">
      <p>{detail?.title}</p>
      <p>{detail?.description}</p>
      <img className="Card-Img" src={detail?.thumbnail} alt="imagen rota" />
      <Counter />
    </div>
  );
}

export default ItemDetail;
