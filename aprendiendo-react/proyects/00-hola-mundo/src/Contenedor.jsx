import Card from './Card';
import './App.css';

function Contenedor() {
  return (
<>
<div className='Div-Contenedor'>
    <Card producto="Titulo1" descripcion="esto es una descripcion" precio="este es el precio"/>
    <Card producto="Titulo2" descripcion="esto es una descripcion" precio="este es el precio"/>
    <Card producto="Titulo3" descripcion="esto es una descripcion" precio="este es el precio"/>
    <Card producto="Titulo4" descripcion="esto es una descripcion" precio="este es el precio"/>
    <Card producto="Titulo5" descripcion="esto es una descripcion" precio="este es el precio"/>
    <Card producto="Titulo6" descripcion="esto es una descripcion" precio="este es el precio"/>
        <Card producto="Titulo1" descripcion="esto es una descripcion" precio="este es el precio"/>
    <Card producto="Titulo2" descripcion="esto es una descripcion" precio="este es el precio"/>
    <Card producto="Titulo3" descripcion="esto es una descripcion" precio="este es el precio"/>
    <Card producto="Titulo4" descripcion="esto es una descripcion" precio="este es el precio"/>
    <Card producto="Titulo5" descripcion="esto es una descripcion" precio="este es el precio"/>
    <Card producto="Titulo6" descripcion="esto es una descripcion" precio="este es el precio"/>
</div>

</>
  );
}

export default Contenedor;
