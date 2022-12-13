import DefaultPicture from '../../assets/photo.webp';
import Card from '../../components/Card/Card';

function Freelances() {

    const freelanceProfiles = [
        {
            name: 'Jane Doe',
            jobTitle: 'Devops',
            picture: DefaultPicture,
        },
        {
            name: 'John Doe',
            jobTitle: 'Developpeur frontend',
            picture: DefaultPicture,
        },
        {
            name: 'Jeanne Biche',
            jobTitle: 'Développeuse Fullstack',
            picture: DefaultPicture,
        },
    ]


    return (
        <div>
            <h1>Freelances</h1>
            {freelanceProfiles.map((profile, index) => (
                <Card key={`${profile.name}-${index}`} label={profile.jobTitle} title={profile.name} />
            ))}
        </div>
    )
}

export default Freelances;