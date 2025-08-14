import "./App.css";
import ContenedorCards from "./Components/ContenedorCards";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import TwitterFollowCard from "./Components/TwitterFollowCard";
import { withLoading } from "./Hocs/withLoading";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import CategoryPage from "./Components/CategoryPage";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import CartWidget from "./Components/CartWidget";
import { getProducts } from "./firebase/db";

const ContenedorCardsWithLoading = withLoading(ContenedorCards);

// importacion de planilla de twitter
// import TwitterFollowCard from "./TwitterFollowCard";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
      getProducts()
        .then(products => setItems(products))

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
      <BrowserRouter>
        <div className="Contenedor-App">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<ContenedorCardsWithLoading items={items} />}
            />
            <Route path="/nosotros" element={<div>nosotros</div>} />

            <Route path="/como_comprar" element={<div>como comprar</div>} />
<Route
  path="/category/:categoryName"
  element={<CategoryPage />}
/>
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
        </div>

        <Footer className="footer" />
      </BrowserRouter>
    </>
  );
}

export default App;
