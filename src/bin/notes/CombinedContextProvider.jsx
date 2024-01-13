// CombinedContextProvider.js
import React from "react";
import { ProductsProvider } from "./ProductsContext";
import { BlogsProvider } from "./BlogsContext";
import { CartProvider } from "./CartContext";

const CombinedContextProvider = ({ children }) => {
  return (
    <ProductsProvider>
      <BlogsProvider>
        <CartProvider>{children}</CartProvider>
      </BlogsProvider>
    </ProductsProvider>
  );
};

export default CombinedContextProvider;
