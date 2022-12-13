import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from './../../utils/style/colors';
import logo from "../../assets/dark-logo.png";

function Header () {

    const StyledNav = styled.nav`
        margin: 50px;
    `;

    const StyledLink = styled(Link)`
        padding: 10px 40px ;
        color: ${colors.secondary};
        text-decoration: none;
        font-size: 18px;
        ${(props) => 
            props.$isFullLink && 
            `color: white; border-radius: 30px; background-color: ${colors.primary};`}
    `;

    const Styledimg = styled.img`
        width: 200px;
        height: 70px;
        margin: 30px;
    `;

    const StyledHeader = styled.header`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    `;

    return (
        <StyledHeader>
            <Styledimg src={logo} alt="logo de shiny-agency" />
            <StyledNav>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/Freelances">Profils</StyledLink>
                <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
            </StyledNav>
        </StyledHeader>
        
    )
}

export default Header;