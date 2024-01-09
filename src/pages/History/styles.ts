import styled from 'styled-components'

export const HistoryContent = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1.5rem;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
  }
`
export const HistoryList = styled.div`
  margin-top: 1.5rem;
  flex: 1;
  overflow: auto;
  overflow-y: scroll;
  max-height: 18rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      text-align: left;
      color: ${(props) => props.theme['gray-100']};
      background-color: ${(props) => props.theme['gray-600']};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      padding: 1rem;
      font-size: 0.875rem;
      background-color: ${(props) => props.theme['gray-700']};
      border-top: 4px solid ${(props) => props.theme['gray-800']};
      color: ${(props) => props.theme['gray-300']};
      line-height: 1.6;

      &:first-child {
        padding-left: 1.5rem;
        width: 50%;
        border-bottom-left-radius: 8px;
      }

      &:last-child {
        padding-right: 1.5rem;
        border-bottom-right-radius: 8px;
      }
    }
  }
`

const COLOR_STATUS = {
  red: 'red-500',
  green: 'green-500',
  yellow: 'yellow-500',
} as const

interface StatusProps {
  statusProps: keyof typeof COLOR_STATUS
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${(props) =>
      props.theme[COLOR_STATUS[props.statusProps]]};
  }
`
