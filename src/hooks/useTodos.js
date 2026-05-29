import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

// Hook personalizado: atalho para useContext(TodoContext)
export function useTodos() {
    const contexto = useContext(TodoContext);
    if (!contexto) throw new Error("useTodos deve ser usado dentro de TodoProvider.");
    return contexto;
}