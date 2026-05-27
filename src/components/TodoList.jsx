import { useTodos } from "../hooks/useTodos";
import TodoItem from "./TodoItem";

function TodoList() {
  // As tarefas já frem filtradas do contexto
  const { tarefasFiltradas, loading, erro, mensagem } = useTodos();
  
  return (
    <>
    <div aria-live="polite" aria-atomic="true" className="sr-only">
      {mensagem}
    </div>
    {loading && (
      <p>Carregando...</p>
    )}
    <ul aria-label="Lista de tarefas" className="overflow-y-auto max-h-64 lg:max-h-48">
      {loading && (
        Array.from({ length: 3 }).map((_, index) => (
          <li key={index} className="flex items-center gap-2 p-2 border-b border-gray-300 last:border-b-0" aria-hidden="true">
            <div className="size-6 rounded-full bg-gray-600 animate-pulse" />
            <div className="h-2 w-40 bg-gray-600 rounded animate-pulse" />
            <div className="h-8 w-20 bg-gray-600 rounded-md ml-auto animate-pulse" />
          </li>
        ))
      )}
      {erro && (
        <li role="alert" className="status erro">{erro}</li>
      )}
      {!loading && !erro && tarefasFiltradas.length === 0 && (
        <li role="status" className="status">Nenhuma tarefa encontrada.</li>
      )}
      {tarefasFiltradas.map(tarefa => <TodoItem key={tarefa._id} tarefa={tarefa} />)}
    </ul>
    </>
  )
}

export default TodoList;
