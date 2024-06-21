import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import { FaCartShopping } from "react-icons/fa6";
import './menuitem.css'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { addPizza } from '../../redux/cart/slice';


const MenuItem = ({pizza}) => {

    const dispatch =  useDispatch();
    const preco = pizza.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    const handleAddPizza = () =>{
        Swal.fire({
            title: "Deseja colocar produto no carrinho?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Não",
            confirmButtonText: "Sim"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Pronto!",
                    text: "Seu produto foi adicionado ao carrinho",
                    icon: "success"
                });
            dispatch(addPizza(pizza));
            }
        });

    }
  return (
        
      <>  

          <Card maxW='sm' background="transparent" border='2px dashed #F29661'>
              <CardBody>
                <div className="category">
                    {pizza.type == "fitness" ? "Fitness" : "Tradicional"}
                </div>
                  <Image
                      src= {pizza.urlImage}
                      alt='urlimg'
                      borderRadius='lg'
                  />
                  <Stack mt='6' spacing='3'>
                      <Heading size='md'>{pizza.name}</Heading>
                      <Text>
                          {pizza.desc}
                      </Text>
                      <Text color='red' fontSize='2xl'>
                          {preco}
                      </Text>
                  </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                  <ButtonGroup spacing='2'>
                      <Button variant='solid' colorScheme='red'>
                          Comprar agora
                      </Button>
                      <Button leftIcon={<FaCartShopping/>} variant='ghost' onClick={handleAddPizza} colorScheme='red'>
                          Adicionar ao carrinho
                      </Button>
                  </ButtonGroup>
              </CardFooter>
          </Card>
    </>
  )
}

export default MenuItem