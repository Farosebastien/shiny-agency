import { Loader } from "../../utils/Atoms";
import Card from '../../components/Card/Card';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { useFetch } from "../../utils/hooks/Hooks";;

    const CardsContainer = styled.div`
        margin: 20px 0px;
        width: 100%;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-wrap: wrap;

    `;

    const CardsTitle = styled.h1`
        margin: 40px 0px;
        font-size: 30px;
        text-align: center;
    `;

    const CardsText = styled.p`
        color: ${colors.secondary};
        margin: 40px 0px;
        font-size: 20px;
        text-align: center;
    `;

    const LoaderWrapper = styled.div`
        display: flex;
        justify-content: center;
    `;

function Freelances() {
    const { data, error, isLoading } = useFetch("http://localhost:8000/freelances");
    const freelances = data.freelancersList;


    if (error) {
        return <span>Oups, il y a eu un problème!</span>
    }

    return (
        <div>
            <CardsTitle>Trouvez votre prestataire</CardsTitle>
            <CardsText>Chez Shiny nous réunissons les meilleurs profils pour vous.</CardsText>
            {isLoading ? (
                <LoaderWrapper>
                    <Loader />
                </LoaderWrapper>
            ) : (
                <CardsContainer>
                        {freelances && freelances.map((profile, index) => (
                        <Card key={`${profile.name}-${index}`} picture={profile.picture} label={profile.job} title={profile.name} />
                    ))}
                </CardsContainer>
            )}
        </div>
    )
}

export default Freelances;