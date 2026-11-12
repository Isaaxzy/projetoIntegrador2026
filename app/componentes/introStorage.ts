export function lerIndicesSalvos(chave: string, quantidade: number): number[] {
  if (typeof window === 'undefined') return [];

  try {
    const valorSalvo = window.localStorage.getItem(chave);
    if (!valorSalvo) return [];

    const valores: unknown = JSON.parse(valorSalvo);
    if (!Array.isArray(valores)) return [];

    return valores.filter(
      (valor): valor is number =>
        Number.isInteger(valor) && valor >= 0 && valor < quantidade,
    );
  } catch {
    return [];
  }
}

export function lerTextoSalvo(chave: string): string {
  if (typeof window === 'undefined') return '';

  try {
    const valorSalvo = window.localStorage.getItem(chave);
    if (!valorSalvo) return '';

    const valor: unknown = JSON.parse(valorSalvo);
    return typeof valor === 'string' ? valor : '';
  } catch {
    return '';
  }
}

const CHAVE_RESTRICOES_ANTES_SEM_RESTRICOES = 'AlimentacaoAntesSemRestricoes';

export function lerRestricoesAntesSemRestricoes(quantidade: number): number[] {
  return lerIndicesSalvos(CHAVE_RESTRICOES_ANTES_SEM_RESTRICOES, quantidade)
    .filter((indice) => indice > 0)
    .map((indice) => indice + 1);
}

export function salvarRestricoesAntesSemRestricoes(restricoes: readonly number[]): void {
  if (typeof window === 'undefined') return;

  window.localStorage.setItem(
    CHAVE_RESTRICOES_ANTES_SEM_RESTRICOES,
    JSON.stringify(restricoes.filter((id) => id > 1).map((id) => id - 1)),
  );
}