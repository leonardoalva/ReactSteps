import Card from "./Card";
import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";
import Counter from "./Counter";

function Contenedor() {
  const productos = [
    {
      id: 1,
      nombre: "Teclado Mecánico",
      precio: 89.99,
      categoria: "Tecnología",
      descripcion: "Teclado mecánico con switches Cherry MX Red",
    },
    {
      id: 2,
      nombre: "Camiseta Algodón",
      precio: 19.99,
      categoria: "Ropa",
      descripcion: "Camiseta 100% algodón de alta calidad",
    },
    {
      id: 3,
      nombre: "Smartphone XL",
      precio: 699.99,
      categoria: "Tecnología",
      descripcion: "Último modelo con cámara de 108MP",
    },
    {
      id: 4,
      nombre: "Libro de Cocina",
      precio: 24.5,
      categoria: "Libros",
      descripcion: "Recetas gourmet para principiantes",
    },
    {
      id: 5,
      nombre: "Auriculares Inalámbricos",
      precio: 129.99,
      categoria: "Tecnología",
      descripcion: "Cancelación de ruido activa",
    },
    {
      id: 6,
      nombre: "Zapatillas Running",
      precio: 75.0,
      categoria: "Deportes",
      descripcion: "Amortiguación para largas distancias",
    },
    {
      id: 7,
      nombre: "Jarrón Cerámica",
      precio: 35.25,
      categoria: "Hogar",
      descripcion: "Jarrón artesanal hecho a mano",
    },
    {
      id: 8,
      nombre: "Reloj Analógico",
      precio: 149.99,
      categoria: "Accesorios",
      descripcion: "Correa de cuero genuino",
    },
    {
      id: 9,
      nombre: "Mochila Resistente",
      precio: 59.95,
      categoria: "Accesorios",
      descripcion: "Impermeable con múltiples compartimentos",
    },
    {
      id: 10,
      nombre: "Set de Pinturas",
      precio: 42.75,
      categoria: "Arte",
      descripcion: "Incluye 24 colores profesionales",
    },
    {
      id: 11,
      nombre: "Silla Ergonómica",
      precio: 199.99,
      categoria: "Oficina",
      descripcion: "Ajuste lumbar y reposacabezas",
    },
    {
      id: 12,
      nombre: "Pantalón Vaquero",
      precio: 49.99,
      categoria: "Ropa",
      descripcion: "Corte slim fit, material elástico",
    },
    {
      id: 13,
      nombre: "Robot Aspirador",
      precio: 299.0,
      categoria: "Hogar",
      descripcion: "Programable y con app móvil",
    },
    {
      id: 14,
      nombre: "Cámara Instantánea",
      precio: 79.99,
      categoria: "Fotografía",
      descripcion: "Incluye 10 fotos de recambio",
    },
    {
      id: 15,
      nombre: "Bicicleta Montaña",
      precio: 450.0,
      categoria: "Deportes",
      descripcion: "Cuadro de aluminio, 21 velocidades",
    },
    {
      id: 16,
      nombre: "Tablet 10 pulgadas",
      precio: 229.99,
      categoria: "Tecnología",
      descripcion: "Resolución Full HD, 64GB almacenamiento",
    },
    {
      id: 17,
      nombre: "Cafetera Programable",
      precio: 65.5,
      categoria: "Hogar",
      descripcion: "Prepara hasta 12 tazas automáticamente",
    },
    {
      id: 18,
      nombre: "Rompecabezas 1000pzs",
      precio: 18.99,
      categoria: "Juguetes",
      descripcion: "Motivo paisaje urbano",
    },
    {
      id: 19,
      nombre: "Altavoz Bluetooth",
      precio: 89.95,
      categoria: "Tecnología",
      descripcion: "Resistente al agua IPX7",
    },
    {
      id: 20,
      nombre: "Maletín Profesional",
      precio: 120.0,
      categoria: "Oficina",
      descripcion: "Cuero sintético, compartimento para laptop",
    },
  ];

  console.log(productos);

  return (
    <>
      <div className="Div-Contenedor">
        {productos.map((producto) => (
          <Card
            producto={producto.nombre}
            descripcion={producto.descripcion}
            precio={producto.precio}
            categoria={producto.categoria}
            key={producto.id}
          />
        ))}
      </div>
    </>
  );
}

export default Contenedor;
