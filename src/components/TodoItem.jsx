import { memo } from "react";
import { useTodos } from "../hooks/useTodos";

function TodoItem({ tarefa }) { // Todos os dados da tarefa vindo via props, não só o texto

    // Utilização apenas das funções necessárias do contexto, onToggler e onRemover não vem mais via props
    const { alternar, remover } = useTodos();

    return (
        <li className={"flex items-center gap-2 p-2 border-b border-gray-300 last:border-b-0"}>
            <input 
                type="checkbox" 
                aria-labelledby={`tarefa-${tarefa._id}`}
                className="size-6 min-w-fit shrink-0 rounded-full cursor-pointer appearance-none border border-gray-600 checked:bg-primary checked:border-primary transition-all duration-200"
                checked={tarefa.concluida} // Status controlado pela API, não por estado local
                onChange={() => alternar(tarefa)} // Elemento pai é avisado do clique do usuário
                onKeyDown={(e) => e.key === 'Enter' && alternar(tarefa)}
            /> 
            <span id={`tarefa-${tarefa._id}`} className={`flex-1 min-w-0 wrap-break-word font-medium ${tarefa.concluida ? 'line-through text-gray-600' : ''}`}>{tarefa.texto}</span> 
            <button aria-describedby={`tarefa-${tarefa._id}`} onClick={() => remover(tarefa._id)} className="ml-auto px-4 py-2 rounded-md shadow-md border border-primary text-primary cursor-pointer hover:bg-primary hover:text-secondary focus:bg-primary focus:text-secondary transition-all duration-200">Remover</button>
        </li>
    )
}

// memo evita renderizações desnecessárias, o componente só re-renderiza se a prop "tarefa" mudar
export default memo(TodoItem);