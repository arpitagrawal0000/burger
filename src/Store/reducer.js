import * as actionTypes from './actionTypes';


const initialState= {
    ingredient: {}
    
};

const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.ADD_INGREDIENTS: 
        return{...state, ingredient: action.payload.value};

        default: 
            return state;
    }
};

export default reducer;