import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';




function App() {
  return (
    <>
     
      <NavBar/>
      <ItemDetailContainer/>
      <ItemListContainer greeting={`Hi! I'm a greeting`}/>
            

    </>
  );
}

export default App;
