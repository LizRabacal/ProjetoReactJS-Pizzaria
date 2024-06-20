import { useState, useEffect } from 'react'
import Floating from './Floating'
import {
  motion
} from "framer-motion";
import { Input, Stack, Button, InputLeftAddon, InputGroup, Textarea } from '@chakra-ui/react';
import { MdOutlineMailOutline } from "react-icons/md";
import { FaUserPen } from "react-icons/fa6";
import { FaMapLocation } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import './section.css'
import { useTheme } from 'styled-components';

const Section = () => {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    clicked: { scale: 1.1, transition: { duration: 0.5 } },
    normal: { scale: 1 },
  }

const theme = useTheme()


  return (
    <>

      <Floating xory={'-x'}>

        <div className="containerzao">
          <div className="container" style={{ background: theme.colors.primary }}>

            <div className="container1" onClick={() => setIsOpen(false)}>

              <div className="info">
                <FaMapLocation />
                <p>
                  R. 7 de Setembro, 77 - Centro, Candeias - BA, 43805-350

                </p>

              </div>
              <div className="info">
                <MdLocalPhone />
                <p>
                  (71) 99271-4751
                </p>

              </div>
              <div className="info">
                <MdEmail />
                <p>
                  spartacuscomercial@gmail.com
                </p>

              </div>
            </div>



            <motion.div
              animate={isOpen ? "clicked" : "normal"}
              variants={variants}
              initial="normal"
              onClick={() => setIsOpen(true)}
              className='form'
              style={{ cursor: !isOpen && 'pointer' }}

            >

              <Stack spacing={6}>
                <h1>Fale conosco</h1>

                <InputGroup>
                  <InputLeftAddon><FaUserPen size={25} /></InputLeftAddon>
                  <Input type='tel' placeholder='Insira seu nome' />
                </InputGroup>
                <InputGroup>
                  <InputLeftAddon><MdOutlineMailOutline size={25} /></InputLeftAddon>
                  <Input type='email' placeholder='Insira seu email' />
                </InputGroup>
                <InputGroup>
                  <InputLeftAddon >+55</InputLeftAddon>
                  <Input type='tel' placeholder='Telefone' />
                </InputGroup>
                <Textarea
                  placeholder='Insira sua mensagem'
                  size='lg'
                />
                <Button colorScheme='teal'>Enviar</Button>
              </Stack>

            </motion.div>

          </div>





        </div>
      </Floating>
      </>
  )
}

export default Section