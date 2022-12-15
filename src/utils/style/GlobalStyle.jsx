import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';
import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const StyledGlobalStyle = createGlobalStyle`
    div {
    font-family: 'Trebuchet sans MS', Helevetica, sans-serif;
    }

    body {
        background-color: ${({ isDarkMode }) => (isDarkMode ? colors.backgroundDark : colors.backgroundLight)};
        margin: 0;  
    }

`;

function GlobalStyle () {

    const { theme } = useContext(ThemeContext);

    return <StyledGlobalStyle isDarkMode={theme === "dark"} />
}

export default GlobalStyle;