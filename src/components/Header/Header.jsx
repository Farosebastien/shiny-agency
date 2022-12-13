import { Link } from "react-router-dom";

function Header () {
    return (
        <nav>
            <Link to="/">Acceuil</Link>
            <Link to="/Freelances">Freelances</Link>
            <Link to="/survey/1">Questionnaire</Link>
        </nav>
    )
}

export default Header;