import { Routes, Route } from 'react-router-dom';
import { DataProvider } from './Context/DataContext';
import Header from './Components/Navigation/Header';
import Footer from './Components/Navigation/Footer';
import Bikes from './Components/Bikes/Bikes';
import CatFacts from './Components/CatFacts/CatFacts';
import Agify from './Components/Agify/Agify';

function App() {
  

  return (
    <div className="App h-full bg-primary px-5">      
    <Header />
    <DataProvider>
      <Routes>
        <Route path='/bikes' element={<Bikes />} />
        <Route path='/cats' element={<CatFacts />} />
        <Route path='/agify' element={<Agify />} />
      </Routes>
    </DataProvider>
    <Footer />      
    </div>
  )
}

export default App;
