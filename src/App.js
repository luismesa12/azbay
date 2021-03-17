import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ProductsContainer from './components/ProductsContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import { ProductProvider } from './context/ProductContext';
import Orders from './components/Cart/Orders';
import { FavoriteProvider } from './context/FavoriteContext';
import FavoriteList from './components/FavoriteList';
import { SearchProvider } from './context/SearchContext';
import Contact from './components/Contact';



function App() {
  return (
    <>
      <ProductProvider>
        <SearchProvider>
          <CartProvider>
            <FavoriteProvider>
              <BrowserRouter>
                <NavBar />
                <Switch>
                  <Route exact path='/'>
                    <h1>Aquì se Debe Construir HOME</h1>
                  </Route>
                  <Route exact path='/items'>
                    <ProductsContainer/>
                  </Route>
                  <Route exact path='/item/:id'>
                    <ItemDetailContainer />
                  </Route>
                  <Route exact path='/carrito'>
                    <Cart />
                  </Route>
                  <Route exact path='/orders'>
                    <Orders />
                  </Route>
                  <Route exact path='/myFavorites'>
                    <FavoriteList />
                  </Route>
                  <Route exact path='/contact'>
                    <Contact/>
                  </Route>
                </Switch>
              </BrowserRouter>
            </FavoriteProvider>
          </CartProvider>
        </SearchProvider>
      </ProductProvider>
    </>
  );
}

export default App;
