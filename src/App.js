import React from 'react';
import './App.css';
import { Header, Card, Navbar } from './components/index';
import getData from './utils/getData';
import hardCatData from './model/mockCatData';
import styled from 'styled-components';
// import { H1 } from './components/styled/StyledComponents';

const Main = styled.main`
  background-color: var(--background-colour);
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  width: 100%;
  padding: 10vh 10vw;

  @media (max-width: 768px) {
    padding: 0;
  }
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
