import styled from 'styled-components'

const ButtonContainer = styled.button`
  color: red;
  width: 200px;
  height: 50px;
  margin: 10px;
`

const Title = styled.h1`
  color: red;
`

const Button = () => {
  return (
    <div>
      <Title>Hello</Title>

      <ButtonContainer>Button</ButtonContainer>
    </div>
  )
}

export default Button
