import { useRef } from "react";
import { useTodos } from "../hooks/useTodos";
import { useInput } from "../hooks/useInput";

function TodoForm() {
    // Apenas a função adicionar do TodoContext é utilizada
    const { adicionar } = useTodos();

    const input = useInput();
    const inputRef = useRef(null);

    // O handleSubmit não faz mais o fetch direto, agora quem faz é o contexto através do adicionar()
    const handleSubmit = (e) => {
        e.preventDefault();
        adicionar(input.valor) // o texto digitado no input é enviado para o contexto
        input.limpar(); 
        inputRef.current.focus();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="novatarefa" className="text-primary font-semibold">Nova tarefa:</label>
            <div className="flex gap-2">
                <input 
                id="novatarefa"
                ref={inputRef}
                type="text" 
                placeholder="Ex: fazer caminhada" 
                value={input.valor}
                onChange={input.onChange}
                className="px-4 py-2 w-full rounded-md border border-gray-400 outline-none shadow-sm bg-white focus:ring-1 focus:primary transition-all duration-200"
                required
            />
            <button type="submit" className="px-4 py-2 rounded-md shadow-md border border-primary text-primary cursor-pointer hover:bg-primary hover:text-secondary focus:bg-primary focus:text-secondary transition-all duration-200">Adicionar</button>
            </div>
        </form>
    );
}

export default TodoForm;