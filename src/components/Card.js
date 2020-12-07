import styled from '@emotion/styled';

const Card = ({ step }) => {
    const words = step === 'submitted' ? {
        heading: 'Submitted!',
        subHeading: 'Thanks for sharing your address with Christina.',
        text: "If you'd ever like a virtual address book for yourself just email Christina at cmatson93@gmail.com"
    } : {
        heading: 'Welcome 👋',
        subHeading: 'Christina has sent you this link so you can input your address into her own personal address book.',
        text: "Your personal information will be secure in Christina’s own personal database and shared with no one else. "
    };

    return (
        <CardContainer>
            <Heading>{words.heading}</Heading>
            <SubHeading>{words.subHeading}</SubHeading>
            <Text>{words.text}</Text>
        </CardContainer>
    );
}

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.colors.lightPurple};
    border-radius: 6px;
    padding: 18px;
`;

const Heading = styled.h1`
    ${props => props.theme.fonts.heading};
`;

const SubHeading = styled.h1`
    ${props => props.theme.fonts.subHeading};
`;

const Text = styled.p`
    ${props => props.theme.fonts.description};
`;

export default Card;