import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import Ejemplo1 from './pages/Ejemplo1';
import Ejemplo2 from './pages/Ejemplo2';
import Mapa from './pages/Mapa';
import Json from './pages/json';
import Api from './pages/Api';

function App() {
  return (
    <div className="App">
     {/* <Header></Header> */}
     <Header />
     <BrowserRouter>
     <Nav/>
     <Routes>
      {/* aca declaramos todas las rutas */}
    <Route path='/' element={<HomePage></HomePage>}></Route>
    <Route path='/ejemplo1' element={<Ejemplo1></Ejemplo1>}></Route>
    <Route path='/ejemplo2' element={<Ejemplo2></Ejemplo2>}></Route>
    <Route path='/ejemplo3' element={<Mapa></Mapa>}></Route>
    <Route path='/json' element={<Json></Json>}></Route>
    <Route path='/api' element={<Api></Api>}></Route>
     </Routes>
     </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
