export interface ProjetoCardProps {
    projeto: {
        id: number;
        tituloProjeto: string;
        descricaoProjeto: string;
        dataCriacao: string;
        categoriaId: number;
        subcategoriaId: number;
        categoria: {
          nome: string;
          subcategorias: {
              $values: [
                  {
                      nome: string
                  }
              ]
          }
      } | null;
        subcategoria: {
          nome: string;
        } | null;
      }
}
