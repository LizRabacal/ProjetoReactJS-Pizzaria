import React from "react";
import { Box, Flex, Text, Button, Stack, Progress } from "@chakra-ui/react";
import { useTheme } from 'styled-components';
import Telefone from "./Telefone";
import { Link, animateScroll as scroll } from "react-scroll";
import { useSelector } from "react-redux";
import { selectPizzasCount } from '../redux/cart/cart.selectors';
import { useDisclosure } from "@chakra-ui/react";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

import Cart from "./Cart/Cart";



const NavBar = (props) => {


    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <NavBarContainer id="nav" {...props}>
                <img width='6%' id="logo" src="/logo.png" alt="" />
                <Telefone />
                <MenuToggle toggle={toggle} isOpen={isOpen} />
                <MenuLinks isOpen={isOpen} />
            </NavBarContainer>
        </>
    );
};

const CloseIcon = () => (
    <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <title>Close</title>
        <path
            fill="white"
            d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
        />
    </svg>
);

const MenuIcon = () => (
    <svg
        width="24px"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
    >
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
    return (
        <Box display={{ base: "block", md: "none" }} onClick={toggle}>
            {isOpen ? <CloseIcon /> : <MenuIcon />}
        </Box>
    );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
    return (
        <NavLink id='anav' to={to}>
            <Text display="block" {...rest}>
                {children}
            </Text>
        </NavLink>
    );
};

const MenuLinks = ({ isOpen }) => {
    const pizzaCount = useSelector(selectPizzasCount);

    const { isOpen: isopen2, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
        <Box id='box'
            display={{ base: isOpen ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}
        >
            <Stack
                spacing={8}
                align="center"
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "row", "row", "row"]}
                pt={[4, 4, 0, 0]}
            >
                <MenuItem to="/">HOME</MenuItem>
                <Link
                    activeClass="active"
                    to="initialmenu"
                    spy={true}
                    smooth={true}
                    offset={70}
                    duration={800}>
                <MenuItem >MENU</MenuItem>
                </Link>
                <MenuItem>
                    <Link
                        activeClass="active"
                        to="section1"
                        spy={false}
                        smooth={true}
                        offset={70}
                        duration={1000}>LOCALIZAÇÃO</Link>
                </MenuItem>
                <MenuItem to="/modalidades">PIZZA</MenuItem>

                <MenuItem to="">
                    <Button ref={btnRef} colorScheme='transparent' onClick={onOpen}>
                        <FaCartShopping size={30} color="red" /> <h1 style={{ fontSize: "20px", color: "red" }}>({pizzaCount})</h1>
                    </Button>
                    <Cart isOpen={isopen2} onClose={onClose} btnRef={btnRef} />
                </MenuItem>




            </Stack>
        </Box>
    );
};

const NavBarContainer = ({ children, ...props }) => {
    const theme = useTheme()

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={8}
            p={8}
            bg={[theme.colors.secondary, theme.colors.secondary, "transparent", "transparent"]}
            color={["white", "white", theme.colors.primary, theme.colors.primary]}
            {...props}
        >
            {children}
        </Flex>
    );
};

export default NavBar;