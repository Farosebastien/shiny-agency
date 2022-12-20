import styled from 'styled-components';
import { useTheme } from '../../utils/hooks/Hooks';
import colors from '../../utils/style/colors';
import { useState } from 'react';

const InputWrapper = styled.div`
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
`;

const StyledInput = styled.input`
  border: none;
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  background-color: transparent;
  border-bottom: 1px solid
    ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  margin-top: 5px;
  margin-bottom: 15px;
`;

function EmailInput () {
    const { theme } = useTheme();

    const [inputValue, setInputValue] = useState('');


    return (
        <InputWrapper theme={theme}>
          <StyledLabel theme={theme}>Adresse Email</StyledLabel>
          <StyledInput theme={theme} onChange={(e) => setInputValue(e.target.value)} />
          {inputValue}
        </InputWrapper>
      )
}

export default EmailInput;