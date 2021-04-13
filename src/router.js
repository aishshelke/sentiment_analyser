import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import loginpage from './Components/Login/Login'
import registerpage from './Components/Login/Ragister'


function routerE(){

    return(
        <div>
           <Router>
            <div>
                <ul><li>
                    <link to='/login'>Login   </link>
                </li>
                </ul>
                
            </div>
            <Route path='/login' component={loginpage}/>
            </Router>
        </div>
    )
}
export default routerE;