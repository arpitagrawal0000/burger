import React, { Component }from 'react'; 
import { connect } from 'react-redux';
import { add_ingredients } from '../Store/actions';
import { Link } from 'react-router-dom'


class Screen extends Component {
    state = {
        cheese: 0,
        bacon: 0,
        salad: 0
    }

    handleSumbit = (e) => {
       this.props.add_ingredients(this.state)    
        
    }

    handleBacon = (e) => {
        this.setState({bacon: e.target.value});        
    }

    handleSalad = (e) => {
        this.setState({salad: e.target.value})        
    }

    handleCheese = (e) => {
        this.setState({cheese: e.target.value})        
    }


    handleShowIngredients = (e) => {
        console.log(this.state);
    }
    render() {
       return (
           <div>
           <form>
                <h3>Hey!! Order Your Burger Here...</h3>
                <label for="Cheese">Cheese  </label>
                  <input type="number" name="Cheese" placeholder= "Quantity" onChange={(e) => this.handleCheese(e)}/>
                  <br/>
                <label for="Bacon">Bacon   </label>
                  <input type="number" name="Bacon"  placeholder= "Quantity" onChange={(e) => this.handleBacon(e)} />
                  <br/>
                <label for="Salad">Salad   </label>
                  <input type="number" name="Salad"   placeholder= "Quantity" onChange={(e) => this.handleSalad(e)} />
                  <br/>
                  <br/>
                  <input type="submit" value="Submit" onClick={(e) => this.handleSumbit(e)}/>
                  <button> {(e) => this.handleShowIngredients(e)}
                              <Link to="/order">Order</Link>  </button>
                              
            </form>

           </div>
       )
    }
 }


 
 const mapDispatchToProps = dispatch => {
    return {
       add_ingredients : (value) => dispatch(add_ingredients(value))
    };
};

const mapStateToProps = (state) => {
    console.log(state, "state");
    return{
        ingredients: state.ingredients
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Screen);

