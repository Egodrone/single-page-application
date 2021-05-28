import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import api from "../api/contacts";
import "./App.css";
import Header from "./Header";
import AddProduct from "./AddProduct";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import EditProduct from "./EditProduct";
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  const [products, setProducts] = useState([]);

  const retrieveProducts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  const addProductHandler = async (product) => {
    //console.log(product);
    const request = {
      id: uuid(),
      ...product,
    };

    const response = await api.post("/contacts", request);
    //console.log(response);
    setProducts([...products, response.data]);
  };

  const updateProductHandler = async (product) => {
    const response = await api.put(`/contacts/${product.id}`, product);
    const { id } = response.data;
    setProducts(
      products.map((product) => {
        return product.id === id ? { ...response.data } : product;
      })
    );
  };

  const removeProductHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newProductList = products.filter((product) => {
      return product.id !== id;
    });

    setProducts(newProductList);
  };

  useEffect(() => {
    const getAllProducts = async () => {
      const allProducts = await retrieveProducts();
      if (allProducts) setProducts(allProducts);
    };

    getAllProducts();
  }, []);

  useEffect(() => {
  }, [products]);

  return (
    <div className="container">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <ProductList
                {...props}
                contacts={products}
                getContactId={removeProductHandler}
              />
            )}
          />

          <Route
            path="/add"
            render={(props) => (
              <AddProduct {...props} addProductHandler={addProductHandler} />
            )}
          />

          <Route
            path="/edit"
            render={(props) => (
              <EditProduct
                {...props}
                updateProductHandler={updateProductHandler}
              />
            )}
          />

          <Route path="/contact/:id" component={ProductDetails} />
        </Switch>
      </Router>
    </div>
  );
}


export default App;
