import { useTodos } from "../hooks/useTodos";

// Array fora do componente pois não é recriado a cada renderização
const FILTROS = [
    { valor: 'todas', label: 'Todas' },
    { valor: 'pendentes', label: 'Pendentes' },
    { valor: 'concluidas', label: 'Concluidas' }
];

function TodoFilters() {
    // Utiliza apenas o filtro e o setFiltro do contexto
    const { filtro, setFiltro } = useTodos();

    return (
        <div className="flex flex-wrap gap-2 w-fit rounded-lg">
            {FILTROS.map(f => (
                <button
                    key={f.valor}
                    className={
                        `px-4 py-2 text-sm font-medium border border-primary rounded-md cursor-pointer transition-all duration-200
                        ${filtro === f.valor
                        ? 'bg-tertiary text-primary shadow-sm'
                        : 'text-gray-900'
                        }`
                    }
                    onClick={() => setFiltro(f.valor)}
                    aria-pressed={filtro === f.valor}
                >
                    {f.label}
                </button>
            ))}
        </div>
    )
}

export default TodoFilters;