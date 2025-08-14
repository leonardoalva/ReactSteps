import { useParams } from "react-router";
import { useEffect, useState } from "react";
import ContenedorCards from "./ContenedorCards";
import { getProductsByCategory } from "../firebase/db";

function CategoryPage() {
  const { categoryName } = useParams();
  const [categoryItems, setCategoryItems] = useState([]);

  useEffect(() => {
    getProductsByCategory(categoryName)
      .then(products => setCategoryItems(products))
      .catch(error => console.error("Error fetching products by category:", error));
  }, [categoryName]);

  return <ContenedorCards items={categoryItems} />;
}

export default CategoryPage;