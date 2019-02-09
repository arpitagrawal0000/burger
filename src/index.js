import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from '../src/Store/reducer';
import Confirm from './screens/confirm';
import { Route, BrowserRouter} from 'react-router-dom';
import Checkout from './screens/checkout';
import Completed from './screens/completed';
//import Orders from './screens/orders';
import NewOrders from './screens/new';
import Screen from './screens/burger';


const store = applyMiddleware(thunk)(createStore)(reducer);

ReactDOM.render(
        <Provider store= {store}> 
            <BrowserRouter >
                <div>
                    <Route exact path="/" component={App} />
                    <Route path="/homepage" component={Screen} />
                    <Route path="/order" component={Confirm} /> 
                    <Route path="/checkout" component={Checkout}/>
                    <Route path="/completed" component={Completed}/>
                    <Route path="/orders" component={NewOrders}/>
                </div>
            </BrowserRouter>

        </Provider> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
 