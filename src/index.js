import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'
import Classes from './Classes';
import Students from './Students';
import Home from './Home';
import * as serviceWorker from './serviceWorker';

serviceWorker.unregister();

const bR=(

    <Router>
    <div> 
        <div> 
          <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
             <Link to="/Student">Students</Link>
             </li>
              <li>
              <Link to="/Classes">Classes</Link>
             </li>
             </ul>     
        </div>

        <div> 
            <Route exact path="/" component={Home} />
            <Route path="/Student" component={Students} />
            <Route path="/Classes" component={Classes} />
        </div>
        
    
    </div>
</Router> 
)

ReactDOM.render(bR, document.getElementById('root'));
