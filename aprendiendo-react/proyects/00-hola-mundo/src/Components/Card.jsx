import { useNavigate } from 'react-router';
import CartWidget from './CartWidget'
import Counter from "./Counter";

function Card({ producto, descripcion, precio, categoria, imagen, id }) {
  const navigate = useNavigate()
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
        <div className="Contenedor-Cards">
          <h5 className="Card-Categoria">{categoria}</h5>
          <img className="Card-Img" src={imagen} alt="imagen rota" />
          <h1 className="Card-Title">{producto}</h1>
          <div className="Card-Description">{descripcion}</div>
          <h1 className="Card-Precio">${precio}</h1>
        </div>
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
