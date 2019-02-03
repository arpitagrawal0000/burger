import React, { Component } from 'react';

import { connect } from 'react-redux';

import { save_ingredients } from '../Store/actions'

class Checkout extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            address: '',
            phone_number: ''
        }
    }

    handleName= (e) => {
    
        this.setState({name: e.target.value});  
        
 
     }
 
     handleAddress = (e) => {
         this.setState({address: e.target.value});        
     }
 
     handleNumber = (e) => {
         this.setState({phone_number: e.target.value})        
     }
 
     handleSubmit= (e, history) => {
          e.preventDefault();
            console.log(this.state.name)
            console.log(this.state.address)
            console.log(this.state.phone_number)
            console.log(this.props.ingredient.cheese)
            
            let values = {
                "name": this.state.name,
                "address": this.state.address,
                "phone_number": this.state.phone_number,
                "cheese": this.props.ingredient.cheese,
                "bacon": this.props.ingredient.bacon,
                "salad": this.props.ingredient.salad,
            }
            this.props.save_ingredients(values, history);
    }
        
    render() {
        return(
            <div>
              <form><center>
                <h3>Kindly Provide your delivery details</h3>
                <label >Name </label>
                  <input type="text"  placeholder= "Your Name" onChange={(e) => this.handleName(e)}/>
                  <br/>
                <label >Address   </label>
                  <input type="text"  placeholder= "Your Address" onChange={(e) => this.handleAddress(e)} />
                  <br/>
                <label >Contact No.   </label>
                  <input type="number" placeholder= "Mobile Number" onChange={(e) => this.handleNumber(e)} />
                  <br/>
                  <input type="submit" value="Submit"  onClick={(e) => this.handleSubmit(e,this.props.history)}/>
                  </center>
            </form>      
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

const mapDispatchToProps = dispatch => {
    return {
       save_ingredients : (values, history) => dispatch(save_ingredients(values, history))
    };
};

export default connect (mapStateToProps, mapDispatchToProps) (Checkout);

