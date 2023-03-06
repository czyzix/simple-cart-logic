import Header from "./components/Header";
import Main from "./components/Main";
import Cart from "./components/Cart";
import data from "./data.js";

function App() {

  const { products } = data;

  return (
    <div>
      <Header />
      <div className="row">
        <Main products={ products } />
        <Cart />
      </div>

    </div>
  );
}

export default App;
