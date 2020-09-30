import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './home';
import ScrollTop from './ScrollToTop';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <ScrollTop>
            <Route exact path="/" component={Home} />
          </ScrollTop>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
