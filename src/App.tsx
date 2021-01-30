import React from 'react';
import './App.css';
import Layout from './components/layout/Layout';
import Sidebar from './components/sidebar/Sidebar';

const App: React.FC = () => {
  return (
    <Layout>
      <Sidebar />
      <div>World</div>
    </Layout>
  );
};

export default App;
