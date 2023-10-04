import React, { useEffect } from 'react';
import { AppRouter } from './components/AppRouter';
import { Navbar } from './components/Navbar';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import './App.css';
import { useActions } from './hooks/userActions';
import { IUser } from './models/IUser';

export const App: React.FC = () => {
  const { setUser, setIsAuth } = useActions();

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setUser({username: localStorage.getItem('username') || ''} as IUser);
      setIsAuth(true);
    }
  }, [])

  return (
    <Layout>
      <Navbar />
      <Content>
        <AppRouter />
      </Content>
    </Layout>
  );
};