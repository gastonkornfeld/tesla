import React, {useState} from 'react'
import styled from "styled-components"
import ListIcon from "@material-ui/icons/List";
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector} from 'react-redux';




function Header() {
    const[burguerStatus, setBurguerStatus] = useState(false);
    const cars = useSelector(selectCars)
  

    return (
        <Container>
            <a>
                <img src="images/logo.svg" alt="Logo tesla"/>
            </a>
            <Menu>
                {cars && cars.map((car, index) =>(
                    <a key = {index} href="#"> {car} </a>
                ))}
                
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla account</a>
                <CustomMenu onClick= {() => setBurguerStatus(true)} />
            </RightMenu>
            <BurguerNav show = {burguerStatus}>
                <CloseWrapper>
                    <CustomClose onClick= {() => setBurguerStatus(false)}/>
                </CloseWrapper>
                {cars && cars.map((car, index) =>(
                    <li key = {index}><a  href="#"> {car} </a></li>
                ))}
                <li><a href="#">Exisiting inventory</a></li>
                <li><a href="#">Used inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadaster</a></li>
                <li><a href="#">hola</a></li>
                <li><a href="#">manola</a></li>
                <li><a href="#">cara</a></li>
                <li><a href="#">cola</a></li>



            </BurguerNav>
        </Container>
    )
}

export default Header


const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left:0;
    right:0;
    z-index:1
`


const Menu = styled.div`
    display:flex;
    align-items:center;
    flex: 1;
    justify-content:center;

    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
        
    }
    @media(max-width: 768px ) {
        display: none;
    }
`

const RightMenu = styled.div`
display: flex;
align-items: center;

a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
}
`

const CustomMenu = styled(ListIcon)`
    cursor: pointer;
`

const BurguerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 100;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-out;
    
    
    li {
        padding: 15px 0; 
        border-bottom: 1px solid rgba(0,0,0, 0.2);

        a {
            font-weight: 600;
        }
    }
`


const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`