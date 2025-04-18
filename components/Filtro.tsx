import { FiltroProps } from "@/interfaces/filtro";

export default function Filtro({
    categorias,
    subcategorias,
    categoriaId,
    subcategoriaId,
    onCategoriaChange,
    onSubcategoriaChange,
}: FiltroProps) {
    return (
        <div className="flex gap-4 mb-4">
            <select
                className="border rounded px-3 py-2"
                value={categoriaId ?? ""}
                onChange={(e) => onCategoriaChange(e.target.value ? parseInt(e.target.value) : null)}
            >
                <option value="">Todas Categorias</option>
                {categorias.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                        {cat.nome}
                    </option>
                ))}
            </select>

            <select
                className="border rounded px-3 py-2 disabled:text-gray-400"
                value={subcategoriaId ?? ""}
                onChange={(e) => onSubcategoriaChange(e.target.value ? parseInt(e.target.value) : null)}
                disabled={!categoriaId}
            >
                <option value="">Todas Subcategorias</option>
                {subcategorias.map((sub) => (
                    <option key={sub.id} value={sub.id}>
                        {sub.nome}
                    </option>
                ))}
            </select>
        </div>
    );
}
