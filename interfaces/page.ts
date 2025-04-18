export interface Projeto {
    id: number;
    tituloProjeto: string;
    descricaoProjeto: string;
    dataCriacao: string;
    categoriaId: number;
    subcategoriaId: number;
    categoria: {
        nome: string;
    } | null;
    subcategoria: {
        nome: string;
    } | null;
}

export interface Categoria {
    id: number;
    nome: string;
}

export interface Subcategoria {
    id: number;
    nome: string;
    categoriaId: number;
}
