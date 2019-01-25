import React, { Component } from 'react';

import { connect } from 'react-redux';

class Confirm extends Component {
    render() {
        return(
            <div>
              
                
            <h2>YOUR ORDER</h2>
                <br/>
                <h4>A delicious burger with following ingredients</h4>
                <h3>salad: {this.props.ingredient ? this.props.ingredient.salad : null} </h3>
                <br/>
                <h3>bacon: {this.props.ingredient ? this.props.ingredient.bacon : null} </h3>
                <br/>
                <h3>cheese: {this.props.ingredient ? this.props.ingredient.cheese : null} </h3> 
                      {/* */} 
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    console.log(state, "state");
    return{
        ingredient: state.ingredient
    };
};

export default connect (mapStateToProps, null) (Confirm);