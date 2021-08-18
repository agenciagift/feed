import React from 'react';
import AddLink from './components/AddLink';
import Header from './components/Header';
import { Wrapper } from './components/layout';
import LinkList from './components/LinkList';
import useAuth from './hooks/useAuth';

function App() {
  const { user } = useAuth();

  return (
    <>
      <Header />
      <Wrapper>
        {user && <AddLink />}
        <LinkList />
      </Wrapper>
    </>
  );
}

export default App;
