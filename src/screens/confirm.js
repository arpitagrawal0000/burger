import React, { Component } from 'react';

import { connect } from 'react-redux';

class Confirm extends Component {
    render() {
        return(
            <div>
              
                
            <h2>YOUR ORDER</h2>
                <br/>
                <h4>A delicious burger with following ingredients</h4>
                <h3>salad: {alert (this.props)} </h3>
                <br/>
                {/* <h3>bacon: {this.props.reducer.ingredients.bacon} </h3> */}
                {/* <br/> */}
                {/* <h3>cheese: {this.props.reducer.ingredients.cheese} </h3>  */}
                      {/* */} 
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    console.log(state, "state");
    return{
        ingredient: state    };
};

export default connect (mapStateToProps, null) (Confirm);