import styled from '@emotion/styled';

const Header = () => (
    <HeaderContainer>
        <Title>Christina’s Address Book</Title>
    </HeaderContainer>
);

const HeaderContainer = styled.div`
    background: ${props => props.theme.colors.purple};
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
`;

const Title = styled.div`
  ${props => props.theme.fonts.heading};
`;

export default Header;