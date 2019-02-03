
import * as actionTypes from './actionTypes';

export const add_ingredients = (value, history) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.ADD_INGREDIENTS,
            payload: {value} 
        })
        history.push('/order')
        
    };
};

export const save_ingredients = (values, history) => {
    console.log(values,"values");
    return (dispatch) =>{
        fetch("http://5c52eda35dcbc40014b3aca3.mockapi.io/burger/v1/burger",  {
            method: 'POST',
            headers: {

                'Content-Type': 'application/json',
            },
            body:JSON.stringify(values),
            // {
            //     values
            // // "Name": "this.state.Name",
            // // "Address" : "this.state.Address",
            // // "phone_number" : "this.state.phone_number",
            // // "cheese" : "this.props.ingredients.cheese",
            // // "salad" : "this.props.ingredients.salad",
            // // "bacon" : "this.props.ingredients.bacon"
            // }
        })
        .then((response) => response.json())
        .then(response => {
              console.log("response", response);
              dispatch({
                type: actionTypes.SAVE_INGREDIENTS,
                payload: response
            })
            history.push('/completed')
            })  
            .catch(err => {
                console.log('error', err)
                alert("error hai");
            })
    };
};


export const show_ingredients= ()=> {
    return (dispatch) =>{
    dispatch({type: actionTypes.SHOW_INGREDIENTS})
    fetch("http://5c52eda35dcbc40014b3aca3.mockapi.io/burger/v1/burger",  {
            method: 'GET',
            headers: {

                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
        .then(response => {
              console.log("response", response);
              dispatch({
                type: actionTypes.SHOW_INGREDIENTS_SUCCESS,
                payload: response
            })
            })  
            .catch(err => {
                dispatch({
                    type: actionTypes.SHOW_INGREDIENTS_FAILURE,
                    payload: err
                })
                console.log('error', err)
                alert("error hai");
            })
}
}