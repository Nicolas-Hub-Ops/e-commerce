import styled from "styled-components";
import bannerImage from "/banner/1.png";
import logo from "/logos/1.png";
import { Icon } from '@iconify/react';
import "./style.css";

const ContainerPreMenu = styled.div`
    background: #000;
    color: #FFF;
    text-align: center;
    font-size: 10px;
    margin: 0;
    padding: 5px 0;
`

const ContainerMenu = styled.div`
    width: 100%;
    height: 5em;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: #FFF ;
    background: transparent;
    transition: all 0.5s;
    position: absolute;
    &:hover {
        background: #000000;
    }
`

const ContainerLogo = styled.div`
    width: 10%;
`

const LogoMenu = styled.img`
    width: 70px;
`

const ContainerNav = styled.nav`
    width: 40%;
`

const OrganizerMenu = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ItensOrganizer = styled.li`
    //font-family: 'MilkTea';
    margin: 0 1em;
    &:hover {
        cursor: pointer;
    }
`

const ContainerIcons = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 20%;
`

const InputSearch = styled.input`
    background: transparent;
    padding: 8px 10px;
    width: 15em;
    font-size: 16px;
    color: #FFF;
    border: 0.5px solid #FFF;
    border-radius: 5px;
    &::placeholder {
        color: #FFF;
    }
    &:focus {
        outline: 0;
        border-color: #815248;
    }
`
const IconSearch = styled.img`
    width: 30px;
    position: relative;
    right: 2.5em;
`

const IconsMenu = styled.img`
    width: 30px;
    &:hover {
        cursor: pointer;
    }
`

const ContainerBanner = styled.div`
    display: block;
`
const Banner = styled.img`
    width: 100%;
    &:hover {
        cursor: pointer;
    }
`







const Header = () => {
    return (
        <>
            <ContainerPreMenu>
                Até 6x sem juros
            </ContainerPreMenu>
            <ContainerMenu>
                <ContainerLogo>
                    <LogoMenu src={logo} alt="logo da pagina" />
                </ContainerLogo>
                <ContainerNav>
                    <OrganizerMenu>
                        <ItensOrganizer>Camiseta</ItensOrganizer>
                        <ItensOrganizer>Garrafa</ItensOrganizer>
                        <ItensOrganizer>Caneca</ItensOrganizer>
                        <ItensOrganizer>Azulejo</ItensOrganizer>
                        <ItensOrganizer>Chaveiro</ItensOrganizer>
                        <ItensOrganizer>Almofada</ItensOrganizer>
                        <ItensOrganizer>MDF</ItensOrganizer>
                    </OrganizerMenu>
                </ContainerNav>
                <ContainerIcons>
                    <InputSearch type="text" placeholder="O que voce esta buscando?" />
                    <IconSearch src="/icones/search.png" alt="lupa search" />
                    <IconsMenu src="/icones/usuario-white.png" />
                    <IconsMenu src="/icones/carrinho-white.png" />
                </ContainerIcons>
            </ContainerMenu>
            <ContainerBanner>
                <Banner src={bannerImage} />
            </ContainerBanner>
        </>
    )
}

export default Header;

/*
paleta de cores da pagina
#815248
#654c3b
#e6c4a6
#f3d6c0
#000000
#f2ddbe

*/