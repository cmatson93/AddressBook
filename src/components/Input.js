import TextField from '@material-ui/core/TextField';
import styled from '@emotion/styled';

const Input = ({ label, heading, value, handleChange }) => (
    <InputContainer>
        <Label>
            {heading}
        </Label>
        <StyledInput
            id={`${label}-input`}
            placeholder={label}
            value={value || ''}
            onChange={(e) => handleChange(e.target.value)}
        />
        {/* <TextField 
            id="outlined-basic"     
            label={label}
            variant="outlined" 
            value={value || ''}
            onChange={(e) => handleChange(e.target.value)}
        /> */}
    </InputContainer>
)

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledInput = styled.input`
    ${props => props.theme.fonts.medium};
    padding: 22px;
    height: 68px;
    background: ${props => props.theme.colors.darkPurple};
    border-radius: 6px;
    border: 2px solid ${props => props.theme.colors.purple};
    &:focus {
        border: 2px solid ${props => props.theme.colors.green};
        outline: none;
    }
`;

const Label = styled.label`
    ${props => props.theme.fonts.label};
    margin: 16px 0;
`;

export default Input;