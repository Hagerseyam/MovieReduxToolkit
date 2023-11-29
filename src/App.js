import './App.scss';
import React from 'react';
import { BrowserRouter , Routes,Route,Switch} from 'react-router-dom';
import Header from './componants/Header/Header';
import Pagenotfound from './componants/Pagenotfound/Pagenotfound';
import MovieDetails from './componants/MovieDetails/MovieDetails';
import Home from './componants/Home/Home';
import Footer from './componants/Footer/Footer';

function App() {
  return (
    <div className="app">
        <Header>
          </Header>
          <div className='container'>
            
          </div>
      <Routes>
        
          <Route path='/'  element={<Home/>}/>
          <Route path='/movie/:imdbID' element={<MovieDetails/>}/>
          <Route element={<Pagenotfound/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
