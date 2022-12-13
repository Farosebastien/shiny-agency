import SebastienPicture from '../../assets/sebastien-photo.webp';
import Card from '../../components/Card/Card';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

function Freelances() {

    const CardsContainer = styled.div`
        margin: 20px 0px;
        width: 100%;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-wrap: wrap;

    `;

    const StyledTitle = styled.h1`
        margin: 40px 0px;
        font-size: 30px;
        text-align: center;
    `;

    const StyledText = styled.p`
        color: ${colors.secondary};
        margin: 40px 0px;
        font-size: 20px;
        text-align: center;
    `;

    const freelanceProfiles = [
        {
            name: 'Jane Doe',
            jobTitle: 'Devops',
        },
        {
            name: 'John Doe',
            jobTitle: 'Developpeur frontend',
        },
        {
            name: 'Jeanne Biche',
            jobTitle: 'Développeuse Fullstack',
        },
        {
            name: "Sébastien Faro",
            jobTitle: "Développeur Fullstack",
            picture: SebastienPicture
        }
    ]


    return (
        <div>
            <StyledTitle>Trouvez votre prestataire</StyledTitle>
            <StyledText>Chez Shiny nous réunissons les meilleurs profils pour vous.</StyledText>
            <CardsContainer>
                {freelanceProfiles.map((profile, index) => (
                <Card key={`${profile.name}-${index}`} picture={profile.picture} label={profile.jobTitle} title={profile.name} />
            ))}
            </CardsContainer>
        </div>
    )
}

export default Freelances;