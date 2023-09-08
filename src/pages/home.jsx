import '../App';
import { Menu } from '../pages/menu';
import { About } from '../pages/about';
import { BookTable } from '../pages/bookTable';
import Slider from "../components/slider";
import Sales from '../components/sales';

function Home() {
  return (
    <div>  <div className='container'>
      <div className="slider-container"> { }
        <Slider />
      </div>
    </div>
      <Sales />
      <Menu />
      <About />
      <BookTable />
    </div>
  );
}

export default Home;
