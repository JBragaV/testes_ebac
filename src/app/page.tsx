import styles from "./page.module.css";
import TodoList from "./components/list-todo";
import { Tarefa } from "@/types/tarefa";

async function getTodos() {
    return Promise.resolve([
        {
            id: 1,
            tarefa: "Estudar Next.js",
            feita: false
        },
        {
            id: 2,
            tarefa: "Estudar TypeScript",
            feita: false
        }
    ]);
}

export default async function Home() {
  const tarefasUsuarios: Tarefa[] = await getTodos();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <TodoList tarefasIniciais={tarefasUsuarios}/>
      </main>
    </div>
  );
}
