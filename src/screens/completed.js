import React, { Component } from 'react';

import { Link } from 'react-router-dom';


class Completed extends Component {

    render() {
        return(
            <div>
               <h3> Thankyou your order has been placed </h3>
               <Link to= "/">
               <button onClick>Home</button>
               </Link>
               <Link to= "/orders">
               <button onClick>My Orders</button>
               </Link>
           </div>
        )
    }
}
export default Completed;