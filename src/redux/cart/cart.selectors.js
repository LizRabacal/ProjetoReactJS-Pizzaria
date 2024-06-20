import rootReducer from "../root-reducer"

export const selectPizzasCount = (rootReducer) =>{
    return rootReducer.cartReducer.pizzas.reduce(
        (acc, curr) => acc + curr.quantity,
        0
    );
};
export const selectPizzasTotalPriceOfAll = (rootReducer) =>{
    return rootReducer.cartReducer.pizzas.reduce(
        (acc, curr) => acc + curr.totalprice,
        0
    );
};
