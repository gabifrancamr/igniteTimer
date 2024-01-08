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
    gap: 3.5rem;
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
