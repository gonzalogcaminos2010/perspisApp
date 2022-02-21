import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { getProductsApi, getProductDetailsByUrlApi, getDetails } from "../api/productos";
import ProductosList from "../components/ProductosList";


export default function HomeScreen() {

    const [productos, setProducts] = useState([]);
    const [nextUrl, setNextUrl] = useState(null);
  
    useEffect(() => {
      (async () => {
        await loadProducts();
      })();
    }, []);

  const loadProducts = async () => {
    try {
        const response = await getProductsApi(nextUrl);
        setNextUrl(response.next);
  
        const productsArray = [];
        for await (const producto of response.results) {
          const productDetails = await getProductDetailsByUrlApi(producto.url);
  
          productsArray.push({
            id: productDetails.id,
            nombre: productDetails.nombre,
            
          });
        }
  
        setProducts([...productos, ...productsArray]);
      } catch (error) {
        console.error(error);
      }
    };
  

  return (
    <SafeAreaView>
      <ProductosList productos={productos} />
    </SafeAreaView>
  );
}

