import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 97vh;
  background-color: #24263c;
  text-align: center;
  padding: 10px;
`
export const InputContainer = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: #383a4e;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
`
export const Paragraph = styled.p`
  color: #ffffff;
`
export const ErrorParagraph = styled.p`
  color: #ef4444;
`
export const InputField = styled.input`
  background-color: #ffffff;
  width: 100%;
  border: none;
  outline: none;
  height: 30px;
  border-radius: 5px;
  padding: 10px;
`
