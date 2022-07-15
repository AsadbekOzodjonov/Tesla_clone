import React, { useState } from 'react'
import styled from 'styled-components'
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
function Header() {

    const [burgerStatus, setBurgerStatus] = useState(false)

    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                <a href="#">Modal S</a>
                <a href="#">Modal 3</a>
                <a href="#">Modal X</a>
                <a href="#">Modal Y</a>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={() => setBurgerStatus(true)} />
            </RightMenu>

            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)} />
                </CloseWrapper>
                <li><a href="https://t.me/foydali_ilovalar_robot" target="blank">Existing Inventory</a></li>
                <li><a href="https://t.me/foydali_ilovalar_robot" target="blank">Used Inventory</a></li>
                <li><a href="https://t.me/foydali_ilovalar_robot" target="blank"> Trade-in</a></li>
                <li><a href="https://t.me/foydali_ilovalar_robot" target="blank">Cybertrunk</a></li>
                <li><a href="https://t.me/foydali_ilovalar_robot" target="blank">Roadaster</a></li>
                <li><a href="https://t.me/foydali_ilovalar_robot" target="blank">Existing Inventory</a></li>
                <li><a href="https://t.me/foydali_ilovalar_robot" target="blank">Existing Inventory</a></li>
                <li><a href="https://t.me/foydali_ilovalar_robot" target="blank">Existing Inventory</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height:60px;
    position:fixed;
    display:flex;
    align-items:center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index:1;

`

const Menu = styled.div`
     display: flex;  
     align-items: center;
     justify-content: center;
     flex:1;
    

    a {
        font-weight:600;
        text-transform: uppercase;
        flex-wrap:nowrap;
    }
    @media (max-width:768px) {
        display: none;
    }
`
const RightMenu = styled.div`
      display:flex;
      align-items:center;
    a {
        font-weight:600;
        text-transform: uppercase;
        margin-right:10px;
    }
`
const BurgerNav = styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
z-index:16;
list-style:none;
padding: 20px;
display:flex;
flex-direction:column;
text-align:start;
justify-content: flex-srtart;
transform: ${props => props.show? 'translateX(0)' : 'translateX(100%)'};
transition: tranform  0.3s;

li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2); 

    a {
        font-weight: 600;
    }
}

`

const CustomMenu = styled(AiOutlineMenu)`
cursor:pointer;
font-size: 25px;


`

const CustomClose = styled(AiOutlineClose)`
cursor: pointer;
font-size: 25px;
`
const CloseWrapper = styled.div`
display: flex;
justify-content: flex-end;
`