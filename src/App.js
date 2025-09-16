import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Menu } from './pages/menu';
import { About } from './pages/about';
import { BookTable } from './pages/bookTable';
import Home from './pages/home';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/about' element={<About />} />
          <Route path='/bookTable' element={<BookTable />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
