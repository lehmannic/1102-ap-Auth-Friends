import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import '../styles/App.css';

import PrivateRoute from './PrivateRoute';
import Login from './Login';
import FriendsList from './FriendsList';

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='container '>
          <h1>Friends List APP</h1>
          <Link to='/Login'>Login</Link>
          <Link to='/'>Home</Link>
        </header>
        <Switch>
          <PrivateRoute path='/protected' component={FriendsList} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
          {/* <Route path='/login' render={(props) => <Login {...props} />} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// import Login from './Login';
// // import GasPrices from './components/GasPrices';

// function App() {
//   return (
//     <Router>
//       <div className='App'>
//         <ul>
//           <li>
//             <Link to='/login'>Login</Link>
//           </li>
//           <li>
//             <Link to='/protected'>Protected Page</Link>
//           </li>
//         </ul>
//         <Switch>
//           {/* <Route exact path='/protected' component={GasPrices} /> */}
//           <Route path='/login' component={Login} />
//           <Route component={Login} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;
