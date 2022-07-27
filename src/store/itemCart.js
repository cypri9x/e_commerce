import React, { useReducer } from 'react';
var initialState = {

    items: [],
    cart: []
};
function addToCart(state,payload) {
    let newState = {...state};
    let item = newState.cart.find(itemCart=> itemCart.id===payload.id);
    if (item){
        item.count = item.count+1;
    }
    else{
        payload.count = 1;
        newState.cart.push(payload);
    }

    return newState;



}

function reducer(state, action) {
    switch (action.type) {
        case "save":
            return { ...state, items: [...state.items, {...action.payload, id: (new Date()).getTime()}] };
        case "addToCart":
            return addToCart(state,action.payload);
        default:
            throw new Error();
    }

}

export {initialState, reducer};
