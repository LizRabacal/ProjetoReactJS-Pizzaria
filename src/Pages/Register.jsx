import React, { useState } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import './register.css'
import { useColorModeValue } from '@chakra-ui/react'
const Register = () => {
    const [userCredentials, setUserCredentials] = useState();
    const [type, setType] = useState('login')
    const handleUserCredentials = (e) => {
        setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
    }

    const colors = useColorModeValue(
        ['red.50', 'teal.50', 'blue.50'],
        ['red.900', 'teal.900', 'blue.900'],
    )
    const [tabIndex, setTabIndex] = useState(0)
    const bg = colors[tabIndex]

    return (
        <div className='register'>
            <h1>{type}</h1>

            <Tabs isFitted variant='enclosed' width='50%' bg='red' >
                <TabList mb='1em'>
                    <Tab _selected={{ color: 'white', bg: '#F2B061' }}>Login</Tab>
                    <Tab _selected={{ color: 'white', bg: '#F50501' }}>Cadastro</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel bg='red'>
                        <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>

        </div>
    )
}

export default Register