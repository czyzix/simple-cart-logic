import Header from "./components/Header";
import Main from "./components/Main";
import Cart from "./components/Cart";

function App() {
  return (
    <div>
      <Header />
      <div className="row">
        <Main />
        <Cart />
      </div>

    </div>
  );
}

export default App;
