import React from 'react'
import styles from './Banner.module.css';
import { useTheme } from 'styled-components';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { FaCartShopping } from "react-icons/fa6";

import Floating from "./Floating";

const Banner = () => {
  const theme = useTheme()

  return (
    <div style={{background: theme.colors.terc}}  className={styles.banner}>
<Floating xory='-x'>
   
      <div className="part2" >

        <div className="texto">
       
          <h1 id='h1'>
              A melhor pizza do          <h1 id='brasil'>‎  Brasil</h1>
          </h1>

 

        </div>


        <span>Pizzas artesanais e tradicionais</span>
        <span id='frete'> * Frete grátis a partir de R$50,00</span>


        <Button leftIcon={<FaCartShopping />} marginTop={5} colorScheme='orange' width='200px'  variant='solid'>
          Comprar 
        </Button>
        
      </div>
      </Floating>



        <div className="part1" style={{width: '50% !important'}}>

        <img src="/pizza4.png" id='pizzaimg' width='900%' alt="" />


      </div>

    </div>
  )
}

export default Banner