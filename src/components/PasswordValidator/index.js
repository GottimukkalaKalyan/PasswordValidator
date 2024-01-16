import {useState} from 'react'
import {
  MainContainer,
  InputContainer,
  Heading,
  Paragraph,
  InputField,
  ErrorParagraph,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const changeInput = event => {
    setPassword(event.target.value)
  }

  return (
    <MainContainer>
      <InputContainer>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <InputField type="password" onChange={changeInput} />
        {password.length < 8 && (
          <ErrorParagraph>
            Your password must be at least 8 characters
          </ErrorParagraph>
        )}
      </InputContainer>
    </MainContainer>
  )
}

export default PasswordValidator
