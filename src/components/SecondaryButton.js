import styled from '@emotion/styled';

const SecondaryButton = ({ handleClick, text }) => (
    <StyledSecondaryButton
        onClick={handleClick}
    >
        {text} 
    </StyledSecondaryButton>
);

const StyledSecondaryButton = styled.button`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 113px;
    height: 68px;
    ${props => props.theme.fonts.regular};
    color: ${props => props.theme.colors.grey};
    background: ${props => props.theme.colors.darkPurple};
    border: none;
    border-radius: 4px;
    padding: 24px 16px;
    &:focus {
        outline: none;
    }
`;

export default SecondaryButton;