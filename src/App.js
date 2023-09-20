import logo from './logo.svg';
import './App.css';
import LazyLoadedComponent from './Components/LazyLoadedComponent';
import SuspenseComponent from './Components/SuspenceComponent';

import React,{Suspense} from 'react';
function App() {
  return (
    <div className="App">
      <LazyLoadedComponent/>
      <Suspense fallback={
      <div>Loading...</div>}/>
      <SuspenseComponent/>
    </div>
  );
}

export default App;
