import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import TodoList from './index'
import { Tarefa } from '@/types/tarefa'

test('deve exibir mensagem quando não houver tarefas', () => {

    render(<TodoList tarefasIniciais={[]}/>)

    expect(screen.getByText(/nenhuma tarefa cadastrada/i)).toBeInTheDocument()
})

test('deve renderizar as tarefas recebidas', () => {
    const tarefasMock: Tarefa[] = [
                {
                    id: 1,
                    tarefa: 'React',
                    feita: false
                },
                {
                    id: 2,
                    tarefa: 'Next.js',
                    feita: false
                }
            ]
    render(<TodoList tarefasIniciais={tarefasMock}/>)

    expect(screen.getByText('React')).toBeInTheDocument()

    expect(screen.getByText('Next.js')).toBeInTheDocument()
})

test('deve exibir o contador correto', () => {
    const tarefasMock: Tarefa[] = [{
                    id: 1,
                    tarefa: 'A',
                    feita: false
                },
                {
                    id: 2,
                    tarefa: 'B',
                    feita: false
                }
            ]
    render(<TodoList tarefasIniciais={tarefasMock}/>)

    expect(screen.getByText("Suas tarefas: Total 2")).toBeInTheDocument()
})
