import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Counter from "./Counter"

function ItemDetailContainer() {
  const [detail, setDetail] = useState();

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, [id]);

  return (
    <div className="Div-Contenedor  Card-Size">
      <p>{detail?.title}</p>
      <p>{detail?.description}</p>
        <img className="Card-Img" src={detail?.thumbnail} alt="imagen rota" />
      <Counter/>
    </div>
  );
}

export default ItemDetailContainer;
