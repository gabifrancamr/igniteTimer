import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  gap: 1rem;

  @media (max-width: 399px) {
    font-size: 3rem;
  }

  @media (min-width: 400px) {
    font-size: 5rem;
  }

  @media (min-width: 484px) {
    font-size: 7rem;
  }

  @media (min-width: 500px) and (max-width: 600px) {
    font-size: 9rem;
  }

  span {
    background-color: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`

export const Separator = styled.div`
  padding: 2rem;
  color: ${(props) => props.theme['green-500']};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`
