import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import routers from './router';

import Header from './container/header';
import Footer from './container/footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <div className="Apps">
          <Header />
          <div>
            {
              routers.map(router => (
                <Route
                  key={router.path}
                  path={router.path}
                  component={router.component}
                  exact={router.exact}
                />
              ))
            } 
            <Footer />
          </div>
          </div>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
