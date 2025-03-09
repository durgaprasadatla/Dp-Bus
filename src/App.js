import './App.css';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import Buess from './header/Buess';
import Trains from './header/Trains';
import Flights from './header/Flights';
import Hotels from './header/Hotels';
import Navbar from './header/Navbar';
import Home from './header/Home';
import Bookings from './footer/Bookings';
import Help from './footer/Help';
import Account from './footer/Account';
import Offers from './footer/Offers';
import Buess1 from './flights/Buess1';
import Hotels1 from './flights/Hotels1';
import Trains1 from './flights/Trains1';

function AppContent() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/trains" || location.pathname === "/flights"
  ||location.pathname === "/hotels" || location.pathname === "/hotels1"
  ||location.pathname==="/trains1" || location.pathname==="/buess1";

  return (
    <div className="App">
      {!hideNavbar && <Navbar />}
      <Switch>
        <Route exact path="/buess" component={Buess} />
        <Route exact path="/trains" component={Trains} />
        <Route exact path="/flights" component={Flights} />
        <Route exact path="/hotels" component={Hotels} />
        <Route exact path="/buess1" component={Buess1} />
        <Route exact path="/trains1" component={Trains1} />
        <Route exact path="/hotels1" component={Hotels1} />
        <Route exact path="/" component={Home} />
        <Route exact path="/offers" component={Offers} />
        <Route exact path="/bookings" component={Bookings} />
        <Route exact path="/help" component={Help} />
        <Route exact path="/account" component={Account} />
      </Switch>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
