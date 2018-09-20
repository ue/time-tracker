import React from 'react';
import { Switch, Route } from 'react-router';
import App from './App';
// import WidgetPage from './pages/WidgetPage';
// import { Home } from './pages/homePage';
import { Header } from './components/header';
import { Footer } from './components/footer';

import { Home, Widget } from './pages';

export default () => (
  <App>
    <Header title="Time Doctor" />
    <Switch>
      <Route path="/widget" component={Widget} />
      <Route path="/" component={Home} />
    </Switch>
    <Footer />
  </App>
);
