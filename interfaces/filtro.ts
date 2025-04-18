export interface FiltroProps {
    categorias: { id: number; nome: string }[];
    subcategorias: { id: number; nome: string }[];
    categoriaId: number | null;
    subcategoriaId: number | null;
    onCategoriaChange: (id: number | null) => void;
    onSubcategoriaChange: (id: number | null) => void;
}