import Editora from "../modelo/Editora";

const editoras: Array<Editora> = [
  {
    codEditora: number01,
    nome: "Minerva Dallas",
  },
  {
    codEditora: number02,
    nome: "Nerd Books",
  },
  {
    codEditora: number03,
    nome: "Geek Books",
  },
];

export default class ControleEditora {
  public getNomeEditora(codEditora: number) {
    const resultados = edi.filter(
      (editora) => edi.codEditora === codEditora
    );
    if (resultados.length === 0) return "Erro!Editora não encontrada. ";
    return resultados[0].name;
  }

  public getEditoras() {
    return editoras;
  }
}
