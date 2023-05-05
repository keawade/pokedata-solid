import type { Component } from 'solid-js';

// import styles from './App.module.css';
import { Viewer } from './components/Viewer';
import { Search } from './components/Search';
import { History } from './components/History';

const App: Component = () => {
  return (
    <section>
      <Search />
      <Viewer />
      <History />
    </section>
  );
};

export default App;
