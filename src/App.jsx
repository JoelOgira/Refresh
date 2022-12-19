import { Routes, Route } from 'react-router-dom';
import { DataProvider } from './Context/DataContext';
import Header from './Components/Navigation/Header';
import Footer from './Components/Navigation/Footer';
import Bikes from './Components/Bikes/Bikes';

function App() {
  

  return (
    <div className="App h-full bg-primary px-5">      
      <Header />
      <DataProvider>
        <Routes>
          <Route path='/bikes' element={<Bikes />} />
        </Routes>
      </DataProvider>
      <Footer />      
    </div>
  )
}

export default App;
