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