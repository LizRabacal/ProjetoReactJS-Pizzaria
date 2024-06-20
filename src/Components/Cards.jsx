import React from 'react'
import Floating from "./Floating";

import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Text, Button } from '@chakra-ui/react'
const Cards = () => {
    return (
        <>


            <div className='Cards'>
                <Floating xory='-y'>
                    <Card width={400} align='center' background='#F29661'>
                        <CardHeader>
                            <Heading size='md' color='white'>Pizzas tradicionais</Heading>
                        </CardHeader>
                        <CardBody>
                            <img src="/pizzatrad.png" alt="" />                        </CardBody>
                        <CardFooter>
                            <Button width='200px' colorScheme='orange'>Eu quero</Button>
                        </CardFooter>
                    </Card>
                    <Card width={400} align='center' background='#F29661'>
                        <CardHeader>
                            <Heading color='white' size='md'>Pizzas Fitness</Heading>
                        </CardHeader>
                        <CardBody alignContent='center' alignItems='center' display='flex' justifyContent='center'>
                            <img width='70%' src="/pizzafit.png" alt="" />
                        </CardBody>
                        <CardFooter>
                            <Button width='200px' colorScheme='orange' >Eu quero</Button>
                        </CardFooter>
                    </Card>
                    <Card width={400} align='center' background='#F29661'>
                        <CardHeader>
                            <Heading color='white'  size='md'>Monte sua própria pizza</Heading>
                        </CardHeader>
                        <CardBody alignContent='center' alignItems='center' display='flex' justifyContent='center'>
                            <img width='70%' src="/tabua.png" alt="" />
                        </CardBody>
                        <CardFooter>
                            <Button width='200px'  colorScheme='orange'> Eu quero</Button>
                        </CardFooter>
                    </Card>
                </Floating>



            </div>
        </>

    )
}

export default Cards