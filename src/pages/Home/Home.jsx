import styled from "styled-components";
import colors from "../../utils/style/colors";
import { Link } from "react-router-dom";
import homeImage from "../../assets/home-illustration.svg";

const StyledLink = styled(Link)`
        padding: 10px 80px ;
        color: ${colors.secondary};
        text-decoration: none;
        font-size: 18px;
        ${(props) => 
            props.$isFullLink && 
            `color: white; border-radius: 30px; background-color: ${colors.primary};`}
    `;

const StyledSection = styled.section`
  background-color: ${colors.backgroundLight};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 50px 65px 0px 65px;
  height: 645px;
`;

const StyledTitle = styled.h1`
  font-size: 46px;
  line-height: 160.5%;
`

const StyledAside = styled.aside`
  display: flex;
  width: 45%;
  flex-direction: column;
  align-items: flex-start;
  margin: 30px;
`;

const StyledImg = styled.img`
  width: 400px;
  margin: 30px
`;

function Home() {
  return (
    <StyledSection>
      <StyledAside>
        <StyledTitle>Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents</StyledTitle>
        <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
      </StyledAside>
      <aside>
        <StyledImg src={homeImage} alt="image page d'accueil" />
      </aside>
    </StyledSection>
  );
}

export default Home;
