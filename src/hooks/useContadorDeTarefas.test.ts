import '@testing-library/jest-dom'
import { renderHook } from '@testing-library/react'
import useContadorDeTarefas from './useContadorDeTarefas'

test('Deve retornar a quantidade de tarefas', () => {
    const tarefasMock = [
        {
            id: 1,
            tarefa: 'Estudar React',
            feita: false
        },
        {
            id: 2,
            tarefa: 'Estudar Next',
            feita: false
        },
        {
            id: 3,
            tarefa: 'Estudar Jest',
            feita: false
        }
    ]

    const { result } = renderHook(() => useContadorDeTarefas(tarefasMock))

    expect(result.current).toBe(3)
})

test('deve retornar zero quando não houver tarefas', () => {

    const { result } = renderHook(() => useContadorDeTarefas([]))

    expect(result.current).toBe(0)
})
