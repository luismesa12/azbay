import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';



function App() {
  return (
    <>
     
      {/* <NavBar/>
      <ItemDetailContainer/>
      <ItemListContainer greeting={`Hi! I'm a greeting`}/> */}
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path='/'>
            <ItemListContainer greeting={`Hi! I'm a greeting`}/>
          </Route>
          <Route exact path='/item/:id'>
          <ItemDetailContainer/>
          </Route>
        </Switch>
      </BrowserRouter>
            

    </>
  );
}

export default App;
