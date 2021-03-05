import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemList from './components/ItemListContainer/ItemList';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import { ProductProvider } from './context/ProductContext';



function App() {
  return (
    <>

      {/* <NavBar/>
      <ItemDetailContainer/>
      <ItemListContainer greeting={`Hi! I'm a greeting`}/> */}
      <ProductProvider>
        <CartProvider>
          <BrowserRouter>
            <NavBar />
            <Switch>
              <Route exact path='/'>
                <ItemListContainer greeting={`Hi! I'm a greeting`} />
              </Route>
              <Route exact path='/items'>
                <ItemList />
              </Route>
              <Route exact path='/item/:id'>
                <ItemDetailContainer />
              </Route>
              <Route exact path='/carrito'>
                <Cart />
              </Route>
            </Switch>
          </BrowserRouter>
        </CartProvider>
      </ProductProvider>
    </>
  );
}

export default App;
