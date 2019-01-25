import React, { Component }from 'react'; 
import { connect } from 'react-redux';
import { add_ingredients } from '../Store/actions';


class Screen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cheese: 0,
            bacon: 0,
            salad: 0
        }
    }
    

    handleSumbit = (e, history) => {
        e.preventDefault();
       this.props.add_ingredients(this.state, history)    
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
                <label >Cheese  </label>
                  <input type="number" name="Cheese" placeholder= "Quantity" onChange={(e) => this.handleCheese(e)}/>
                  <br/>
                <label >Bacon   </label>
                  <input type="number" name="Bacon"  placeholder= "Quantity" onChange={(e) => this.handleBacon(e)} />
                  <br/>
                <label >Salad   </label>
                  <input type="number" name="Salad"   placeholder= "Quantity" onChange={(e) => this.handleSalad(e)} />
                  <br/>
                  <br/>
                  <input type="submit" value="Submit" onClick={(e) => this.handleSumbit(e, this.props.history)}/>
                  {/* <button onClick={(e) => this.handleShowIngredients(e)} >
                              <Link to="/order">Order</Link>  </button>
                               */}
            </form>

           </div>
       )
    }
 }


 
 const mapDispatchToProps = dispatch => {
    return {
       add_ingredients : (value, history) => dispatch(add_ingredients(value, history))
    };
};

// const mapStateToProps = (state) => {
//     console.log(state.ingredient, "state");
//     return{
//         ingredient: state.ingredient
//     };
// };

export default connect (null, mapDispatchToProps) (Screen);

