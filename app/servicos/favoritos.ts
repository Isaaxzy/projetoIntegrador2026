import AsyncStorage from "@react-native-async-storage/async-storage";

const CHAVE_FAVORITOS = "@tempero-de-casa/favoritos";

export interface ReceitaFavorita {
    id: string;
    nome: string;
    tempo: string;
    dificuldade: string;
    ingredientes: string;
    imagemUrl?: string;
}

function validarFavoritos(valor: unknown): ReceitaFavorita[] {
    if (!Array.isArray(valor)) {
        throw new Error("Os favoritos salvos não estão em um formato válido.");
    }

    return valor.map((item: unknown) => {
        if (
            typeof item !== "object" ||
            item === null ||
            !("id" in item) ||
            !("nome" in item) ||
            !("tempo" in item) ||
            !("dificuldade" in item) ||
            !("ingredientes" in item) ||
            typeof item.id !== "string" ||
            typeof item.nome !== "string" ||
            typeof item.tempo !== "string" ||
            typeof item.dificuldade !== "string" ||
            typeof item.ingredientes !== "string" ||
            ("imagemUrl" in item && typeof item.imagemUrl !== "string")
        ) {
            throw new Error("Uma receita salva como favorita está inválida.");
        }

        return {
            id: item.id,
            nome: item.nome,
            tempo: item.tempo,
            dificuldade: item.dificuldade,
            ingredientes: item.ingredientes,
            ...(typeof item.imagemUrl === "string" ? { imagemUrl: item.imagemUrl } : {}),
        };
    });
}

export async function listarFavoritos(): Promise<ReceitaFavorita[]> {
    const dadosSalvos = await AsyncStorage.getItem(CHAVE_FAVORITOS);
    return dadosSalvos === null ? [] : validarFavoritos(JSON.parse(dadosSalvos));
}

export async function adicionarFavorito(receita: ReceitaFavorita): Promise<void> {
    const favoritos = await listarFavoritos();
    const favoritosAtualizados = [
        ...favoritos.filter((favorito) => favorito.id !== receita.id),
        receita,
    ];

    await AsyncStorage.setItem(CHAVE_FAVORITOS, JSON.stringify(favoritosAtualizados));
}

export async function removerFavorito(id: string): Promise<void> {
    const favoritos = await listarFavoritos();
    const favoritosAtualizados = favoritos.filter((favorito) => favorito.id !== id);

    await AsyncStorage.setItem(CHAVE_FAVORITOS, JSON.stringify(favoritosAtualizados));
}
