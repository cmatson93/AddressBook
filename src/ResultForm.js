import styled from '@emotion/styled';
import Input from './components/Input';
import Button from './components/Button';
import firestore from './firestore/index.js';

const ResultForm = ({ 
    name, setName, 
    addressLine, setAddressLine,
    city, setCity, 
    state, setState, 
    zipCode, setZipCode,
    currentIndex, setCurrentIndex 
}) => {
    
    const handleSubmitForm = async () => {
        const address = {
            'name' : name,
            'addressLine' : addressLine,
            'city' : city, 
            'state' : state,
            'zipCode' : zipCode
        };
        const response = await firestore.add(address);
        console.log('response: ', response);
        setCurrentIndex(currentIndex + 1)
    };

    return (
        <ResultFormContainer>
            <Input 
                heading='Name'
                label='Name'
                value={name}
                handleChange={setName}
            />
            <Input 
                heading='Address Line'
                label='Address Line'
                value={addressLine}
                handleChange={setAddressLine}
            />
            <TwoCol>
                <Input 
                    heading='City'
                    label='City'
                    value={city}
                    handleChange={setCity}
                />
                <Input 
                    heading='State'
                    label='State'
                    value={state}
                    handleChange={setState}
                />
            </TwoCol>
            <Input 
                heading='Zip Code'
                label='Zip Code'
                value={zipCode}
                handleChange={setZipCode}
            />
            <ButtonContainer>
                <Button 
                    text='Submit'
                    handleClick={() => handleSubmitForm()}
                ></Button>
            </ButtonContainer>
        </ResultFormContainer>
    );
}

const ResultFormContainer = styled.div``;

const TwoCol = styled.div`
    display: grid;
    grid-template-columns: 60% 35%;
    column-gap: 18px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`;

export default ResultForm;