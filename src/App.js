import logo from './logo.svg';
import './App.css';
import React ,{useState , useEffect} from 'react';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/home/Home';

const mediaQuery = {
  desktop: 1200,
  tablet: 768,
  phone: 576,
};

const screenSize = document.body.clientWidth;


function App() {
const [windowWidth,setWidth] = useState(screenSize);

useEffect(() => {
    window.addEventListener("resize",()=>{
        setWidth(
            document.body.clientWidth,
        );
    }

    );
});

const isTablet = windowWidth < mediaQuery.tablet;


  return (
    <div className="App">
      <NavBar isTab={isTablet}/>
      <Home />
    </div>
  );
}

export default App;
