
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


