import Products from "./Products";
import ProductDetail from "./ProductDetail";
//import { createHashRouter, Link, RouterProvider } from 'react-router-dom';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React from "react";
export default function App() {

    //Render Add Product Form
    return (
        
            <div>
            <h1>Fashion Store</h1>
            <Products/>
            {/*<ProductDetail/>*/}
            </div>
        
        )  
}
{/*<Router>
      <Switch>
        <Route exact path="/products" component={ProductList} />
        <Route path="/products/:id" component={ProductDetail} />
      </Switch>
</Router>*/}