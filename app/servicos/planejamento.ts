import AsyncStorage from "@react-native-async-storage/async-storage";

export const diasDaSemana = [
    { id: "segunda", nome: "Segunda", abreviacao: "Seg" },
    { id: "terca", nome: "Terça", abreviacao: "Ter" },
    { id: "quarta", nome: "Quarta", abreviacao: "Qua" },
    { id: "quinta", nome: "Quinta", abreviacao: "Qui" },
    { id: "sexta", nome: "Sexta", abreviacao: "Sex" },
    { id: "sabado", nome: "Sábado", abreviacao: "Sáb" },
    { id: "domingo", nome: "Domingo", abreviacao: "Dom" },
] as const;

export type DiaDaSemana = (typeof diasDaSemana)[number]["id"];
export type PlanoSemanal = Record<DiaDaSemana, string[]>;

const CHAVE_PLANO_SEMANAL = "@tempero-de-casa/plano-semanal";

export function criarPlanoVazio(): PlanoSemanal {
    return {
        segunda: [],
        terca: [],
        quarta: [],
        quinta: [],
        sexta: [],
        sabado: [],
        domingo: [],
    };
}

function validarPlano(valor: unknown): PlanoSemanal {
    if (typeof valor !== "object" || valor === null || Array.isArray(valor)) {
        throw new Error("O planejamento salvo não está em um formato válido.");
    }

    const plano = criarPlanoVazio();

    for (const dia of diasDaSemana) {
        const receitas = (valor as Record<string, unknown>)[dia.id];

        if (receitas === undefined) {
            continue;
        }

        if (!Array.isArray(receitas) || !receitas.every((id) => typeof id === "string")) {
            throw new Error(`As refeições salvas para ${dia.nome} estão inválidas.`);
        }

        plano[dia.id] = receitas;
    }

    return plano;
}

export async function carregarPlanoSemanal(): Promise<PlanoSemanal> {
    const dadosSalvos = await AsyncStorage.getItem(CHAVE_PLANO_SEMANAL);
    return dadosSalvos === null ? criarPlanoVazio() : validarPlano(JSON.parse(dadosSalvos));
}

export async function salvarPlanoSemanal(plano: PlanoSemanal): Promise<void> {
    const planoValidado = validarPlano(plano);
    await AsyncStorage.setItem(CHAVE_PLANO_SEMANAL, JSON.stringify(planoValidado));
}
