import React, { FC, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../rootReducer';
import { Header } from '../header/head';
import { Footer } from '../footer/footer';

const Auth = lazy(() => import('../features/auth/Auth'));
const Home = lazy(() => import('../features/home/Home'));

const App: FC = () => {
  const isLoggedIn = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return (
   
    <Router>
       <Header />
      <Switch>
        <Route path="/">
          <Suspense fallback={<p>Loading...</p>}>
            {isLoggedIn ? <Home /> : <Auth />}
          </Suspense>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
