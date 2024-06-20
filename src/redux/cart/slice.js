import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pizzas: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addPizza: (state, action) => {
            const pizzaIsAlreadyInCart = state.pizzas.some(p => p.id == action.payload.id);

            if (pizzaIsAlreadyInCart){
                state.pizzas = state.pizzas.map(p => p.id == action.payload.id ? {...p, quantity: p.quantity + 1, totalprice: (p.quantity+1) * p.price} : p);

                return;
            }

            state.pizzas = [...state.pizzas, { ...action.payload, quantity: 1, totalprice: action.payload.price }];

        },
        removePizza: (state, action) => {
            const pizzaIsAlreadyInCart = state.pizzas.some(p => p.id == action.payload.id);

            if (pizzaIsAlreadyInCart){
                state.pizzas = state.pizzas.map(p => p.id == action.payload.id ? {...p, quantity: p.quantity - 1, totalprice: (p.quantity-1) * p.price} : p)
                .filter(p => p.quantity > 0);

                return;
            }


        }

    }


})


export const { addPizza, removePizza } = cartSlice.actions;
export default cartSlice.reducer;