import { HistoryContent, HistoryList } from './styles'

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
              <td>concluído</td>
            </tr>
            <tr>
              <td>aula da rocket</td>
              <td>25 minutos</td>
              <td>há cerca de 2 meses</td>
              <td>concluído</td>
            </tr>
            <tr>
              <td>aula da rocket</td>
              <td>25 minutos</td>
              <td>há cerca de 2 meses</td>
              <td>concluído</td>
            </tr>
            <tr>
              <td>aula da rocket</td>
              <td>25 minutos</td>
              <td>há cerca de 2 meses</td>
              <td>concluído</td>
            </tr>
            <tr>
              <td>aula da rocket</td>
              <td>25 minutos</td>
              <td>há cerca de 2 meses</td>
              <td>concluído</td>
            </tr>
            <tr>
              <td>aula da rocket</td>
              <td>25 minutos</td>
              <td>há cerca de 2 meses</td>
              <td>concluído</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContent>
  )
}
