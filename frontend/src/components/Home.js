import React from 'react';
import Navbar from './navbar/Navbar';
import MenuCard from './cards/MenuCard';
import Card from './cards/Card';
import Menu from './pages/menu/Menu';
function Home() {
  return (
    <div>
      <Navbar />
      <Card component={MenuCard} />
    </div>
  );
}

export default Home;
