import React from 'react'
import {SimpleGrid, Box} from '@chakra-ui/react'
import  pizzas  from '../data/pizzas';
import MenuItem from './MenuItem/MenuItem';
const InitialMenu = () => {
  return (
    <div className='initialmenu'>

        <h1>Mais populares</h1>


      {/* pratica iteraçao de lista */}
        <div className="simplegrid">
        <SimpleGrid minChildWidth='420px' spacing='20px'>
                  {pizzas.map(p => (
                    <Box key={p.id}> <MenuItem pizza={p} /> </Box>
               ) 
                    
               
                     
                  )}
              

              </SimpleGrid>
        </div>
        
    </div>
  )
}

export default InitialMenu