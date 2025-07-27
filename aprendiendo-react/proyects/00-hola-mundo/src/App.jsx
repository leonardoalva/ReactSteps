import "./App.css";
import Contenedor from "./Contenedor";
import Nabvar from "./Navbar";
import Footer from "./Footer";


// importacion de planilla de twitter
// import TwitterFollowCard from "./TwitterFollowCard";


function App() {
  return (
    <>
      <div className="Contenedor-App">
        <Nabvar />
        <Contenedor />
      </div>
      <Footer className="footer" />
    </>
  );
}

export default App;
