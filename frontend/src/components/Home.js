import React from 'react';
import Navbar from './navbar/Navbar';
import MenuCard from './cards/MenuCard';
import Card from './cards/Card';
import Menu from './pages/menu/Menu';
import { connect } from 'react-redux';
function Home() {
  return (
    <div>
      <Navbar />
      <Card component={MenuCard} />
    </div>
  );
}

export default connect((state) => ({ loadingState: state.ui.status }))(Home);
