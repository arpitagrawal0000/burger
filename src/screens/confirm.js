import React, { Component } from 'react';

import { connect } from 'react-redux';

class Confirm extends Component {

    nextPath(path) {
        this.props.history.push(path);
      }

    back(path) {
        this.props.history.goBack();
    }
    
    render() {
        return(
            <div>
                <center>
            <form>                
            <h2>YOUR ORDER</h2>
                
                <h3>A delicious burger with following ingredients</h3>
                <p>salad: {this.props.ingredient ? this.props.ingredient.salad : null} </p>
                
                <p>bacon: {this.props.ingredient ? this.props.ingredient.bacon : null} </p>
                
                <p>cheese: {this.props.ingredient ? this.props.ingredient.cheese : null} </p> 
             
               <button onClick={() => this.nextPath('/checkout') }>
                Submit
               </button>
               <button onClick={() => this.back('/order')}>Back</button>

               </form>
               </center>
  
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