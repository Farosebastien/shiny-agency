import styled from "styled-components";
import colors from "../../utils/style/colors";
import { StyledLink } from "../../utils/Atoms";
import { useTheme } from "../../utils/hooks/Hooks";
import homeImage from "../../assets/home-illustration.svg";

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

  const theme = useTheme();

  return (
    <HomeSection>
      <HomeAside theme={theme}>
        <HomeTitle theme={theme}>Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents</HomeTitle>
        <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
      </HomeAside>
      <aside>
        <HomeImg src={homeImage} alt="image page d'accueil" />
      </aside>
    </HomeSection>
  );
}

export default Home;
