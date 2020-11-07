import React from 'react'

import Dashboard from "./Components/Dashboard"
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import {ThemeProvider} from '@material-ui/styles'
import {Theme} from './Styles/Theme'


function App() {
  return (
    <div className="App">
    <ThemeProvider theme={Theme}>
      <Router>
        <Dashboard/>
      </Router>
    </ThemeProvider>
    </div>
  );
}

export default App;
