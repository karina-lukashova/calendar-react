import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router';
import { useTypedSelector } from '../hooks/useTypedSelector';

export const AppRouter: React.FC = () => {
  const { isAuth } = useTypedSelector(state => state.auth);  

  return (
    isAuth 
      ?
        <Routes>
          {privateRoutes.map(route =>
            <Route key={route.path} path={route.path} element={route.element}  />  
          )}
          
        </Routes>
      :
        <Routes>
          {publicRoutes.map(route =>
            <Route key={route.path} path={route.path} element={route.element}  />  
          )}
        </Routes>
  );
};