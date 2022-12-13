import { useParams, Link } from "react-router-dom";

function Survey () {
    const { questionNumber } = useParams();

    const questionNumberInt = parseInt(questionNumber);

    let buttons;

    if (questionNumberInt === 1) {
        buttons = (
            <nav>
                <Link to={`/survey/${questionNumberInt+1}`}>suivant</Link>
            </nav>
        );
    } else if (questionNumberInt === 10) {
        buttons = (
            <nav>
                <Link to="/resultats">Résultats</Link>
            </nav>
        );
    } else if (questionNumberInt > 1 || questionNumberInt < 10 ) {
        buttons = (
            <nav>
                <Link to={`/survey/${questionNumberInt-1}`}>précédent</Link>
                <Link to={`/survey/${questionNumberInt+1}`}>suivant</Link>
            </nav>
        );
    }
 
    return (
        <div>
            <h1>Questionnaire</h1>
            <h2>Question {questionNumberInt}</h2>
            {buttons}
        </div>
    )
}

export default Survey;