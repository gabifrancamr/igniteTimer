import { Play } from 'phosphor-react'
import {
  ButtonStartCount,
  CountdownContainer,
  FormContainer,
  HomeContainer,
  InputMinute,
  InputTask,
  Separator,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <InputTask
            type="text"
            id="task"
            placeholder="Dê um nome ao seu projeto"
          />
          <label htmlFor="minutesAmount">durante</label>
          <InputMinute type="number" id="minutesAmount" placeholder="00" />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <ButtonStartCount type="submit">
          <Play size={24} />
          Começar
        </ButtonStartCount>
      </form>
    </HomeContainer>
  )
}
