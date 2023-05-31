import logo from './logo.svg';
import './App.css';
import { Button, Space } from 'antd';
import { BrowserRouter , Routes , Route } from 'react-router-dom'

import AppHeader from 'Component/AppHeader';
import PageContent from 'Component/PageContent';
import AppFooter from 'Component/AppFooter';
import SideMenu from 'Component/SideMenu';
function App() {
  return (
    <div className='App'>
      <AppHeader />
      <Space className='MainContent'>
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </Space>
      <AppFooter />
    </div>
  );
}

export default App;
