import { Routes, Route } from 'react-router-dom';
import { DataProvider } from './Context/DataContext';
import Header from './Components/Navigation/Header';
import Footer from './Components/Navigation/Footer';
import Bikes from './Components/Bikes/Bikes';
import CatFacts from './Components/CatFacts/CatFacts';
import Agify from './Components/Agify/Agify';
import Excuser from './Components/Excuser/Excuser';
import Count from './Components/Agify/Count';
import Home from './Components/Home/Home';

function App() {
  

  return (
    <div className="App h-full bg-primary px-5">      
    <Header />
    <DataProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bikes' element={<Bikes />} />
        <Route path='/cats' element={<CatFacts />} />
        <Route path='/agify' element={<Agify />} />
        <Route path='/excuser' element={<Excuser />} />
        <Route path='/counter' element={<Count />} />
      </Routes>
    </DataProvider>
    <Footer />      
    </div>
  )
}

export default App;
