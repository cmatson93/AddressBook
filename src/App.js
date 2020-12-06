import { useState } from 'react';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';
import Header from './Header';
import Input from './components/Input';
import Button from './components/Button';
import ResultForm from './ResultForm';

const theme = {
  colors: {
    green: '#25CC88',
    darkPurple: '#2B2C54',
    purple: '#494b7c',
    lightPurple: '#8687A8',
    grey: '#98989D',
    white: '#FFFFFF'
  }, 
  fonts: {
    regular: {
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: '21px',
      letterSpacing: '0em',
      textAlign: 'left',
      color: '#FFFFFF'
    },
    medium: {
      fontSize: '22px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '26px',
      letterSpacing: '0em',
      textAlign: 'left',
      color: '#FFFFFF'

    },
    heading: {
      fontSize: '26px',
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: '30px',
      letterSpacing: '0em',
      textAlign: 'left',
      color: '#FFFFFF'
    }, 
    label: {
      fontSize: '22px',
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: '26px',
      letterSpacing: '0em',
      textAlign: 'left',
      color: '#98989D'
    }
  },
  fontWeight: {}
}

function App() {
  const steps = [
    'name',
    'addressLine',
    'city',
    'state',
    'zipCode'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const [name, setName] = useState(null);
  const [addressLine, setAddressLine] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [zipCode, setZipCode] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
          <FormContainer
            results={currentIndex === steps.length ? 'true' : 'false'}
          >
            {
              steps[currentIndex] === 'name' ?
                <Input 
                  heading='Lets start with your name'
                  label='Name'
                  value={name}
                  handleChange={setName}
                /> : steps[currentIndex] === 'addressLine' ? 
                  <Input 
                    heading='Your house number and street'
                    label='Address Line'
                    value={addressLine}
                    handleChange={setAddressLine}
                  /> : steps[currentIndex] === 'city' ? 
                    <Input 
                      heading='What city do you live in?'
                      label='City'
                      value={city}
                      handleChange={setCity}
                    /> : steps[currentIndex] === 'state' ? 
                      <Input
                        heading='Almost there.. your state'
                        label='State'
                        value={state}
                        handleChange={setState}
                      /> : steps[currentIndex] === 'zipCode' ?
                        <Input 
                          heading='Last but not least.. Zip Code'
                          label='Zip Code'
                          value={zipCode}
                          handleChange={setZipCode}
                        /> : null
            }
            {
              currentIndex === steps.length ? 
                <ResultForm
                  name={name}
                  setName={setName}
                  addressLine={addressLine}
                  setAddressLine={setAddressLine}
                  city={city}
                  setCity={setCity}
                  state={state}
                  setState={setState}
                  zipCode={zipCode}
                  setZipCode={setZipCode}
                /> :
                <ButtonContainer>
                  <Button 
                    text='Next'
                    handleClick={() => setCurrentIndex(currentIndex + 1)}
                  ></Button>
                </ButtonContainer>
            }
          </FormContainer>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  background: ${props => props.theme.colors.darkPurple};
  height: 100%;
  display: flex;
  flex-direction: column;
  `;

const FormContainer = styled.div`
  padding: 32px;
  margin-top: ${props => props.results === 'true' ? '50px' : '110px'};
  padding-top: ${props => props.results === 'true' ? '0' : '32px'};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`;

export default App;
