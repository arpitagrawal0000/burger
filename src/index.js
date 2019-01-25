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
import { Route, BrowserRouter } from 'react-router-dom';

// const Routing = (
//     <BrowserRouter>
        
//     </BrowserRouter> 
// );
 
// class route extends Component {
//     render () {
//         return (
//             <div> 
//                 <Route path="/" component= {App} />
//                 <Route path ="/order" component= {Confirm} />
//             </div>
//         )
//     }
// }

// const Root = ({ store }) => (
//     <Provider store={store}>
//       <Router>
         
//         <Route path="/" component={App} />
//         <Route path="/order" component={Confirm} />

//       </Router>
//     </Provider>
//   )


const store = applyMiddleware(thunk)(createStore)(reducer);

ReactDOM.render(
        <Provider store= {store}> 
            <BrowserRouter >
                <div>
                    <Route exact path="/" component={App} />
                    <Route path="/order" component={Confirm} /> 
                </div>
            </BrowserRouter>

        </Provider> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
 
// export default Root;