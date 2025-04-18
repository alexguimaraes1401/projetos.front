"use client";
import { useEffect, useState } from "react";
import ProjetoCard from "@/components/ProjetoCard";
import Filtro from "@/components/Filtro";
import api from "@/service/api";
import { Categoria, Projeto, Subcategoria } from "@/interfaces/page";

export default function Home() {
  const [projetos, setProjetos] = useState<Projeto[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [subcategorias, setSubcategorias] = useState<Subcategoria[]>([]);
  const [categoriaId, setCategoriaId] = useState<number | null>(null);
  const [subcategoriaId, setSubcategoriaId] = useState<number | null>(null);

  const fetchData = async () => {
    const [resCategorias, resSubcategorias] = await Promise.all([
      api.get("/categoria"),
      api.get("/subcategoria"),
    ]);
    setCategorias(resCategorias.data["$values"]);
    setSubcategorias(resSubcategorias.data["$values"]);
  };

  const fetchProjetos = async () => {
    let url = "/projetos";
    if (categoriaId || subcategoriaId) {
      const query = new URLSearchParams();
      if (categoriaId) query.append("categoriaId", categoriaId.toString());
      if (subcategoriaId) query.append("subcategoriaId", subcategoriaId.toString());
      url = `/projetos/filter?${query.toString()}`;
    }

    const res = await api.get(url);
    setProjetos(res.data["$values"]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchProjetos();
  }, [categoriaId, subcategoriaId]);

  const handleCategoriaChange = (id: number | null) => {
    setCategoriaId(id);
    setSubcategoriaId(null); // zera subcategoria ao trocar categoria
  };

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Projetos</h1>
      <Filtro
        categorias={categorias}
        subcategorias={subcategorias.filter((s) => !categoriaId || s.categoriaId === categoriaId)}
        categoriaId={categoriaId}
        subcategoriaId={subcategoriaId}
        onCategoriaChange={handleCategoriaChange}
        onSubcategoriaChange={setSubcategoriaId}
      />
      <div className="grid gap-4 mt-4">
        {projetos.map((projeto) => (
          <ProjetoCard key={projeto.id} projeto={projeto} />
        ))}
      </div>
    </main>
  );
}
