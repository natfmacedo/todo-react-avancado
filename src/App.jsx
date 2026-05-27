// Componente pai
import { TodoProvider } from "./context/TodoProvider";

// Componentes filhos
import TodoForm from "./components/TodoForm";
import TodoFilters from "./components/TodoFilters";
import TodoList from "./components/TodoList";

function App() {

  return (
    // TodoProvider envolve tudo, assim o contexto fica disponível
    <TodoProvider>
      <div className="flex flex-col min-h-screen">
        <header className="flex flex-col items-center justify-center h-48">
        <h1 className="text-4xl font-extrabold text-secondary underline decoration-body decoration-wavy">Lista de tarefas</h1>
        </header>
        <main aria-label="Gerenciador de tarefas" className="flex flex-col gap-3 items-left p-4 mx-2 -translate-y-8 rounded-lg shadow-lg bg-white sm:w-xl sm:mx-auto sm:p-8">
          <TodoForm />
          <TodoFilters />
          <TodoList />
        </main>
        <footer className="py-3 mt-auto text-center bg-body">
          <p>&copy; 2026 Lista de tarefas - Todos os direitos reservados.</p>
        </footer>
      </div>
    </TodoProvider>
  )
}

export default App
