import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`

export const FormContainer = styled.div`
  width: 100%;
  font-size: 1.125rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  font-weight: bold;
  flex-wrap: wrap;
`

const BaseInput = styled.input`
  height: 2.5rem;
  padding: 0 0.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  color: ${(props) => props.theme['gray-100']};
  background-color: transparent;
  font-weight: bold;
  font-size: 1.125rem;

  &:focus {
    box-shadow: none;
    border-bottom: 2px solid ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const InputTask = styled(BaseInput)`
  flex: 1;
`

export const InputMinute = styled(BaseInput)`
  width: 4rem;
`

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  color: ${(props) => props.theme['gray-100']};
  display: flex;
  font-size: 10rem;
  gap: 1rem;
  line-height: 8rem;

  span {
    background-color: ${(props) => props.theme['gray-700']};
    border-radius: 8px;
    padding: 2rem 1rem;
  }
`

export const Separator = styled.div`
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme['green-500']};
  overflow: hidden;
`

export const ButtonStartCount = styled.button`
  width: 100%;
  padding: 1rem 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};
  border: 0;
  font-weight: bold;
`
