import React from 'react';
import { Provider } from 'react-redux';

import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';
import store from './store';
import Layout from './Components/plugins/Layout';
import BannerContainer from './Components/banner/BannerContainer';
import SelectedAdvert from './Components/selectedadvert/SelectedAdvert';
import AuthPage from './Components/Auth/AuthForm';
import SearchedBy from './Components/Gallery/SearchedBy';
import NotFound from './Components/plugins/PageNotFound';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="/home" exact>
              <BannerContainer />
            </Route>
            <Route path="/auth">
              <AuthPage />
            </Route>

            <Route path="/advert/:id" component={SelectedAdvert} />
            {/* <Route path="/search/:keyword/:value" component={SearchedBy} /> */}
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
