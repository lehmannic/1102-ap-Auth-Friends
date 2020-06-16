import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import '../styles/App.css';

import Login from './Login';

function App() {
  return (
    <Router>
      <div className='App'>
        <nav className='container'>
          <h1>APP</h1>
          <Link to='/Login'>Login</Link>
          <Link to='/'>Home</Link>
        </nav>
        <Switch>
          <Route path='/login' component={Login} />
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

