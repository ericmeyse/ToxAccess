import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider, createTheme  } from '@material-ui/core/styles'
import Layout from './components/Layout'

import Welcome from './pages/Welcome'
import Search from './pages/Search'
import Collections from './pages/Collections'
import Results from './pages/Results'
import Donors from './pages/Donors'
import NoAccount from './pages/NoAccount'

const AbbottTheme = createTheme(
  {
    palette: {
        primary: { main: '#009cde', dark: '#002a3a', light: '#5bc2e7' },
      secondary: { main: '#63666a' }
    },
    typography: {
      fontFamily: 'Calibri, sans-serif',
      lineHeight: '1.2em',
      color: '#222731',
      gutterBottom: '1rem',
    },
    components: {
      MuiButton: {
        root: {
        textTransform: 'uppercase',
        fontWeight: '700',
        fontSize: '1.4rem',

        },
      },
      MuiTypography: {
        styleOverrides: {
          
          MuiTypographyH2: { fontFamily: 'arial', textTransform: 'uppercase',fontWeight: '700'},
          MuiTypographyH3: { fontFamily: 'arial', textTransform: 'uppercase',fontWeight: '700'},
          MuiTypographyH4: { fontFamily: 'arial', textTransform: 'uppercase',fontWeight: '700'},
          MuiTypographyH5: { fontFamily: 'arial', textTransform: 'uppercase',fontWeight: '700'},
          MuiTypographyH6: { fontFamily: 'arial', textTransform: 'uppercase',fontWeight: '700'},
        },
      },
      
      MuiOutlinedInput: {
          root: {
            borderRadius: '2px',
            paddingTop: '8px',
            paddinBottom: '8px',
          },
      },
      MuiInputBaseInput: {
        styleOverrides: {
          paddingTop: '8px',
          paddinBottom: '8px',
        } 
      }
    }
  }
)


function App() {

  let isMenuOpen = false;

  return (
    <ThemeProvider theme={AbbottTheme}> 
      <Router>
        <Layout isMenuOpen={isMenuOpen}>
          <Switch>
            <Route exact path="/">
              <Welcome />
            </Route>
            <Route path="/welcome">
              <Welcome />
            </Route>
            <Route path="/Search">
              <Search />
            </Route>
            <Route path="/Results">
              <Results />
            </Route>
            <Route path="/Collections">
              <Collections />
            </Route>
            <Route path="/Donors">
              <Donors />
            </Route>
            <Route path="/NoAccount">
              <NoAccount />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
