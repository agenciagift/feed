import React from 'react';
import Header from './components/Header';
import { Wrapper } from './components/layout';
import LinkList from './components/LinkList';

function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <LinkList />
      </Wrapper>
    </>
  );
}

export default App;
