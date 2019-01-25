import * as actionTypes from './actionTypes';

export const add_ingredients = (value) => {
    return {
        type: actionTypes.ADD_INGREDIENTS,
        payload: value  
    };
};


