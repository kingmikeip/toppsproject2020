import React from 'react';
import LoginPage from './Components/LoginPage';
import DisplayPage from './Components/DisplayPage';
import ShowAllCards from './Components/ShowAllCards';
import Splash from './Components/Splash';
import AdminPage from './Components/AdminPage';
import {Route} from 'react-router-dom'
import 'antd/dist/antd.css';
/**
 * Login page ->
 * Default display my collection
 * Show all cards
 * Sort by artist, player name, number range, specific number, print run range
 * Add notes
 * Add / Remove Card
 * Wishlist
 * React Router with admin page
 */


/** Things to add
 * Start page
 * Add to my collection
 * Wish list
 * In hand check box
 * route for admin page
 * mobile responsiveness
 * card number search
 * total pr for artist or player
 */

function App() {
  return (
    <div className="App">
      {/* <Splash />
      <LoginPage /> */}
      {/* <DisplayPage/> */}
      {/* <ShowAllCards/> */}
      {/* <AdminPage /> */}

        <Route exact path="/" component={ShowAllCards} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/adminap" component={AdminPage} />
      {/* Profile Page */}
    </div>
  );
}

export default App;
