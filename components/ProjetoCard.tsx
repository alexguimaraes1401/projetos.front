import { ProjetoCardProps } from "@/interfaces/projetoCard";

export default function ProjetoCard({ projeto }: ProjetoCardProps) {
    return (
        <div className="border border-gray-300 p-4 rounded-lg shadow-sm w-72 bg-white">
            <h3 className="text-xl font-semibold mb-2">{projeto.tituloProjeto}</h3>
            <p className="text-gray-700 mb-3">{projeto.descricaoProjeto}</p>
            <span className="text-sm text-gray-500">Categoria: {projeto.categoria?.nome}</span>
            <span className="text-sm text-gray-500">Sub-Categoria: {projeto.categoria?.subcategorias?.$values[0].nome}</span>
        </div>
    );
}
