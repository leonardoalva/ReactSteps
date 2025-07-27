

function Card({producto,descripcion,precio,categoria}) {
  return (
    <>
<article className="Card-Size"> 
  <header>
    <h1 className="Card-Title">{producto}</h1>
    <h5 className="Card-p">{categoria}</h5>
    <p className="Card-Texto">{descripcion}</p>
    <p className="Card-Precio">$ {precio}</p>
  </header>
  <button>
    agregar al carrito
  </button>
</article>

</>
    );
}
export default Card