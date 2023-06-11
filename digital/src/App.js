
import './App.css';
import Blogs from './components/Blogs';
import Homepage from './components/Homepage'
import Navbar from './components/Navbar';

const App = () =>  {
  return (
    <div className="App">
    <Navbar/>
    <Homepage/>
    <Blogs/>
    </div>
  );
}

export default App;
