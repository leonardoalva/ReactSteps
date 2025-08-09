import { useParams } from "react-router";
import { useEffect,useState } from "react";
import ContenedorCards from "./ContenedorCards";

function CategoryPage() {
  const { categoryName } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${categoryName}`)
      .then(res => res.json())
      .then(data => setItems(data.products));
  }, [categoryName]);

  return <ContenedorCards items={items} />;
}
export default CategoryPage; 