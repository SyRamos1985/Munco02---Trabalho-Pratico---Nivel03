{
    codigo:number 01,
    codEditora: number 01,
    titulo: "Nunca Desista dos Seus Sonhos",
    resumo: "Neste livro, Cury explora o tema da inteligência emocional e motivação, fornecendo insights e conselhos sobre como lidar com desafios, superar obstáculos e perseguir os sonhos pessoais.": ["Augusto Cury"],
  },
  {
    codigo: number 02,
    codEditora: 02,
    titulo: "A Arte da Guerra",
    resumo: O livro oferece lições intemporais sobre estratégia, planejamento e tomada de decisões. Embora originalmente escrito para o contexto militar, o livro tem sido amplamente interpretado como uma fonte de sabedoria para qualquer tipo de competição ou desafio que se enfrente na vida.
      ": ["Sun Tzu"],
  },
  {
    codigo: number03,
    codEditora: mumber03,
    titulo: "As 16 Leis para o Sucesso",
    resumo:é um livro escrito por Napoleon Hill, que é considerado um dos pioneiros do desenvolvimento pessoal e motivação. O livro apresenta 16 leis fundamentais que, de acordo com Hill, são essenciais para alcançar o sucesso em todas as áreas da vida.": ["Napoleon Hill"],
  },
];

export default class Controlbook {
  incluir(book: book) {
    book.codigo = book.length > 0 ? livros.at(-1)!.codigo + 1 : 1;
    book.push(livro);
  }

  excluir(codigo: number) {
    const index = book.findIndex((livro) => book.codigo = codigo);
    book.splice(index, 1);
  }

  obterbook() {
    return livros;
  }
}

