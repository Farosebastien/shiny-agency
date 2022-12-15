import styled from "styled-components";
import colors from "../../utils/style/colors";
import { Link } from "react-router-dom";
import homeImage from "../../assets/home-illustration.svg";

const HomeLink = styled(Link)`
        padding: 10px 80px ;
        color: ${colors.secondary};
        text-decoration: none;
        font-size: 18px;
        ${(props) => 
            props.$isFullLink && 
            `color: white; border-radius: 30px; background-color: ${colors.primary};`}
    `;

const HomeSection = styled.section`
  background-color: ${colors.backgroundLight};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 50px 65px 0px 65px;
  height: 645px;
`;

const HomeTitle = styled.h1`
  font-size: 46px;
  line-height: 160.5%;
`

const HomeAside = styled.aside`
  display: flex;
  width: 45%;
  flex-direction: column;
  align-items: flex-start;
  margin: 30px;
`;

const HomeImg = styled.img`
  width: 400px;
  margin: 30px
`;

function Home() {
  return (
    <HomeSection>
      <HomeAside>
        <HomeTitle>Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents</HomeTitle>
        <HomeLink to="/survey/1" $isFullLink>Faire le test</HomeLink>
      </HomeAside>
      <aside>
        <HomeImg src={homeImage} alt="image page d'accueil" />
      </aside>
    </HomeSection>
  );
}

export default Home;
