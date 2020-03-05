import React from 'react';
import { ReactComponent as Logo } from './assets/Allcats_logo.svg';
import './App.css';
import { Header, Card, Navbar } from './components/index';
import getData from './utils/getData';
function App() {
  const [cats, setCats] = React.useState(null);

  React.useEffect(() => {
    getData()
      .then(catData => setCats(catData))
      .catch(err => console.log('Failed to fetch cat data Error: ', err));
  }, []);
  console.log({ cats });
  return (
    <div className='App'>
      <Navbar></Navbar>
      {/* <header className='App-header'> */}
      <Logo></Logo>
      {/* </header> */}
      <Header></Header>
      <Card></Card>
    </div>
  );
}

export default App;
