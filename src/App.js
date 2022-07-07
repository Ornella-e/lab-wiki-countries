
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import countries from "./countries.json"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='container'>
        <div className='row'>
        <CountriesList countries={countries} />
          <Routes>
         <Route path="/" render={(props)=> <CountryDetails {...props} /> } />
         </Routes>
        </div>

      </div>
    </div>
  );
}

export default App;
