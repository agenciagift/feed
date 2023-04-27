import React, { useContext } from 'react';
import AddLink from './components/AddLink';
import Header from './components/Header';
import { Wrapper } from './components/layout';
import LinkList from './components/LinkList';
import FavoritesPanel from "./components/FavoritesLink";
import { GlobalContext } from "./context/GlobalContext";

function App() {
  const { isSidebarOpen } = useContext(GlobalContext);
  console.log('isSidebarOpen', isSidebarOpen);
  return (
    <>
      <Header />
      <Wrapper>
        <AddLink />
        <LinkList />
      </Wrapper>
      {isSidebarOpen && <FavoritesPanel />}
    </>
  );
}

export default App;
