import styled from '@emotion/styled';
import RightArrow from '../assets/RightArrow';

const Button = ({ handleClick, text }) => (
    <StyledButton
        onClick={handleClick}
    >
        {text} 
        {
            text === 'Next' ? 
                <RightArrow />
            : null
        }
    </StyledButton>
);

const StyledButton = styled.button`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 113px;
    height: 68px;
    ${props => props.theme.fonts.regular};
    background: ${props => props.theme.colors.green};
    border: none;
    border-radius: 4px;
    padding: 24px 16px;
    &:focus {
        outline: none;
    }
`;

export default Button;