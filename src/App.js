import { useDeferredValue, useEffect, useState, useTransition } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Cart from "./components/Cart";
import data from "./data.js";

function App() {

  const [ cartItems, setCartItems ] = useState([]);
  const { products } = data;
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      const newCartItems = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      )
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems))
    } else {
      const newCartItems = [...cartItems, { ...product, qty: 1 }]
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems))
    }
  };
  
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      const newCartItems = cartItems.filter((x) => x.id !== product.id)
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems))
    } else {
      const newCartItems = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
      )
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems))
    }
  };

  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      setCartItems(localStorage.getItem('cartItems') ? 
      JSON.parse(localStorage.getItem('cartItems')) : [])})
  }, [])

  const carItemsCount = useDeferredValue(cartItems.length);

  return isPending ? (
    <div>Loading...</div>
  ) : (
    <div>
      <Header countCartItems={carItemsCount}/>
      <div className="row">
        <Main
          onAdd={onAdd}
          onRemove={onRemove} 
          products={products} 
          cartItems={cartItems}
        />
        <Cart 
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      </div>

    </div>
  );
}

export default App;
