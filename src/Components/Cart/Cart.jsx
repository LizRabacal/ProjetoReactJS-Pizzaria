import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
} from '@chakra-ui/react'
import { useSelector } from "react-redux";
import { selectPizzasTotalPriceOfAll } from '../../redux/cart/cart.selectors';
import CartItem from '../CartItem/CartItem';
import { FaCartShopping } from "react-icons/fa6";




const Cart = ({ isOpen, onClose, btnRef }) => {
    const pizzaTotalPrice = useSelector(selectPizzasTotalPriceOfAll);
    const { pizzas } = useSelector(rootReducer => rootReducer.cartReducer);

    return (
        <>
            <Drawer

                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size="sm"

            >
                <DrawerOverlay />
                <DrawerContent zIndex={30000} background="#ffe9ba">
                    <DrawerCloseButton />
                    <DrawerHeader display="flex" alignItems="center"><FaCartShopping size={25}/>Carrinho   </DrawerHeader>

                    <DrawerBody>
                        {pizzas.map(p => <CartItem pizza={p} />)}
                        <h1 style={{ fontWFeight: "900", fontSize: "26px" }}>Total: {pizzaTotalPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h1>

                    </DrawerBody>

                    <DrawerFooter>

                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancelar
                        </Button>
                        <Button colorScheme='red'>Pagar</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Cart