import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from './../../utils/style/colors';
import logo from "../../assets/dark-logo.png";

    const HeaderNav = styled.nav`
        margin: 50px;
    `;

    const HeaderLink = styled(Link)`
        padding: 10px 40px ;
        color: ${colors.secondary};
        text-decoration: none;
        font-size: 18px;
        ${(props) => 
            props.$isFullLink && 
            `color: white; border-radius: 30px; background-color: ${colors.primary};`}
    `;

    const Headerimg = styled.img`
        width: 200px;
        height: 70px;
        margin: 30px;
    `;

    const StyledHeader = styled.header`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    `;

function Header () {

    return (
        <StyledHeader>
            <Headerimg src={logo} alt="logo de shiny-agency" />
            <HeaderNav>
                <HeaderLink to="/">Accueil</HeaderLink>
                <HeaderLink to="/Freelances">Profils</HeaderLink>
                <HeaderLink to="/survey/1" $isFullLink>Faire le test</HeaderLink>
            </HeaderNav>
        </StyledHeader>
        
    )
}

export default Header;