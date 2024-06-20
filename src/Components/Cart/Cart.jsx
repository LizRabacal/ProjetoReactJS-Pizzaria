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




const Cart = ({ isOpen, onClose, btnRef }) => {
    const pizzaTotalPrice = useSelector(selectPizzasTotalPriceOfAll);
    const { pizzas } = useSelector(rootReducer => rootReducer.cartReducer);
    console.log(pizzas)

    return (
        <>
            <Drawer

                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}

            >
                <DrawerOverlay />
            <DrawerContent zIndex={30000} >
                    <DrawerCloseButton />
                    <DrawerHeader>Carrinho</DrawerHeader>

                    <DrawerBody>
                        {pizzas.map(p => <CartItem pizza={p} />)}
                        <h1 style={{ fontWeight: "900" }}>Total: {pizzaTotalPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h1>

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