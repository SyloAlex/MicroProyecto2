import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from '../redux/store';
import { Login } from '../pages/Login/Login';
import { Register } from '../pages/Register/Register';
import { Movies } from '../pages/Movies/Movies';
import { Layout } from '../containers/Layout/Layout';
import { Provider, useSelector } from 'react-redux';
import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
import { ProtectedRoute } from '../components/ProtectedRoute/ProtectedRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Layout>
          <Routes>
            <Route path={'/'} element={<Login />} />
            <Route path={'/register'} element={<Register />} />
            <Route
              path={'/movies'}
              element={
                <ProtectedRoute>
                  <Movies />
                </ProtectedRoute>
              }
            />
            <Route
              path={'/movies/:movieID'}
              element={
                <ProtectedRoute>
                  <MovieDetails movie />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Layout>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
