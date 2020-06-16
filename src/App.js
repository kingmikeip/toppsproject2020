import React from 'react';
import LoginPage from './Components/LoginPage';
import DisplayPage from './Components/DisplayPage';
import ShowAllCards from './Components/ShowAllCards';
import 'antd/dist/antd.css';
/**
 * Login page ->
 * Default display my collection
 * Show all cards
 * Sort by artist, player name, number range, specific number, print run range
 * Add notes
 * Add / Remove Card
 * Wishlist
 */

function App() {
  return (
    <div className="App">
      {/* <DisplayPage/> */}
      <ShowAllCards/>
    </div>
  );
}

export default App;
