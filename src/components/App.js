import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './home';
import Menu from './menu';
import Header from './shared/header';
import Footer from './shared/footer';
import ScrollTop from './ScrollToTop';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <ScrollTop>
            <Route exact path="/" component={Home} />
            <Route exact path="/menu" component={Menu} />
          </ScrollTop>
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
