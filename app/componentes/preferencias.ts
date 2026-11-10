export const opcoesAlimentosPreferidos = [
  'Frango', 'Carne', 'Batata', 'Queijo', 'Chocolate', 'Morango', 'Massas', 'Arroz',
  'Ovo', 'Tomate', 'Cenoura', 'Abacate', 'Salmão', 'Limão', 'Milho', 'Feijão',
];

export const opcoesAlimentosEvitados = [
  'Cebola', 'Alho', 'Tomate', 'Peixe', 'Coentro', 'Pimentão',
  'Brócolis', 'Cogumelo', 'Azeitona', 'Pimenta', 'Gengibre', 'Manjericão',
];

export const opcoesAlergias = [
  'Leite', 'Ovo', 'Amendoim', 'Castanhas', 'Soja', 'Trigo', 'Peixes', 'Frutos do Mar',
];

export const opcoesRestricoesAlimentares = [
  'Sem restrições',
  'Vegetariano',
  'Vegano',
  'Mediterrânea',
  'Low sugar',
  'Flexitariano',
  'Low carb',
  'Pescetariano',
  'Ovolactovegetariano',
  'Low fat',
  'High protein',
];

function normalizarAlimento(alimento: string): string {
  return alimento
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('pt-BR')
    .replace(/[^a-z0-9]/g, '')
    .replace(/s$/, '');
}

const termosPorAlergia: Record<string, string[]> = {
  leite: ['leite', 'queijo', 'manteiga', 'creme de leite', 'iogurte', 'requeijao'],
  lactose: ['leite', 'queijo', 'manteiga', 'creme de leite', 'iogurte', 'requeijao'],
  ovo: ['ovo'],
  amendoim: ['amendoim'],
  castanhas: ['castanha', 'noz', 'amendoa', 'avelã', 'pistache'],
  soja: ['soja'],
  trigo: ['trigo'],
  peixes: ['peixe', 'salmao', 'atum', 'sardinha', 'bacalhau'],
  frutosdomar: ['camarao', 'lula', 'polvo', 'marisco', 'ostra', 'mexilhao', 'lagosta'],
};

const condicaoPorRestricao: Record<string, string> = {
  vegetariano: 'Vegetariano',
  vegano: 'Vegano',
  mediterranea: 'Mediterrânea',
  lowsugar: 'Low sugar',
  flexitariano: 'Flexitariano',
  lowcarb: 'Low carb',
  pescetariano: 'Pescetariano',
  ovolactovegetariano: 'Ovolactovegetariano',
  lowfat: 'Low fat',
  highprotein: 'High protein',
};

const termosPorPreferencia: Record<string, string[]> = {
  massa: [
    'massa',
    'macarrao',
    'espaguete',
    'espaguetti',
    'spaghetti',
    'penne',
    'fusilli',
    'talharim',
    'fettuccine',
    'linguine',
    'farfalle',
    'parafuso',
    'lasanha',
    'ravioli',
    'nhoque',
  ],
};

export function encontrarAlimentosPreferidos(
  ingredientes: readonly string[],
  preferencias: readonly string[],
): string[] {
  return preferencias.filter((preferencia) => {
    const preferenciaNormalizada = normalizarAlimento(preferencia);
    const termos = termosPorPreferencia[preferenciaNormalizada] ?? [preferencia];

    return ingredientes.some((ingrediente) => {
      const ingredienteNormalizado = normalizarAlimento(ingrediente);
      return termos.some((termo) =>
        ingredienteNormalizado.includes(normalizarAlimento(termo)),
      );
    });
  });
}

function contemAlergeno(ingredientes: readonly string[], alergias: readonly string[]): boolean {
  return alergias.some((alergia) => {
    const termos = termosPorAlergia[normalizarAlimento(alergia)] ?? [alergia];
    return ingredientes.some((ingrediente) => {
      const nomeNormalizado = normalizarAlimento(ingrediente);
      return termos.some((termo) => nomeNormalizado.includes(normalizarAlimento(termo)));
    });
  });
}

export function receitaRespeitaRestricoes(
  ingredientes: readonly string[],
  alimentosEvitados: readonly string[],
  alergias: readonly string[],
  restricoesAlimentares: readonly string[],
  condicoesReceita: readonly string[],
): boolean {
  const condicoesNormalizadas = condicoesReceita.map(normalizarAlimento);
  const condicoesObrigatorias = restricoesAlimentares
    .map((restricao) => condicaoPorRestricao[normalizarAlimento(restricao)])
    .filter((condicao): condicao is string => condicao !== undefined);

  return encontrarAlimentosPreferidos(ingredientes, alimentosEvitados).length === 0
    && !contemAlergeno(ingredientes, alergias)
    && condicoesObrigatorias.every((condicao) =>
      condicoesNormalizadas.includes(normalizarAlimento(condicao)),
    );
}

export function receitaCombinaComUsuario(
  ingredientes: readonly string[],
  preferencias: readonly string[],
  alimentosEvitados: readonly string[],
  alergias: readonly string[],
  restricoesAlimentares: readonly string[],
  condicoesReceita: readonly string[],
): boolean {
  return encontrarAlimentosPreferidos(ingredientes, preferencias).length > 0
    && receitaRespeitaRestricoes(
      ingredientes,
      alimentosEvitados,
      alergias,
      restricoesAlimentares,
      condicoesReceita,
    );
}

export function receitaAtendeTempo(duracao: string, temposPreferidos: readonly number[]): boolean {
  if (temposPreferidos.length === 0) {
    return true;
  }

  const horas = Number(duracao.match(/(\d+)\s*h/i)?.[1] ?? 0);
  const minutos = Number(duracao.match(/(\d+)\s*min/i)?.[1] ?? 0);
  const duracaoEmMinutos = horas * 60 + minutos;
  const totalMinutos = /mais\s+de/i.test(duracao)
    ? duracaoEmMinutos + 1
    : duracaoEmMinutos;

  if (totalMinutos === 0) {
    return false;
  }

  return temposPreferidos.some((indice) => {
    if (indice === 5) {
      return totalMinutos >= 120;
    }

    const limiteEmMinutos = [15, 30, 45, 60, 90][indice];
    return limiteEmMinutos !== undefined && totalMinutos <= limiteEmMinutos;
  });
}

function nivelDificuldade(dificuldade: string): number | undefined {
  const normalizada = normalizarAlimento(dificuldade).replace(/^chef/, '');

  if (normalizada.includes('muitofacil')) return 0;
  if (normalizada === 'facil') return 1;
  if (['medio', 'media', 'intermediaria'].includes(normalizada)) return 2;
  if (['elaborado', 'elaborada'].includes(normalizada)) return 3;

  return undefined;
}

export function receitaAtendeDificuldade(
  dificuldade: string,
  dificuldadesPreferidas: readonly number[],
): boolean {
  if (dificuldadesPreferidas.length === 0) {
    return true;
  }

  const nivelReceita = nivelDificuldade(dificuldade);
  return nivelReceita !== undefined && dificuldadesPreferidas.includes(nivelReceita);
}
