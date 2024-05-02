import React, { useState, useEffect } from 'react';
import { Layout, Menu, theme } from 'antd';
import { Link, useLocation } from "react-router-dom"
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const { Sider } = Layout;

const SideMenu = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const location = useLocation();
  const { pathname } = location;
  const [labelValues, setLabelValues] = useState([
    { key: 'sub1', label: 'Check-In Management', items: [{ key: 1, label: 'Analytics' }, { key: 2, label: 'Qr-Codes' }, { key: 3, label: "Logs" }, { key: 4, label: "Visitor’s-List" }, { key: 5, label: "Blacklist" }, { key: 6, label: "Pre-Invites" }] },
    { key: 'sub2', label: 'User Roles', items: [{ key: 7, label: 'Office-Admins' }, { key: 8, label: 'Supervisor' }, , { key: 9, label: "Verification-Team" }] },
    { key: 'sub3', label: 'Employees', items: [{ key: 10, label: 'Employee List' }] },
    { key: "sub4", label: "Account Settings", items: [{ key: 13, label: "Edit" }] },
    { key: "sub5", label: "Edit", items: [{ key: 11, label: "Organization Details" }, { key: 12, label: 'Checkin-Details' }] }
  ]);

  const { selectedKeys, setSelectedKeys, openKey, setOpenKeys } = useContext(AuthContext);

  useEffect(() => {
    if (pathname !== "/") {
      labelValues.map((ele) => {
        ele.items.forEach((child) => {
          if (child.label === pathname.split("/")[1]) {
            setOpenKeys(child.key);
            setSelectedKeys(ele.key);
          }
        });
      });
    }
  }, [pathname, labelValues, setSelectedKeys, setOpenKeys]);

  const onMenuClick = ({ key, keyPath }) => {
    setOpenKeys(key);
    setSelectedKeys(keyPath);
  };

  return (
    <Layout
      style={{
        padding: '20px 0',
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
        
      }}
    >
      <Sider
        style={{
          background: colorBgContainer,
        }}
        width={312}
      >
        <Menu
          mode="inline"
          onClick={onMenuClick}
          defaultSelectedKeys={openKey}
          defaultOpenKeys={[selectedKeys[1]]}
          style={{
            height: '100%',
          }}
        >
          {labelValues.map((item) => (
            <Menu.SubMenu key={item.key} title={item.label}>
              {item.items.map((child) => (
                <Menu.Item key={child.key} >
                  <Link to={`/${child.label.replace(' ', '-')}`}>{child.label}</Link>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ))}
        </Menu>
      </Sider>
    </Layout>
  );
};

export default SideMenu;
