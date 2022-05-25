import React, { useReducer } from 'react';
var initialState = {

    items: [],
    cart: []
};

function reducer(state, action) {
    switch (action.type) {
        case "save":
            return { ...state, items: [...state.items, action.payload] };
        case "addToCart":
            return { ...state, cart: [...state.cart, action.payload] };
        default:
            throw new Error();
    }
}

export {initialState, reducer};