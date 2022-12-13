import PropTypes from "prop-types";
import DefaultPicture from '../../assets/profile.png';
import styled from "styled-components";
import colors from './../../utils/style/colors';

function Card ({ label, title, picture }) {

    const CardLabel = styled.span`
        color: ${colors.primary};
        margin: 20px;
        font-size: 18px;
        font-weight: bold;
    `;

    const CardImage = styled.img`
        height: 150px;
        width: 150px;
        align-self: center;
        margin: 40px;
        border-radius: 50%;

    `;

    const CardTitle = styled.span`
        margin: 20px;
        text-align: center;
        font-size: 18px;
    `

    const CardWrapper = styled.div`
        display: flex;
        margin: 60px 40px;
        flex-direction: column;
        padding: 15px;
        background-color: ${colors.backgroundLight};
        border-radius: 30px;
        width: 350px;
        height: 350px;
        transition: 200ms;
        &:hover {
            cursor: pointer;
            box-shadow: 2px 2px 10px #e2e3e9;
        }
    `;

    return (
        <CardWrapper>
            <CardLabel>{label}</CardLabel>
            <CardImage src={picture} alt="freelance" height={80} width={80} />
            <CardTitle>{title}</CardTitle>
        </CardWrapper>
    )
}

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
    label: "",
    title: "",
    picture: DefaultPicture,
}

export default Card;