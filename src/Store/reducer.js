import * as actionTypes from './actionTypes';


const initialState= {
    ingredient: {},
    saveIngredient: {},
    orders: [],
    orderLoading: false,
    orderError: null,
    
};

const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.ADD_INGREDIENTS: 
            return{...state, ingredient: action.payload.value};
        case actionTypes.SAVE_INGREDIENTS: 
            return{...state, saveIngredient: action.payload};
        case actionTypes.SHOW_INGREDIENTS: 
            return{...state, orderLoading: true, orderError: null};
        case actionTypes.SHOW_INGREDIENTS_SUCCESS: 
            return{...state, orderLoading: false, orders: action.payload, orderError: null};
        case actionTypes.SHOW_INGREDIENTS_FAILURE: 
            return{...state, orderLoading: false, orders: [], orderError: action.payload};
        default: 
            return state;
    }
};

export default reducer;