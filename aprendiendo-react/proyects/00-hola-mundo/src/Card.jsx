function Card({producto,descripcion,precio}) {
  return (
    <>
<article> 
  <header>
    <h1 className="Card-Title">{producto}</h1>
    <h3 className="Card-Texto">{descripcion}</h3>
    <p className="Card-Precio">{precio}</p>
  </header>
</article>

</>
    );
}
export default Card