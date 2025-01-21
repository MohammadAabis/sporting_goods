import React from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';

const HomePage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Main style={{ flex: '1' }} />
      <Footer />
    </div>
  );
};

export default HomePage;
