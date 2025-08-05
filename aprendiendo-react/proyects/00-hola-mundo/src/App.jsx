import "./App.css";
import ContenedorCards from "./Components/ContenedorCards";
import Nabvar from "./Components/Navbar";
import Footer from "./Components/Footer";
import TwitterFollowCard from "./Components/TwitterFollowCard";
import { withLoading } from "./Hocs/withLoading";
import { useEffect, useState } from "react";

const ContenedorCardsWithLoading = withLoading(ContenedorCards);

// importacion de planilla de twitter
// import TwitterFollowCard from "./TwitterFollowCard";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);  // Primero imprimes
        setTimeout(() => {
          setItems(data.products); // Luego imprimes los productos
        }, 2000); // Simula un retraso de 2 segundos
      });
  }, []);

  // Datos de ejemplo para los usuarios de Twitter
  // const users = [
  //   {
  //     name: "Elon Musk",
  //     userName: "elonmusk",
  //     isFollowing: false,
  //   },
  //   {
  //     name: "Bill Gates",
  //     userName: "BillGates",
  //     isFollowing: true,
  //   },
  //   {
  //     name: "Jeff Bezos",
  //     userName: "JeffBezos",
  //     isFollowing: false,
  //   },
  //   {
  //     name: "Mark Zuckerberg",
  //     userName: "finkd",
  //     isFollowing: true,
  //   },
  //   {
  //     name: "Satya Nadella",
  //     userName: "satyanadella",
  //     isFollowing: false,
  //   },
  //   {
  //     name: "Tim Cook",
  //     userName: "tim_cook",
  //     isFollowing: false,
  //   },
  // ];

  // Mapeamos los usuarios para crear un array de componentes TwitterFollowCard
  // const usuarios = users.map((user) => (
  //       <TwitterFollowCard
  //         key={user.userName}
  //         name={user.name}
  //         userName={user.userName}
  //         isFollowing={user.isFollowing}
  //       />))

  return (
    <>
      <div className="Contenedor-App">
        {/* <Nabvar /> */}
        <TwitterFollowCard
          name="Elon Musk"
          userName="elonmusk"
        />

        <TwitterFollowCard
          name="Bill Gates"
          userName="BillGates"

        />

        <TwitterFollowCard/>

        {/* <ContenedorCardsWithLoading items={items} /> */}
        {/* usuarios pasados por props */}
        {/* {usuarios} */}
      </div>

      <Footer className="footer" />
    </>
  );
}

export default App;
