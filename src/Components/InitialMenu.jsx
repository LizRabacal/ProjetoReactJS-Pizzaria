import React, { useState } from 'react'
import {SimpleGrid, Box} from '@chakra-ui/react'
import  pizzas  from '../data/pizzas';
import MenuItem from './MenuItem/MenuItem';
import { useSelector } from "react-redux";
import { selectPizzasFitness } from '../redux/cart/cart.selectors';
import { CiCircleRemove } from "react-icons/ci";

import './InitialMenu.scss'
const InitialMenu = () => {
  const [pizzasShown, setPizzasShown] = useState(pizzas);
  const [fitFilter, setFitFilter] = useState(false);

  const [tradFilter, setTradFilter] = useState(false);

  
  const pizzasFit = useSelector(selectPizzasFitness);



  const handleFitnessFilter = () => {
    setPizzasShown(pizzas.filter(p => p.type === "fitness"));
    setFitFilter(true);
    setTradFilter(false)
  }
  const handleTradFilter = () => {
    setPizzasShown(pizzas.filter(p => p.type === "tradicional"));
    setFitFilter(false);
    setTradFilter(true)

    }
  const handleTradClear = () => {
    setPizzasShown(pizzas);
    setFitFilter(false);
    setTradFilter(false)
    }


  return (
    <div className='initialmenu'>
      <div className="button">
        <h3>{fitFilter}</h3>
        <button className={fitFilter ? "fitfilter" : "fit"} onClick={handleFitnessFilter}>Fitness</button>
        <button className={tradFilter ? "tradfilter" : "trad"} onClick={handleTradFilter}>Tradicionais</button>
        {(fitFilter || tradFilter) && (<button onClick={handleTradClear} style={{ background: "#F29661", border: "2px solid #F29661", color: "white" }}>X Limpar</button>)}
       
      </div>


        <h1>Mais populares</h1>


      {/* pratica iteraçao de lista */}
        <div className="simplegrid">
        <SimpleGrid minChildWidth='380px' spacing='20px'>
          {pizzasShown.map(p => (
                    <Box key={p.id}> <MenuItem pizza={p} /> </Box>
               ) 
                    
               
                     
                  )}
              

              </SimpleGrid>
        </div>
        
    </div>
  )
}

export default InitialMenu