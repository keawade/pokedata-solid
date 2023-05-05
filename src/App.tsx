import type { Component } from 'solid-js';
import {
  Container,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from '@suid/material';
import CssBaseline from '@suid/material/CssBaseline';

import { Viewer } from './components/Viewer';
import { Search } from './components/Search';
import { History } from './components/History';

const App: Component = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = createTheme({
    palette: {
      mode: prefersDarkMode() ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Search />
        <Viewer />
        <History />
      </Container>
    </ThemeProvider>
  );
};

export default App;
