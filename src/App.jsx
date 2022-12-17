import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { DataProvider } from './Context/DataContext';
import Header from './Components/Navigation/Header';
import Footer from './Components/Navigation/Footer';

function App() {
  

  return (
    <div className="App h-full">
      <Routes>
        <Header />
        <DataProvider>
          
        </DataProvider>
        <Footer />
      </Routes>
    </div>
  )
}

export default App;
