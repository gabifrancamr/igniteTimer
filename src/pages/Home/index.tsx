import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinuteAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

const newCycleFormValidationSchedule = zod.object({
  task: zod.string().min(1, 'Digite uma tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo mínimo é de 5 minutos')
    .max(60, 'O ciclo máximo é de 60 minutos'),
})

type typeNewCycleFormData = zod.infer<typeof newCycleFormValidationSchedule>

export function Home() {
  const { register, handleSubmit, watch, reset } =
    useForm<typeNewCycleFormData>({
      resolver: zodResolver(newCycleFormValidationSchedule),
      defaultValues: {
        task: '',
        minutesAmount: 0,
      },
    })

  function newCycleForm(data: typeNewCycleFormData) {
    console.log(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(newCycleForm)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="text"
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
            {...register('task')}
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Banana" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinuteAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
