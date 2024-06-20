import React from 'react'
import './cartitem.css'
import { useSelector } from "react-redux";
import rootReducer from '../../redux/root-reducer';
import { selectPizzasCount } from '../../redux/cart/cart.selectors';
import { useDispatch } from 'react-redux';
import { addPizza, removePizza } from '../../redux/cart/slice';


const CartItem = ({ pizza }) => {
    const dispatch = useDispatch();
    const handleAddPizza = () => {
        
        dispatch(addPizza(pizza));

    }
    const handleRemovePizza = () => {
        dispatch(removePizza(pizza));

    }
    const pizzaCount = useSelector(selectPizzasCount);
    const preco = pizza.totalprice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

    return (
        <div className='cartitem'>
            <h2>{pizza.name}</h2>


            <div className="qtd">
            <button onClick={handleAddPizza}>+</button>
            <h3>{pizza.quantity}</h3>
                <button onClick={handleRemovePizza}>-</button>

            </div>
            <h4>{preco}</h4>


        </div>
    )
}

export default CartItem