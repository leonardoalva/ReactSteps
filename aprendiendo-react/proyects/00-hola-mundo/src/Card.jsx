

function Card({producto,descripcion,precio,categoria}) {
  return (
    <>
<article className="Card-Size"> 
  <header>
    <h1 className="Card-Title">{producto}</h1>
    <p className="Card-p">{categoria}</p>
    <h3 className="Card-Texto">{descripcion}</h3>
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