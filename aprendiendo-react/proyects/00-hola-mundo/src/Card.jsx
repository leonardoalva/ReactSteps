

function Card({producto,descripcion,precio,categoria,imagen}) {
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
  <button>
    agregar al carrito
  </button>
</article>

</>
    );
}
export default Card