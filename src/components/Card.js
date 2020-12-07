import styled from '@emotion/styled';

const Card = ({ step, name }) => {
    const words = step === 'submitted' ? {
        heading: 'Submitted 🙌!',
        subHeading: `Thanks ${name ? name : ''} for sharing your address with Christina.`,
        text: "If you'd ever like a virtual address book for yourself just email Christina at cmatson93@gmail.com"
    } : {
        heading: 'Welcome 👋',
        subHeading: 'Christina has sent you this link so you can input your address into her own personal address book.',
        text: 'Thanks for taking the time to add your information, you may be rewareded with some good old snail mail one day 😉.'
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