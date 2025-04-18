import { Pessoa } from "@/interfaces/page";

export default function PessoaCard({ pessoa }: { pessoa: Pessoa }) {
    return (
      <div className="border border-gray-300 p-4 rounded-lg shadow-sm w-72 bg-white">
        <h2 className="text-lg font-semibold">Nome: {pessoa.nomePessoa}</h2>
      </div>
    );
  }