import errorImage from "../../assets/404.svg";
import colors from "../../utils/style/colors";
import styled from "styled-components";

function Error () {

    const ErrorContainer = styled.div`
        background-color: ${colors.backgroundLight};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 50px 65px 0px 65px;
    `;

    const StyledImg = styled.img`
        width: 800px;
    `

    const StyledTitle = styled.h1`
        font-size: 30px;
        text-align: center;
        margin: 100px 0px;
    `;

    return (
        <ErrorContainer>
            <StyledTitle>Oups...</StyledTitle>
            <StyledImg src={errorImage} alt="erreur 404" />
            <StyledTitle>Il semblerait qu'il y ait un problème</StyledTitle>
        </ErrorContainer>
    )
}

export default Error;