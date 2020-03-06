import React from 'react';
import './App.css';
import { Header, Card, Navbar } from './components/index';
import getData from './utils/getData';
import hardCatData from './model/mockCatData';
import styled from 'styled-components';

const Main = styled.main`
  background-color: var(--background-colour);
`;

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
      <Main>
        <Header></Header>
        <Card cats={cats}></Card>
      </Main>
    </div>
  );
}

export default App;
