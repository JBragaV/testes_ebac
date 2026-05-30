"use client"
import { useState } from "react"

import { Tarefa } from "@/types/tarefa"
import NovaTarefa from "@/app/components/todo-form"
import useContadorDeTarefas from "@/hooks/useContadorDeTarefas"

type componentProps = {
    tarefasIniciais: Tarefa[]
}

export default function TodoList({tarefasIniciais}: componentProps) {
    const [ tarefas, setTarefas ] = useState<Tarefa[]>(tarefasIniciais);

    const quantidade = useContadorDeTarefas(tarefas);

    const adicionarTarefa = (descricao: string) => {
        const novaTarefa: Tarefa = {
            id: Date.now(),
            tarefa: descricao,
            feita: false
        };

        setTarefas(prev => [...prev,novaTarefa]);
    }
    return (
        <div>
            <h2>Suas tarefas: Total {quantidade}</h2>
            <NovaTarefa onAdicionar={adicionarTarefa} />
            {!tarefas.length ?
                (
                    <p>Nenhuma Tarefa cadastrada ainda!</p>
                )
                :
                (
                    <ul>
                        {tarefas.map(tarefa => <li key={tarefa.id}>{tarefa.tarefa}</li>)}
                    </ul>
                )}
        </div>
    )
}
