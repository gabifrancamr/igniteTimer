import { HistoryContent, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContent>
      <h1>Histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefas</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>aula da rocket</td>
              <td>25 minutos</td>
              <td>há cerca de 2 meses</td>
              <td>
                <Status statusProps="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>aula da rocket</td>
              <td>25 minutos</td>
              <td>há cerca de 2 meses</td>
              <td>
                <Status statusProps="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>aula da rocket</td>
              <td>25 minutos</td>
              <td>há cerca de 2 meses</td>
              <td>
                <Status statusProps="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>aula da rocket</td>
              <td>25 minutos</td>
              <td>há cerca de 2 meses</td>
              <td>
                <Status statusProps="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>aula da rocket</td>
              <td>25 minutos</td>
              <td>há cerca de 2 meses</td>
              <td>
                <Status statusProps="yellow">Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>aula da rocket</td>
              <td>25 minutos</td>
              <td>há cerca de 2 meses</td>
              <td>
                <Status statusProps="red">Interrompido</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContent>
  )
}
