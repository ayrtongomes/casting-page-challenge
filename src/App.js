import React from 'react';
import './App.css';
import Header from 'components/Header/Header';
import Sidebar from 'components/Sidebar/Sidebar';
import Container from 'components/Container/Container';

function App() {
  return (
    <div className="App">
      <Header mainHeader brand/>
      <div>
        <Sidebar />
        <Container />
      </div>
    </div>
  );
}

export default App;
