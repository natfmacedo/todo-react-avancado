import { useEffect, useState, useMemo, useCallback } from "react";
import { TodoContext } from "./TodoContext";

const API_URL = "https://crudcrud.com/api/89a6e6049850494389c26a8897da9ddb/tarefas";

export function TodoProvider({ children }) {
    const [tarefas, setTarefas] = useState([]);
    // Recuperação do filtro selecionado pelo usuário vinda do localStorage
    const [filtro, setFiltro] = useState(() => {
        return localStorage.getItem('filtro') || 'todas';
    });
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(null);    

    // GET na API
      useEffect(() => {
        fetch(API_URL)
        .then(res => res.json())
        .then(dados => setTarefas(dados))
        .catch(() => setErro("Erro ao buscar tarefas."))
        .finally(() => setLoading(false));
      }, []);

    // Funções mantidas na memória enquanto as dependências não mudarem
    const adicionar = useCallback((texto) => {
        if(!texto.trim()) return;
        const nova = { texto, concluida: false };
        return fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify(nova)
        })
            .then(res => res.json())
            .then(tarefaCriada => setTarefas(prev => [...prev, tarefaCriada]))
            .catch(() => setErro("Erro ao adicionar tarefa."));
    }, []);

    const alternar = useCallback((tarefa) => {
        // Criação de um objeto com tudo da tarefa original mas com o status de conclusão invertido
        const atualizada = { ...tarefa, concluida: !tarefa.concluida };
        // Separação do _id do resto dos campos, o "corpo" é que vai para o body do PUT
        const {_id, ...corpo } = atualizada;
        // Envio do id na URL e corpo no body
        return fetch(`${API_URL}/${_id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(corpo),
    })
            // Atualização da tela apenas se a API respondeu sem erro
            // A lista é percorrida e apenas a tarefa que mudou é substituída
            .then(() => setTarefas(prev => prev.map(t => t._id === _id ? atualizada : t)))
            .catch(() => setErro("Erro ao atualizar tarefa."));
    }, []);

    const remover = useCallback((id) => {
        // Passagem apenas do id na URL, sem corpo no body
        return fetch(`${API_URL}/${id}`, { method: 'DELETE' })
            // Atualização da tela apenas se a API respondeu sem erro
            // A lista é filtrada e apenas a tarefa com id correspondente é deletada
            .then(() => setTarefas(prev => prev.filter(t => t._id !== id)))
            .catch(() => setErro("Erro ao remover tarefa."));
    }, []);

    // Filtragem das tarefas
    // Com useMemo o filtro só recalcula quando "tarefas" ou "filtro" mudarem
    const tarefasFiltradas = useMemo(() => {
        return tarefas.filter(t => {
            if (filtro === "pendentes") return !t.concluida;
            if (filtro === "concluidas") return t.concluida; // só executa se a linha anterior for falsa, o que elimina a necessidade do "else if"
            return true; // filtro === "todas"
        });
    }, [tarefas, filtro]);

    // Toda vez que o filtro muda o valor é salvo no localStorage
    useEffect(() => {
        localStorage.setItem('filtro', filtro);
    }, [filtro]);

    return (
        // TodoContext é responsável por distribuir os dados para a árvore
        // Tudo no "value" fica acessível para os elementos filhos via useTodos()
        <TodoContext.Provider value={{ tarefasFiltradas, filtro, setFiltro, loading, erro, adicionar, alternar, remover }}>
            {children}
        </TodoContext.Provider>
    );
}
