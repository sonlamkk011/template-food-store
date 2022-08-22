import logo from './logo.svg';
import './App.css';
import Public from './Public/Public';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './Public/Menu/Menu';
import About from './Public/About/About';
import Book from './Public/Book/Book';


function App() {
  return (
  
  <>
  <Routes>
    <Route path='/' element={ <Public /> } />
    <Route path='/menu' element={ <Menu /> } />
    <Route path='/about' element={ <About /> } />
    <Route path='/book' element={ <Book /> } />
  </Routes>
  </>
  );
}

export default App;
