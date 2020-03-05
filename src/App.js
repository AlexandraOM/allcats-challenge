import React from 'react';
import { ReactComponent as Logo } from './assets/Allcats_logo.svg';
import './App.css';
import { Header, Card, Navbar } from './components/index';
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo></Logo>
      </header>
      <Header></Header>
    </div>
  );
}

export default App;
