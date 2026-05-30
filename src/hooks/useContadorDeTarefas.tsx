import { Tarefa } from "@/types/tarefa";

const useContadorDeTarefas = (tarefas: Tarefa[]) => {
    return tarefas.length;
}

export default useContadorDeTarefas;