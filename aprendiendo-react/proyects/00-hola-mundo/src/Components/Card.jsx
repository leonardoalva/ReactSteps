import { useNavigate } from "react-router";
import CartWidget from './CartWidget'
import Counter from "./Counter";

function Card({ producto, descripcion, precio, categoria, imagen, id }) {
  const navigate = useNavigate();
  // Crear un objeto item con los datos del producto
  const item = {
    title: producto,
    description: descripcion,
    price: precio,
    category: categoria,
    thumbnail: imagen,
    id: id
  };

  return (
    <>
      <article className="Card-Size">
        <header>
          <img className="Card-Img" src={imagen} alt="imagen rota" />
          <h1 className="Card-Title">{producto}</h1>
          <h5 className="Card-Description">{descripcion}</h5>
          <h5 className="Card-Categoria">{categoria}</h5>
          <p className="Card-Texto">{precio}</p>
        </header>
        <button
        variant="primary"
        onClick={() => navigate(`/item/${id}`)}>
          ver mas
        </button>
        <Counter item={item}/>
      </article>
    </>
  );
}
export default Card;
