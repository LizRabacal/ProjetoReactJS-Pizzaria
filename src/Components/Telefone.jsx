import React from 'react'
import { IconButton } from '@chakra-ui/react'
import { FaPhone } from "react-icons/fa";

const Telefone = () => {
  return (
    <div style={{display: 'flex', gap: '3px'}}>
          <IconButton
              isRound={true}
              colorScheme='yellow'
              aria-label='Call Segun'
              variant='ghost'
              size='lg'
              icon={<FaPhone color='red' size={27} />}
          />
          <div className="call">
            <h2 style={{fontSize: '15px'}}>Ligue para pedir</h2>
              <h3 style={{ fontSize: '18px', fontWeight: 'bolder' }}>(71) 99207-5679</h3>
          </div>
    </div>
  )
}

export default Telefone