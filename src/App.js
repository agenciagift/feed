import React from 'react';
import AddLink from './components/AddLink';
import Header from './components/Header';
import { Wrapper } from './components/layout';
import LinkList from './components/LinkList';

function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <AddLink />
        <LinkList />
      </Wrapper>
    </>
  );
}

export default App;
