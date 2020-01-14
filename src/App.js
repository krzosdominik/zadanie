import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ApiDataProvider } from "./context/ApiData.context";
import { AppStateProvider } from "./context/AppState.context";

import Header from './components/Header';
import Content from './components/Content';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header />
            <ApiDataProvider>
              <AppStateProvider>
                <div className="container">
                  <Content />
                </div>
              </AppStateProvider>
            </ApiDataProvider>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;


