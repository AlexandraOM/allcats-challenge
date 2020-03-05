import React from 'react';
import { ReactComponent as Logo } from './assets/Allcats_logo.svg';
import './App.css';
import { Header, Card, Navbar } from './components/index';
import getData from './utils/getData';
import hardCatData from './model/mockCatData';

function App() {
  const [cats, setCats] = React.useState(null);

  React.useEffect(() => {
    getData()
      .then(catData => setCats(catData))
      .catch(err => {
        setCats(hardCatData);
        console.log(
          'Failed to fetch cat data, falling back on hard coded Cat data Error: ',
          err
        );
      });
  }, []);
  return (
    <div className='App'>
      <Navbar></Navbar>
      {/* <header className='App-header'> */}
      <Logo></Logo>
      {/* </header> */}
      <Header></Header>
      <Card cats={cats}></Card>
    </div>
  );
}

export default App;
