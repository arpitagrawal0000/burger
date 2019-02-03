import React, { Component } from 'react';
 
import { show_ingredients } from '../Store/actions'

import { connect } from 'react-redux';

class Orders extends Component {
     
    componentDidMount =() => {
        this.props.show_ingredients()  

    }

    render() {
        const { orders, orderLoading, orderError } = this.props;
        //var a  = orders[0];
        // console.log(a.name, "a.name0");
        // if(orders.length>0){
        //     console.log("orders", orders[0].name);
        // }

        if(orderLoading) {
            return(
                <div>Loading..</div>
            )
        }
        if(orderError){
            return(
                <div>Error: {orderError}</div>
            )
        }
        else return(
            <div>
                <h1>Your Orders Are</h1>
                {orders.map(function(item, i){
                //     console.log(item, "item");
                //   console.log('test', item.name);
                  return <li key={i}>{item.name}</li>
                })
            }
        }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state, "state");
    return{
        orders:state.orders,
        orderLoading: state.orderLoading,
        orderError: state.orderError,
}
}

const mapDispatchToProps = dispatch => {
    return {
      show_ingredients : () => dispatch(show_ingredients())
    };
};



export default connect (mapStateToProps, mapDispatchToProps) (Orders);