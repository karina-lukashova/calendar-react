import { Menu } from 'antd';
import { Header } from 'antd/es/layout/layout';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../router';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/userActions';

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { isAuth, user } = useTypedSelector(state => state.auth);
  const { logout } = useActions();

  return (
    <Header>
      <Menu
        style={{justifyContent: "flex-end"}}
        theme="dark"
        mode="horizontal"
        selectable={false}
        items={isAuth 
          ? [
              {key: 1, label: user.username, disabled: true, style: {cursor: 'default'}},
              {key: 2, label: "Выйти", onClick: logout}
            ]
          : [{key: 1, label: "Логин", onClick: () => navigate(RouteNames.LOGIN)}]
        }
      />
    </Header>
  );
};