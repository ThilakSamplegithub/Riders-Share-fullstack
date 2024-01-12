import logo from './logo.svg';
import './App.css';
import Passenger from './Pages/passenger';
import Rider from './Pages/rider';
import Navbar from './Components/NavBar';
import MainRoutes from './Pages/MainRoutes';
function App() {

  return (
    <div className="App">
      <Navbar/>
    <MainRoutes/>
    
    
    </div>
  );
}

export default App;
