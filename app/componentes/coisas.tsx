export type Receita = {
 
  id: string;
 
  titulo: string;
 
  cor: string;
 
  Imagem: string;
 
  descrição: string;
 
  info: string;
 
  dificuldade: string;
 
  duracao: string;
 
  categorias: (
 
    | '⭐ Todas'
 
    | '🍳 Café da manhã'
 
    | '👩‍🍳 Almoço'
 
    | '👩‍🍳 Janta'
 
    | '🍰 Sobremesas'
 
    | '🥗 Saudáveis'
 
    | '⚡ Rápidas'
 
    | '💰 Econômicas'
 
    | '🌱 Vegetarianas'
 
    | '🥖 Lanches'
 
  )[];
 
    condicoes: (
 
    | 'Vegetariano'
 
    | 'Vegano'
 
    | 'Flexitariano'
 
    | 'Pescetariano'
 
    | 'Ovolactovegetariano'
 
    | 'Low carb'
 
    | 'Low fat'
 
    | 'High protein'
 
    | 'Low sugar'
 
    | 'Mediterrânea'
 
  )[];
 
  ingredientes: { nome: string; unidade: string }[];
 
  modoDePreparo: string[];
 
};

export function removerReceitasDuplicadas(receitas: Receita[]): Receita[] {
  const ids = new Set<string>();
  const titulos = new Set<string>();

  return receitas.filter((receita) => {
    const tituloNormalizado = receita.titulo
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, ' ')
      .trim()
      .toLocaleLowerCase('pt-BR');

    if (ids.has(receita.id) || titulos.has(tituloNormalizado)) {
      return false;
    }

    ids.add(receita.id);
    titulos.add(tituloNormalizado);
    return true;
  });
}
 
 
 
export const receitasRecomendadas: Receita[] = [
 
  {
 
    id: '1a',
 
    titulo: 'Bowl de quinoa com legumes',
 
    cor: '#1a1a2e',
 
    Imagem: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
 
    descrição: 'Quinoa colorida com grão-de-bico, abacate e molho de limão.',
 
    info: 'Quinoa, grão-de-bico e legumes',
 
    dificuldade: '👨‍🍳 Fácil',
 
    duracao: '30min',
 
    categorias: ['⭐ Todas', '👩‍🍳 Almoço', '👩‍🍳 Janta', '🥗 Saudáveis', '🌱 Vegetarianas'],
 
    condicoes: ['Vegetariano', 'Vegano', 'Flexitariano', 'Pescetariano', 'Ovolactovegetariano', 'Low carb', 'Low fat', 'High protein', 'Low sugar', 'Mediterrânea'],
 
    ingredientes: [
 
      { nome: 'Quinoa', unidade: '1 xícara' },
 
      { nome: 'Grão-de-bico', unidade: '1 lata' },
 
      { nome: 'Abacate', unidade: '1 unidade' },
 
      { nome: 'Tomate', unidade: '1 unidade' },
 
      { nome: 'Limão', unidade: '1 unidade' },
 
      { nome: 'Azeite', unidade: '2 colheres' },
 
    ],
 
    modoDePreparo: [
 
      'Cozinhe a quinoa em água com sal até ficar macia.',
 
      'Escorra o grão-de-bico e misture com o tomate picado.',
 
      'Monte o bowl com a quinoa, o grão-de-bico e o abacate.',
 
      'Tempere com limão, azeite e sal antes de servir.',
 
    ],
 
  },
 
  {
 
    id: '1b',
 
    titulo: 'Espaguete ao molho de tomate',
 
    cor: '#0f3460',
 
    Imagem: 'https://th.bing.com/th/id/OSK.46f112c44ddd4c901153aaed3dc715df?w=424&h=424&c=7&rs=1&qlt=90&o=6&pid=16.1%27',
 
    descrição: 'Espaguete simples com molho de tomate, alho e manjericão.',
 
    info: 'Macarrão, tomate e manjericão',
 
    dificuldade: '👨‍🍳 Fácil',
 
    duracao: '30min',
 
    categorias: ['⭐ Todas', '👩‍🍳 Almoço', '👩‍🍳 Janta', '⚡ Rápidas', '💰 Econômicas', '🌱 Vegetarianas'],
 
    condicoes: [
  'Vegetariano',
  'Vegano',
  'Flexitariano',
  'Pescetariano',
  'Ovolactovegetariano',
  'Low sugar',
  'Mediterrânea'
],
 
    ingredientes: [
 
      { nome: 'Espaguete', unidade: '250 g' },
 
      { nome: 'Tomate', unidade: '4 unidades' },
 
      { nome: 'Alho', unidade: '2 dentes' },
 
      { nome: 'Cebola', unidade: '1/2 unidade' },
 
      { nome: 'Azeite', unidade: '2 colheres' },
 
      { nome: 'Manjericão', unidade: 'a gosto' },
 
    ],
 
    modoDePreparo: [
 
      'Cozinhe o espaguete em água fervente com sal até ficar al dente.',
 
      'Refogue a cebola e o alho no azeite.',
 
      'Acrescente os tomates picados e cozinhe até formar um molho.',
 
      'Misture o molho ao macarrão e finalize com manjericão.',
 
    ],
 
  },
 
  {
 
    id: '1c',
 
    titulo: 'Frango assado com batatas',
 
    cor: '#533483',
 
    Imagem: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80',
 
    descrição: 'Frango dourado no forno acompanhado de batatas temperadas.',
 
    info: 'Frango, batata e alho',
 
    dificuldade: '👨‍🍳 Fácil',
 
    duracao: '1h',
 
    categorias: ['⭐ Todas', '👩‍🍳 Almoço', '👩‍🍳 Janta'],
 
    condicoes: [
  'Flexitariano',
  'High protein',
  'Low sugar',
],
 
    ingredientes: [
 
      { nome: 'Frango', unidade: '4 pedaços' },
 
      { nome: 'Batata', unidade: '4 unidades' },
 
      { nome: 'Alho', unidade: '3 dentes' },
 
      { nome: 'Limão', unidade: '1 unidade' },
 
      { nome: 'Azeite', unidade: '2 colheres' },
 
      { nome: 'Sal e páprica', unidade: 'a gosto' },
 
    ],
 
    modoDePreparo: [
 
      'Tempere o frango com alho, limão, sal e páprica.',
 
      'Corte as batatas em pedaços e misture com azeite e sal.',
 
      'Coloque tudo em uma assadeira e cubra com papel-alumínio.',
 
      'Asse a 200 °C por 40 minutos, retire o papel e doure por mais 20 minutos.',
 
    ],
 
  },
 
  {
 
    id: '1d',
 
    titulo: 'Ensopado de legumes',
 
    cor: '#2b2d42',
 
    Imagem: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80',
 
    descrição: 'Ensopado caseiro de legumes com caldo bem temperado.',
 
    info: 'Batata, cenoura e tomate',
 
    dificuldade: '👨‍🍳 Fácil',
 
    duracao: '45min',
 
    categorias: ['⭐ Todas', '👩‍🍳 Almoço', '👩‍🍳 Janta', '🥗 Saudáveis', '💰 Econômicas', '🌱 Vegetarianas'],
    condicoes: [
  'Vegetariano',
  'Vegano',
  'Flexitariano',
  'Pescetariano',
  'Ovolactovegetariano',
  'Low fat',
  'Low sugar',
  'Mediterrânea'
],
 
    ingredientes: [
 
      { nome: 'Batata', unidade: '2 unidades' },
 
      { nome: 'Cenoura', unidade: '1 unidade' },
 
      { nome: 'Tomate', unidade: '2 unidades' },
 
      { nome: 'Cebola', unidade: '1 unidade' },
 
      { nome: 'Alho', unidade: '2 dentes' },
 
      { nome: 'Caldo de legumes', unidade: '500 ml' },
 
    ],
 
    modoDePreparo: [
 
      'Refogue a cebola e o alho em uma panela.',
 
      'Junte a batata, a cenoura e o tomate picados.',
 
      'Adicione o caldo de legumes e cozinhe até os legumes ficarem macios.',
 
      'Acerte o sal e sirva ainda quente.',
 
    ],
 
  },
 
  {
 
    id: '1e',
 
    titulo: 'Panqueca de banana',
 
    cor: '#16213e',
 
    Imagem: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80',
 
    descrição: 'Panquecas rápidas de banana para um café da manhã especial.',
 
    info: 'Banana, ovo e aveia',
 
    dificuldade: '👨‍🍳 Fácil',
 
    duracao: '15min',
 
    categorias: ['⭐ Todas', '🍳 Café da manhã', '🥗 Saudáveis', '⚡ Rápidas', '💰 Econômicas', '🌱 Vegetarianas'],
 
    condicoes: [
  'Vegetariano',
  'Flexitariano',
  'Pescetariano',
  'Ovolactovegetariano',
  'Low fat',
  'Low sugar',
],
 
    ingredientes: [
 
      { nome: 'Banana', unidade: '1 unidade madura' },
 
      { nome: 'Ovo', unidade: '1 unidade' },
 
      { nome: 'Aveia', unidade: '3 colheres' },
 
      { nome: 'Canela', unidade: 'a gosto' },
 
    ],
 
    modoDePreparo: [
 
      'Amasse a banana e misture com o ovo, a aveia e a canela.',
 
      'Despeje pequenas porções da massa em uma frigideira untada.',
 
      'Doure dos dois lados e sirva em seguida.',
 
    ],
 
  },
 
];
 
 
 
export const receitasSobremesas: Receita[] = [
 
  {
 
    id: '2a',
 
    titulo: 'Sorvete caseiro de banana',
 
    cor: '#f4a261',
 
    Imagem: 'https://ciclovivo.com.br/wp-content/uploads/2024/02/sorvete-simples-banana.jpg',
 
    descrição: 'Sorvete cremoso de banana feito com poucos ingredientes.',
 
    info: 'Banana, creme de leite e mel',
 
    dificuldade: '👨‍🍳 Fácil',
 
    duracao: '15min',
 
    categorias: ['⭐ Todas', '🍰 Sobremesas', '⚡ Rápidas', '🌱 Vegetarianas'],
 
    condicoes: [
  'Vegetariano',
  'Flexitariano',
  'Pescetariano',
  'Ovolactovegetariano',
 
],
 
    ingredientes: [
 
      { nome: 'Banana', unidade: '4 unidades maduras congeladas' },
 
      { nome: 'Creme de leite', unidade: '1/2 caixinha' },
 
      { nome: 'Mel', unidade: '1 colher (opcional)' },
 
    ],
 
    modoDePreparo: [
 
      'Corte as bananas congeladas em rodelas.',
 
      'Bata no processador com o creme de leite até ficar cremoso.',
 
      'Adoce com mel, se desejar, e sirva ou leve ao congelador.',
 
    ],
 
  },
 
  {
 
    id: '2b',
 
    titulo: 'Bolo de cenoura com chocolate',
 
    cor: '#e76f51',
 
    Imagem: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
 
    descrição: 'Bolo fofinho de cenoura coberto com calda de chocolate.',
 
    info: 'Cenoura, farinha e chocolate',
 
    dificuldade: '👨‍🍳 Médio',
 
    duracao: '45min',
 
    categorias: ['⭐ Todas', '🍰 Sobremesas', '💰 Econômicas', '🌱 Vegetarianas'],
 
    condicoes: [
  'Vegetariano',
  'Flexitariano',
  'Pescetariano',
  'Ovolactovegetariano',
],
 
    ingredientes: [
 
      { nome: 'Cenoura', unidade: '2 unidades médias' },
 
      { nome: 'Ovo', unidade: '3 unidades' },
 
      { nome: 'Óleo', unidade: '1/2 xícara' },
 
      { nome: 'Açúcar', unidade: '1 xícara' },
 
      { nome: 'Farinha de trigo', unidade: '2 xícaras' },
 
      { nome: 'Chocolate em pó', unidade: '4 colheres' },
 
    ],
 
    modoDePreparo: [
 
      'Bata a cenoura, os ovos, o óleo e o açúcar no liquidificador.',
 
      'Despeje em uma tigela e misture a farinha e o fermento.',
 
      'Asse em forma untada a 180 °C por cerca de 35 minutos.',
 
      'Prepare uma calda com chocolate e cubra o bolo depois de assado.',
 
    ],
 
  },
 
  {
 
    id: '2c',
 
    titulo: 'Pudim de leite condensado',
 
    cor: '#d4a373',
 
    Imagem: 'https://th.bing.com/th/id/R.9bca87536215b1a0ba2b702c6fac9598?rik=ciygBz5umOx7Yg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-ZoDh7zILX6A%2fVi6DwM1EOZI%2fAAAAAAAAD5A%2ffu8zQEOCQvE%2fs1600%2fpudim-de-leite-condensado.png&ehk=g9mpRHnOkZXfVRHPMdZDJXf5g%2bM0roX%2b%2b2oMTMtW7%2fY%3d&risl=&pid=ImgRaw&r=0%27',
 
    descrição: 'Pudim clássico, macio e servido com calda de caramelo.',
 
    info: 'Leite condensado, leite e ovo',
 
    dificuldade: '👨‍🍳 Médio',
 
    duracao: '1h',
 
    categorias: ['⭐ Todas', '🍰 Sobremesas', '🌱 Vegetarianas'],
 
    condicoes: [
  'Vegetariano',
  'Flexitariano',
  'Pescetariano',
  'Ovolactovegetariano',
],
 
    ingredientes: [
 
      { nome: 'Leite condensado', unidade: '1 lata' },
 
      { nome: 'Leite', unidade: 'a mesma medida da lata' },
 
      { nome: 'Ovo', unidade: '3 unidades' },
 
      { nome: 'Açúcar', unidade: '1 xícara para a calda' },
 
    ],
 
    modoDePreparo: [
 
      'Derreta o açúcar até formar um caramelo e espalhe em uma forma.',
 
      'Bata o leite condensado, o leite e os ovos até misturar.',
 
      'Despeje na forma e asse em banho-maria a 180 °C por cerca de 50 minutos.',
 
      'Espere esfriar, leve à geladeira e desenforme.',
 
    ],
 
  },
 
  {
 
    id: '2d',
 
    titulo: 'Brigadeiro tradicional',
 
    cor: '#6d4c41',
 
    Imagem: 'https://canaldareceita.com.br/wp-content/uploads/2025/09/Brigadeiro-Tradicional.jpg.webp',
 
    descrição: 'Docinho brasileiro de chocolate para qualquer ocasião.',
 
    info: 'Leite condensado, chocolate e manteiga',
 
    dificuldade: '👨‍🍳 Fácil',
 
    duracao: '30min',
 
    categorias: ['⭐ Todas', '🍰 Sobremesas', '⚡ Rápidas', '💰 Econômicas', '🌱 Vegetarianas'],
 
    condicoes: [
  'Vegetariano',
  'Flexitariano',
  'Pescetariano',
  'Ovolactovegetariano',
],
 
    ingredientes: [
 
      { nome: 'Leite condensado', unidade: '1 lata' },
 
      { nome: 'Chocolate em pó', unidade: '3 colheres' },
 
      { nome: 'Manteiga', unidade: '1 colher' },
 
      { nome: 'Granulado', unidade: 'a gosto' },
 
    ],
 
    modoDePreparo: [
 
      'Misture o leite condensado, o chocolate e a manteiga em uma panela.',
 
      'Cozinhe em fogo baixo, mexendo sempre, até desgrudar do fundo.',
 
      'Deixe esfriar, enrole os brigadeiros e passe no granulado.',
 
    ],
 
  },
 
  {
 
    id: '2e',
 
    titulo: 'Pipoca doce',
 
    cor: '#f4a261',
 
    Imagem: 'https://naminhapanela.com/wp-content/uploads/2022/07/Pipoca-doce-com-chocolate-2-1536x1024.jpg',
 
    descrição: 'Pipoca doce caramelizada para dividir na hora do filme.',
 
    info: 'Milho de pipoca, açúcar e óleo',
 
    dificuldade: '👨‍🍳 Fácil',
 
    duracao: '15min',
 
    categorias: ['⭐ Todas', '🍰 Sobremesas', '⚡ Rápidas', '💰 Econômicas', '🌱 Vegetarianas'],
 
    condicoes: [
  'Vegetariano',
  'Vegano',
  'Flexitariano',
  'Pescetariano',
  'Ovolactovegetariano',
],
 
    ingredientes: [
 
      { nome: 'Milho de pipoca', unidade: '1/2 xícara' },
 
      { nome: 'Açúcar', unidade: '1/2 xícara' },
 
      { nome: 'Óleo', unidade: '2 colheres' },
 
      { nome: 'Água', unidade: '2 colheres' },
 
    ],
 
    modoDePreparo: [
 
      'Coloque o milho, o açúcar, o óleo e a água em uma panela grande.',
 
      'Mexa em fogo médio até a mistura começar a ferver e tampe a panela.',
 
      'Agite a panela de vez em quando e desligue quando os estouros diminuírem.',
 
      'Espere o caramelo esfriar um pouco antes de servir.',
 
    ],
 
  },
 
];
 
 
 
export const receitasMaisProcuradas: Receita[] = [
 
  {
 
    id: '3a',
 
    titulo: 'Strogonoff de frango',
 
    cor: '#bc6c25',
 
    Imagem: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80',
 
    descrição: 'Strogonoff cremoso de frango, perfeito para o almoço.',
 
    info: 'Frango, creme de leite e tomate',
 
    dificuldade: '👨‍🍳 Fácil',
 
    duracao: '30min',
 
    categorias: ['⭐ Todas', '👩‍🍳 Almoço', '👩‍🍳 Janta'],
 
    condicoes: [
  'Flexitariano',
  'High protein'
],
 
    ingredientes: [
 
      { nome: 'Peito de frango', unidade: '500 g' },
 
      { nome: 'Cebola', unidade: '1 unidade' },
 
      { nome: 'Alho', unidade: '2 dentes' },
 
      { nome: 'Molho de tomate', unidade: '1/2 xícara' },
 
      { nome: 'Creme de leite', unidade: '1 caixinha' },
 
      { nome: 'Mostarda', unidade: '1 colher' },
 
    ],
 
    modoDePreparo: [
 
      'Corte o frango em cubos e doure em uma panela.',
 
      'Acrescente a cebola e o alho e refogue.',
 
      'Junte o molho de tomate e a mostarda e cozinhe por alguns minutos.',
 
      'Desligue o fogo, misture o creme de leite e sirva.',
 
    ],
 
  },
 
  {
 
    id: '3b',
 
    titulo: 'Pão de queijo',
 
    cor: '#e9c46a',
 
    Imagem: 'https://essareceitafunciona.com.br/wp-content/uploads/2022/07/Pao-de-queijo-Essa-Receita-Funciona-9.jpg%27',
 
    descrição: 'Pão de queijo douradinho para acompanhar o café.',
 
    info: 'Polvilho, queijo e ovos',
 
    dificuldade: '👨‍🍳 Fácil',
 
    duracao: '30min',
 
    categorias: ['⭐ Todas', '🍳 Café da manhã', '🌱 Vegetarianas'],
 
    condicoes: [
  'Vegetariano',
  'Flexitariano',
  'Pescetariano',
  'Ovolactovegetariano',
  'Low sugar',
],
 
    ingredientes: [
 
      { nome: 'Polvilho doce', unidade: '2 xícaras' },
 
      { nome: 'Leite', unidade: '1/2 xícara' },
 
      { nome: 'Óleo', unidade: '1/4 xícara' },
 
      { nome: 'Ovo', unidade: '1 unidade' },
 
      { nome: 'Queijo ralado', unidade: '1 xícara' },
 
    ],
 
    modoDePreparo: [
 
      'Aqueça o leite com o óleo e despeje sobre o polvilho.',
 
      'Espere amornar e misture o ovo e o queijo até formar uma massa.',
 
      'Faça bolinhas e asse a 200 °C por cerca de 25 minutos.',
 
    ],
 
  },
 
  {
 
    id: '3c',
 
    titulo: 'Macarrão alho e óleo',
 
    cor: '#606c38',
 
    Imagem: 'https://d135llbe2j366l.cloudfront.net/compressed/macarrao-ao-alho-e-oleo-com-5-ingredientes-google.webp%27',
 
    descrição: 'Receita rápida de macarrão com alho dourado e azeite.',
 
    info: 'Macarrão, alho e azeite',
 
    dificuldade: '👨‍🍳 Fácil',
 
    duracao: '15min',
 
    categorias: ['⭐ Todas', '👩‍🍳 Almoço', '👩‍🍳 Janta', '⚡ Rápidas', '💰 Econômicas', '🌱 Vegetarianas'],
 
    condicoes: [
  'Vegetariano',
  'Vegano',
  'Flexitariano',
  'Pescetariano',
  'Ovolactovegetariano',
  'Low sugar',
  'Mediterrânea'
],
 
    ingredientes: [
 
      { nome: 'Macarrão', unidade: '250 g' },
 
      { nome: 'Alho', unidade: '4 dentes' },
 
      { nome: 'Azeite', unidade: '4 colheres' },
 
      { nome: 'Salsinha', unidade: 'a gosto' },
 
      { nome: 'Sal', unidade: 'a gosto' },
 
    ],
 
    modoDePreparo: [
 
      'Cozinhe o macarrão em água com sal e escorra.',
 
      'Doure o alho fatiado no azeite em fogo baixo.',
 
      'Misture o macarrão ao alho e finalize com salsinha.',
 
    ],
 
  },
 
  {
 
    id: '3d',
 
    titulo: 'Arroz de forno',
 
    cor: '#588157',
 
    Imagem: 'https://guiadacozinha.com.br/wp-content/uploads/2019/10/arroz-de-forno-natalino.jpg',
 
    descrição: 'Arroz gratinado com frango, legumes e queijo.',
 
    info: 'Arroz, frango e queijo',
 
    dificuldade: '👨‍🍳 Fácil',
 
    duracao: '45min',
 
    categorias: ['⭐ Todas', '👩‍🍳 Almoço', '👩‍🍳 Janta'],
 
    condicoes: [
  'Flexitariano'
],
 
    ingredientes: [
 
      { nome: 'Arroz cozido', unidade: '3 xícaras' },
 
      { nome: 'Frango desfiado', unidade: '1 xícara' },
 
      { nome: 'Milho', unidade: '1/2 lata' },
 
      { nome: 'Molho de tomate', unidade: '1/2 xícara' },
 
      { nome: 'Queijo mussarela', unidade: '100 g' },
 
    ],
 
    modoDePreparo: [
 
      'Misture o arroz cozido com o frango, o milho e o molho de tomate.',
 
      'Coloque em um refratário e cubra com a mussarela.',
 
      'Leve ao forno a 200 °C até o queijo derreter e dourar.',
 
    ],
 
  },
 
 
 
{
 
  id: '3e',
 
  titulo: 'Pão de alho para churrasco',
 
  cor: '#d4a373',
 
  Imagem: 'https://visaocidade.com.br/wp-content/uploads/2025/05/Pao-de-Alho.jpg',
 
  descrição: 'Pão francês amanhecido com pasta cremosa de alho, ervas e queijo parmesão.',
 
  info: 'Pão francês, maionese, alho e parmesão',
 
  dificuldade: '👨‍🍳 Muito Fácil',
 
  duracao: '15min',
 
  categorias: ['⭐ Todas', '⚡ Rápidas', '🌱 Vegetarianas'],
 
  condicoes: [
  'Vegetariano',
  'Flexitariano',
  'Pescetariano',
  'Ovolactovegetariano'
],
 
  ingredientes: [
 
    { nome: 'Pão francês amanhecido', unidade: '6 unidades médias' },
 
    { nome: 'Maionese', unidade: '1 pote pequeno' },
 
    { nome: 'Alho picadinho', unidade: '2 colheres de sopa' },
 
    { nome: 'Orégano', unidade: '1 colher de sopa rasa' },
 
    { nome: 'Cheiro-verde picado', unidade: '1/2 xícara de chá' },
 
    { nome: 'Queijo parmesão ralado', unidade: '1/2 xícara de chá' },
 
    { nome: 'Sal', unidade: 'a gosto' },
 
    { nome: 'Pimenta', unidade: 'a gosto' },
 
  ],
 
  modoDePreparo: [
 
    'Em uma tigela, misture a maionese, o alho picadinho, o orégano, o cheiro-verde, o sal e a pimenta.',
 
    'Faça cerca de quatro cortes horizontais em cada pão, sem separar completamente as fatias.',
 
    'Espalhe a pasta de alho entre os cortes e por toda a superfície dos pães.',
 
    'Polvilhe o queijo parmesão ralado por cima.',
 
    'Leve à churrasqueira e asse dos dois lados até os pães ficarem dourados e crocantes.',
 
    'Sirva ainda quente.',
 
  ],
 
},
 
 
 
{
 
  id: '3f',
 
  titulo: 'Camarão na moranga com Catupiry',
 
  cor: '#d97736',
 
  Imagem: 'https://guiadacozinha.com.br/wp-content/uploads/2011/01/Camarao-na-moranga-com-catupiry%C2%AE-768x619.jpg%27',
 
  descrição: 'Camarões cremosos com Catupiry e leite de coco, servidos dentro de uma moranga assada.',
 
  info: 'Camarão, moranga, Catupiry e leite de coco',
 
  dificuldade: '👨‍🍳 Elaborado',
 
  duracao: '1h',
 
  categorias: ['⭐ Todas', '👩‍🍳 Almoço', '👩‍🍳 Janta'],
 
  condicoes: [
  'Flexitariano',
  'Pescetariano'
],
 
  ingredientes: [
 
    { nome: 'Moranga grande', unidade: '1 unidade' },
 
    { nome: 'Camarão médio limpo', unidade: '1 kg' },
 
    { nome: 'Catupiry', unidade: '1 pote' },
 
    { nome: 'Palmito', unidade: '1 vidro' },
 
    { nome: 'Leite de coco', unidade: '1 garrafinha' },
 
    { nome: 'Cebola ralada', unidade: '1 unidade' },
 
    { nome: 'Alho', unidade: '2 dentes' },
 
    { nome: 'Tomate sem sementes', unidade: '2 unidades' },
 
    { nome: 'Farinha de trigo', unidade: '1 colher de sobremesa' },
 
    { nome: 'Azeite', unidade: 'para refogar' },
 
    { nome: 'Sal', unidade: 'a gosto' },
 
    { nome: 'Pimenta', unidade: 'a gosto' },
 
    { nome: 'Salsinha ou coentro', unidade: 'a gosto' },
 
  ],
 
  modoDePreparo: [
 
    'Corte uma tampa na moranga e retire todas as sementes.',
 
    'Lave a moranga, polvilhe sal em seu interior e envolva-a em papel-alumínio.',
 
    'Leve ao forno por aproximadamente 45 minutos, até ficar macia.',
 
    'Retire algumas lascas da polpa da moranga com uma colher, sem perfurar a casca, e reserve.',
 
    'Em uma panela, aqueça o azeite e refogue a cebola e o alho.',
 
    'Adicione os tomates picados e as lascas de moranga. Cozinhe por cerca de 10 minutos.',
 
    'Acrescente o palmito picado e o camarão. Cozinhe por poucos minutos, até o camarão ficar cozido.',
 
    'Junte o leite de coco.',
 
    'Dissolva a farinha de trigo em um pouco de água e acrescente ao refogado, mexendo até engrossar levemente.',
 
    'Desligue o fogo e misture metade do Catupiry ao recheio.',
 
    'Experimente e ajuste o sal e a pimenta.',
 
    'Com a moranga ainda quente, espalhe o restante do Catupiry no fundo e nas laterais internas.',
 
    'Coloque o recheio quente dentro da moranga.',
 
    'Finalize com salsinha ou coentro e sirva.',
 
  ],
 
},
 
 
 
{
 
  id: '3g',
 
  titulo: 'Macarrão com presunto e molho branco',
 
  cor: '#dda15e',
 
  Imagem: 'https://canaldareceita.com.br/wp-content/uploads/2025/08/Receita-de-Macarrao-com-Molho-Branco-e-Presunto-Simples.webp%27',
 
  descrição: 'Macarrão com presunto refogado e molho branco cremoso.',
 
  info: 'Macarrão, presunto, leite e queijo ralado',
 
  dificuldade: '👨‍🍳 Fácil',
 
  duracao: '30min',
 
  categorias: ['⭐ Todas', '👩‍🍳 Almoço', '👩‍🍳 Janta'],
 
  condicoes: [
  'Flexitariano'
],
 
  ingredientes: [
 
    { nome: 'Macarrão', unidade: '1 pacote (500 g)' },
 
    { nome: 'Presunto picado', unidade: '500 g' },
 
    { nome: 'Leite', unidade: '2 copos' },
 
    { nome: 'Amido de milho', unidade: '2 colheres de sopa' },
 
    { nome: 'Queijo ralado', unidade: '2 colheres de sopa' },
 
    { nome: 'Manteiga', unidade: '1 colher de sopa' },
 
    { nome: 'Cheiro-verde', unidade: 'a gosto' },
 
    { nome: 'Sal', unidade: 'a gosto' },
 
    { nome: 'Pimenta-do-reino', unidade: 'a gosto' },
 
  ],
 
  modoDePreparo: [
 
    'Cozinhe o macarrão em água com sal, seguindo as instruções da embalagem.',
 
    'Escorra o macarrão e reserve.',
 
    'Pique o presunto e refogue em uma panela com a manteiga.',
 
    'Tempere o presunto com sal, pimenta-do-reino e cheiro-verde picado.',
 
    'Em outra panela, dissolva o amido de milho no leite.',
 
    'Acrescente a manteiga, o queijo ralado e uma pitada de sal.',
 
    'Cozinhe em fogo médio, mexendo até o molho branco engrossar.',
 
    'Em um refratário, faça camadas alternadas de macarrão, presunto e molho branco.',
 
    'Finalize com o presunto e polvilhe queijo ralado por cima.',
 
    'Leve ao forno preaquecido em temperatura moderada até aquecer bem e gratinar levemente.',
 
  ],
 
},
 
 
 
{
 
  id: '3h',
 
  titulo: 'Café cremoso',
 
  cor: '#6f4e37',
 
  Imagem: 'https://belitaraujo.com.br/wp-content/uploads/2023/05/receita-de-cafe-cremoso.jpg',
 
  descrição: 'Café cremoso e espumoso para misturar com leite quente.',
 
  info: 'Café solúvel, açúcar, água e leite',
 
  dificuldade: '👨‍🍳 Fácil',
 
  duracao: '30min',
 
  categorias: ['⭐ Todas', '🍳 Café da manhã','⚡ Rápidas'],
 
  condicoes: [
  'Vegetariano',
  'Flexitariano',
  'Pescetariano',
  'Ovolactovegetariano'
],
 
  ingredientes: [
 
    { nome: 'Café solúvel', unidade: '50 g' },
 
    { nome: 'Água fervendo', unidade: '200 ml' },
 
    { nome: 'Açúcar', unidade: '200 g' },
 
    { nome: 'Leite', unidade: '1 litro' },
 
    { nome: 'Chocolate em pó', unidade: 'a gosto' },
 
    { nome: 'Canela em pó', unidade: 'a gosto' },
 
  ],
 
  modoDePreparo: [
 
    'Coloque o café solúvel, o açúcar e a água fervendo na tigela da batedeira.',
 
    'Bata por aproximadamente 15 minutos, ou até formar um creme fofo e volumoso.',
 
    'Transfira o creme para recipientes adequados para congelamento.',
 
    'Guarde no congelador ou freezer. O creme pode ser conservado por até 30 dias, conforme a receita original.',
 
    'Para servir, aqueça o leite e coloque algumas colheradas do creme na xícara.',
 
    'Misture até o creme se incorporar ao leite.',
 
    'Se desejar, finalize com chocolate em pó ou canela.',
 
  ],
 
},
 
 
 
{
 
  id: '3i',
 
  titulo: 'Sunomono (salada de pepino japonesa)',
 
  cor: '#588157',
 
  Imagem: 'https://receitatodahora.com.br/wp-content/uploads/2024/03/sunomono-19031-1024x683.jpg',
 
  descrição: 'Salada japonesa refrescante de pepino com molho agridoce e gergelim.',
 
  info: 'Pepino japonês, vinagre de arroz, açúcar e gergelim',
 
  dificuldade: '👨‍🍳 Média',
 
  duracao: '30min',
 
  categorias: ['⭐ Todas', '👩‍🍳 Almoço', '👩‍🍳 Janta', '🌱 Vegetarianas'],
 
  condicoes: [
  'Vegetariano',
  'Vegano',
  'Flexitariano',
  'Pescetariano',
  'Ovolactovegetariano',
  'Low fat',
],
 
  ingredientes: [
 
    { nome: 'Pepino japonês', unidade: '3 unidades' },
 
    { nome: 'Vinagre de arroz', unidade: '300 ml' },
 
    { nome: 'Açúcar', unidade: '250 g' },
 
    { nome: 'Sal', unidade: '1 colher de chá' },
 
    { nome: 'Gergelim preto ou branco', unidade: 'a gosto' },
 
  ],
 
  modoDePreparo: [
 
    'Lave bem os pepinos japoneses.',
 
    'Corte os pepinos em fatias bem finas.',
 
    'Coloque as fatias em uma peneira, acrescente o sal e deixe descansar por cerca de 30 minutos para liberar o excesso de água.',
 
    'Lave os pepinos em água corrente para retirar o excesso de sal e escorra bem.',
 
    'Em uma panela, misture o vinagre de arroz e o açúcar.',
 
    'Aqueça em fogo baixo, mexendo até o açúcar dissolver. Não deixe ferver intensamente.',
 
    'Espere o molho esfriar completamente.',
 
    'Coloque os pepinos em um recipiente e despeje o molho frio por cima.',
 
    'Leve à geladeira por algumas horas para absorver o sabor.',
 
    'Finalize com gergelim antes de servir.',
 
  ],
 
},
 
 
 
{
 
  id: '3j',
 
  titulo: 'Bolo mousse de chocolate',
 
  cor: '#6f4e37',
 
  Imagem: 'https://tse2.mm.bing.net/th/id/OIP.xwYcFfyFg4Zf7MASvtRDSQHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
 
  descrição: 'Bolo de chocolate fofinho com uma cobertura cremosa de mousse.',
 
  info: 'Chocolate, farinha de trigo, ovos e chantilly',
 
  dificuldade: '👨‍🍳 Elaborada',
 
  duracao: 'Mais de 1h30min',
 
  categorias: ['⭐ Todas', '🍰 Sobremesas'],
 
  condicoes: [
  'Vegetariano',
  'Flexitariano',
  'Pescetariano',
  'Ovolactovegetariano'
],
 
  ingredientes: [
 
    { nome: 'Ovos', unidade: '6 unidades' },
 
    { nome: 'Açúcar', unidade: '1 xícara de chá' },
 
    { nome: 'Farinha de trigo', unidade: '1 xícara de chá' },
 
    { nome: 'Chocolate em pó', unidade: 'a gosto' },
 
    { nome: 'Óleo', unidade: '1/2 xícara' },
 
    { nome: 'Fermento em pó', unidade: '1 colher de café cheia' },
 
    { nome: 'Chocolate amargo', unidade: '300 g' },
 
    { nome: 'Chantilly fresco', unidade: '500 ml' },
 
    { nome: 'Açúcar para a mousse', unidade: '2 colheres rasas' },
 
  ],
 
  modoDePreparo: [
 
    'Preaqueça o forno em temperatura média.',
 
    'Bata os ovos com o açúcar até a mistura ficar clara e volumosa.',
 
    'Peneire a farinha de trigo e o chocolate em pó e incorpore delicadamente à mistura.',
 
    'Adicione o óleo em fio e misture.',
 
    'Acrescente o fermento e mexa delicadamente.',
 
    'Despeje a massa em uma forma redonda untada e enfarinhada.',
 
    'Asse por cerca de 40 minutos ou até que o bolo esteja assado.',
 
    'Derreta o chocolate amargo e deixe amornar.',
 
    'Bata o chantilly com o açúcar até ficar firme.',
 
    'Acrescente o chocolate derretido ao chantilly e misture até formar a mousse.',
 
    'Depois que o bolo esfriar, corte-o ao meio, se desejar, e recheie com a mousse.',
 
    'Cubra o bolo com o restante da mousse e leve à geladeira por cerca de 2 horas.',
 
  ],
 
},
 
 
 
{
 
  id: '3k',
 
  titulo: 'Sopa de legumes com macarrão',
 
  cor: '#dda15e',
 
  Imagem: 'https://receitasgalo.com.br/images/receitas/398/galo-imagem-receitas-sopa-de-macarrao-com-acem-e-legumes-share.jpg%27',
 
  descrição: 'Sopa quentinha com carne, macarrão e legumes variados.',
 
  info: 'Carne bovina, batata, cenoura e macarrão',
 
  dificuldade: '👨‍🍳 Fácil',
 
  duracao: '45min',
 
  categorias: ['⭐ Todas', '👩‍🍳 Almoço', '👩‍🍳 Janta'],
 
  condicoes: [
  'Flexitariano',
],
 
  ingredientes: [
 
    { nome: 'Cebola', unidade: '1 unidade média' },
 
    { nome: 'Carne bovina', unidade: '250 g' },
 
    { nome: 'Tomate', unidade: '1 unidade média' },
 
    { nome: 'Batata', unidade: '2 unidades médias' },
 
    { nome: 'Cenoura', unidade: '2 unidades médias' },
 
    { nome: 'Mandioquinha', unidade: '2 unidades médias' },
 
    { nome: 'Vagem', unidade: '12 unidades' },
 
    { nome: 'Macarrão para sopa', unidade: '2 xícaras' },
 
    { nome: 'Caldo de carne', unidade: '1 tablete' },
 
    { nome: 'Tempero pronto', unidade: '1 envelope' },
 
    { nome: 'Pimenta-do-reino ou calabresa', unidade: '1 pitada' },
 
    { nome: 'Salsinha e cebolinha', unidade: '1 xícara picadas' },
 
    { nome: 'Sal', unidade: 'a gosto' },
 
    { nome: 'Óleo', unidade: '1 fio' },
 
    { nome: 'Água', unidade: 'o suficiente' },
 
  ],
 
  modoDePreparo: [
 
    'Aqueça um fio de óleo em uma panela de pressão.',
 
    'Acrescente a cebola picada e deixe dourar.',
 
    'Adicione a carne bovina e refogue até dourar.',
 
    'Junte o tomate picado, o caldo de carne e o tempero pronto.',
 
    'Acrescente a batata, a cenoura, a mandioquinha e a vagem. Refogue por cerca de 3 minutos.',
 
    'Adicione a salsinha, a cebolinha, a pimenta, o sal e a água.',
 
    'Feche a panela de pressão e cozinhe por cerca de 40 minutos, seguindo as instruções de segurança do fabricante.',
 
    'Após o cozimento, desligue o fogo e espere a pressão sair completamente antes de abrir a panela.',
 
    'Acrescente o macarrão e cozinhe até ficar macio, sem deixá-lo mole demais.',
 
    'Ajuste o sal, se necessário, e sirva quente.',
 
  ],
 
},
 
 
 
{
 
  id: '3l',
 
  titulo: 'Mapo tofu',
 
  cor: '#bc4749',
 
  Imagem: 'https://norecipes.com/wp-content/uploads/2018/02/mapo-tofu-recipe-011.jpg',
 
  descrição: 'Prato chinês com tofu, carne moída e molho apimentado.',
 
  info: 'Tofu, carne moída, shoyu e gengibre',
 
  dificuldade: '👨‍🍳 Elaborado',
 
  duracao: '30min',
 
  categorias: ['⭐ Todas', '👩‍🍳 Almoço', '👩‍🍳 Janta'],
 
  condicoes: [
  'Flexitariano',
  'High protein',
],
 
  ingredientes: [
 
    { nome: 'Tofu mole', unidade: '500 g' },
 
    { nome: 'Carne moída bovina ou suína', unidade: '200 g' },
 
    { nome: 'Cebola picada', unidade: '1/2 unidade' },
 
    { nome: 'Alho picado', unidade: '3 dentes' },
 
    { nome: 'Gengibre picado', unidade: '1 colher de sopa' },
 
    { nome: 'Pasta de feijão apimentada', unidade: '1 colher de sopa' },
 
    { nome: 'Pimenta-de-sichuan ou calabresa', unidade: '1 colher de chá' },
 
    { nome: 'Molho shoyu', unidade: '2 colheres de sopa' },
 
    { nome: 'Água', unidade: '1 xícara' },
 
    { nome: 'Amido de milho', unidade: '1 colher de sopa' },
 
    { nome: 'Água para dissolver o amido', unidade: '3 colheres de sopa' },
 
    { nome: 'Sal', unidade: 'a gosto' },
 
    { nome: 'Cebolinha picada', unidade: 'a gosto' },
 
    { nome: 'Óleo', unidade: 'para refogar' },
 
  ],
 
  modoDePreparo: [
 
    'Corte o tofu em cubos pequenos e cozinhe em água com sal.',
 
    'Quando a água ferver, deixe cozinhar por cerca de 2 minutos. Escorra e reserve.',
 
    'Aqueça um pouco de óleo em uma panela e frite a carne moída até dourar.',
 
    'Acrescente a cebola, o alho e o gengibre e refogue.',
 
    'Adicione a pasta de feijão apimentada, a pimenta e o molho shoyu. Misture bem.',
 
    'Acrescente a água e espere levantar fervura.',
 
    'Adicione o tofu e misture delicadamente para não quebrar os cubos.',
 
    'Dissolva o amido de milho nas 3 colheres de água e acrescente aos poucos.',
 
    'Mexa até o molho engrossar, ajuste o sal e finalize com a cebolinha.',
 
  ],
 
},
 
 
 
  {
 
    id: '3m',
 
    titulo: 'Salada simples',
 
    cor: '#588157',
 
    Imagem: 'https://th.bing.com/th/id/R.2f9b9ca0549a86009f7266c4962b69a9?rik=CDFbxjyqmkBUcw&pid=ImgRaw&r=0',
 
    descrição: 'Salada fresca e colorida com verduras e legumes.',
 
    info: 'Alface, cenoura, beterraba e tomate',
 
    dificuldade: '👨‍🍳 Fácil',
 
    duracao: '15min',
 
    categorias: ['⭐ Todas', '👩‍🍳 Almoço', '👩‍🍳 Janta', '🌱 Vegetarianas'],
 
    condicoes: [
  'Vegetariano',
  'Vegano',
  'Flexitariano',
  'Pescetariano',
  'Ovolactovegetariano',
  'Mediterrânea'
],
 
    ingredientes: [
 
      { nome: 'Alface', unidade: '1 unidade' },
 
      { nome: 'Cenoura', unidade: '2 unidades' },
 
      { nome: 'Beterraba', unidade: '1 unidade' },
 
      { nome: 'Tomate', unidade: '1 unidade' },
 
      { nome: 'Cebola', unidade: '1 unidade' },
 
      { nome: 'Sal', unidade: '1 colher de chá' },
 
      { nome: 'Açúcar', unidade: '1 pitada' },
 
      { nome: 'Azeite', unidade: '1 colher de sopa' },
 
      { nome: 'Vinagre', unidade: '2 a 3 colheres de sopa' },
 
    ],
 
    modoDePreparo: [
 
      'Lave bem todos os vegetais.',
 
      'Rasgue as folhas de alface em pedaços menores.',
 
      'Rale a cenoura e a beterraba.',
 
      'Pique o tomate e corte a cebola em rodelas ou pedaços pequenos.',
 
      'Misture todos os vegetais em uma tigela.',
 
      'Em um recipiente separado, misture o sal, o açúcar, o azeite e o vinagre.',
 
      'Despeje o molho sobre a salada, misture e sirva.',
 
    ],
 
  },
 
 
 
{
  id: '3n',
  titulo: 'Enroladinho de queijo e presunto',
  cor: '#d4a373',
  Imagem: 'https://receitatodahora.com.br/wp-content/uploads/2023/04/enroladinho-de-presunto-e-queijo-empanado-31-03.jpg%27',
  descrição: 'Massa macia recheada com presunto, queijo mussarela e requeijão.',
  info: 'Farinha de trigo, fermento, presunto e mussarela',
  dificuldade: '👨‍🍳 Média',
  duracao: '45min',
  categorias: ['⭐ Todas', '🍳 Café da manhã', '🥖 Lanches'],
 
  condicoes: [
  'Flexitariano'
],
 
  ingredientes: [
    { nome: 'Farinha de trigo', unidade: '500 g' },
    { nome: 'Fermento biológico seco', unidade: '10 g' },
    { nome: 'Água morna', unidade: '300 ml' },
    { nome: 'Óleo', unidade: '100 ml' },
    { nome: 'Açúcar', unidade: '2 colheres de sopa' },
    { nome: 'Sal', unidade: '1 colher de chá' },
    { nome: 'Presunto', unidade: 'a gosto' },
    { nome: 'Queijo mussarela', unidade: 'a gosto' },
    { nome: 'Requeijão', unidade: 'a gosto' },
    { nome: 'Gema de ovo', unidade: '1 unidade para pincelar' },
    { nome: 'Orégano', unidade: 'a gosto' },
  ],
  modoDePreparo: [
    'Em uma tigela, misture o fermento biológico seco com a farinha de trigo.',
    'Acrescente a água morna, o óleo, o açúcar e o sal.',
    'Misture os ingredientes até formar uma massa.',
    'Sove a massa por aproximadamente 5 minutos.',
    'Cubra a massa e deixe descansar até dobrar de tamanho.',
    'Divida a massa em partes e abra cada uma com um rolo, deixando-a bem fina.',
    'Espalhe o requeijão e coloque o presunto e a mussarela sobre a massa.',
    'Retire o excesso de massa e dobre as laterais como um envelope.',
    'Corte em pedaços menores e coloque em uma forma untada.',
    'Pincele os enroladinhos com gema de ovo e finalize com orégano.',
    'Deixe crescer por mais aproximadamente 1 hora.',
    'Leve ao forno preaquecido a 180 °C por cerca de 20 minutos, até dourar.',
  ],
},
 
 
 
{
  id: '3o',
  titulo: 'Enroladinho de queijo',
  cor: '#e9c46a',
  Imagem: 'https://horareceita.com/wp-content/uploads/2022/11/Enroladinho-de-queijo.png',
  descrição: 'Enroladinho de massa macia recheado com queijo, finalizado com leite condensado e coco ralado.',
  info: 'Farinha de trigo, fermento, queijo e coco ralado',
  dificuldade: '👨‍🍳 Média',
  duracao: '1h',
  categorias: ['⭐ Todas', '🍳 Café da manhã', '🥖 Lanches'],
 
  condicoes: [
  'Vegetariano',
  'Flexitariano',
  'Pescetariano',
  'Ovolactovegetariano'
],
 
  ingredientes: [
    { nome: 'Farinha de trigo', unidade: '1 kg' },
    { nome: 'Fermento biológico', unidade: '2 tabletes' },
    { nome: 'Ovos', unidade: '2 unidades' },
    { nome: 'Óleo', unidade: '1/2 copo' },
    { nome: 'Água morna', unidade: '1 copo' },
    { nome: 'Leite morno', unidade: '1 copo' },
    { nome: 'Açúcar', unidade: '3 colheres de sopa' },
    { nome: 'Sal', unidade: '1/2 colher de sopa' },
    { nome: 'Queijo para recheio', unidade: 'a gosto' },
    { nome: 'Gema de ovo', unidade: '1 unidade' },
    { nome: 'Leite condensado', unidade: 'para finalizar' },
    { nome: 'Coco ralado', unidade: 'para polvilhar' },
  ],
  modoDePreparo: [
    'Em uma tigela, misture o leite morno, a água morna, o óleo, um pouco da farinha e o fermento, formando uma mistura cremosa.',
    'Acrescente o sal, o açúcar e os ovos.',
    'Adicione o restante da farinha aos poucos, misturando até a massa desgrudar das mãos.',
    'Sove bastante a massa até ficar homogênea.',
    'Divida a massa em duas partes e cubra com um pano úmido, sem encostar na massa.',
    'Deixe descansar por aproximadamente 15 minutos.',
    'Abra a massa com um rolo e corte tiras de aproximadamente 5 cm de largura.',
    'Coloque o queijo nas tiras e enrole, formando os enroladinhos.',
    'Pincele os enroladinhos com a gema de ovo.',
    'Coloque em uma forma untada com óleo.',
    'Leve ao forno preaquecido a 160 °C por aproximadamente 15 minutos, até assar.',
    'Depois de assados, pincele leite condensado sobre os enroladinhos.',
    'Finalize polvilhando coco ralado.',
  ],
},
 
 
{
  id: '3q',
  titulo: 'Pão de batata-doce',
  cor: '#d4a373',
  Imagem: 'https://momentosdocesesalgados.com/wp-content/uploads/2020/12/Receita-de-Pao-de-Batata-Doce-1024x576.jpg%27',
  descrição: 'Pão fofinho de batata-doce, com sabor suave e levemente adocicado.',
  info: 'Batata-doce, farinha de trigo, leite e manteiga',
  dificuldade: '👨‍🍳 Média',
  duracao: 'Mais de 1h30min',
  categorias: ['⭐ Todas', '🍳 Café da manhã', '🥖 Lanches'],
 
  condicoes: [
  'Vegetariano',
  'Flexitariano',
  'Pescetariano',
  'Ovolactovegetariano'
],
 
  ingredientes: [
    { nome: 'Farinha de trigo', unidade: '3 xícaras de chá' },
    { nome: 'Batata-doce cozida e amassada', unidade: '1 e 1/2 xícara de chá' },
    { nome: 'Fermento biológico', unidade: '1 envelope (10 g)' },
    { nome: 'Manteiga em temperatura ambiente', unidade: '4 colheres de sopa' },
    { nome: 'Açúcar', unidade: '1/2 xícara de chá' },
    { nome: 'Leite morno', unidade: '1 xícara de chá' },
    { nome: 'Gema de ovo', unidade: '1 unidade' },
    { nome: 'Ovo', unidade: '1 unidade' },
  ],
  modoDePreparo: [
    'Cozinhe a batata-doce até ficar macia e amasse até formar um purê.',
    'Em uma tigela, misture a farinha de trigo, a batata-doce, o fermento biológico, a manteiga, o açúcar, o leite morno, a gema e o ovo.',
    'Sove bem a massa até ficar homogênea e macia.',
    'Continue sovando para desenvolver a massa e deixá-la mais leve.',
    'Divida a massa em duas partes e modele os pães.',
    'Coloque os pães em formas untadas e enfarinhadas.',
    'Cubra e deixe crescer até dobrar de volume.',
    'Leve ao forno preaquecido a 180 °C por aproximadamente 35 minutos.',
    'Retire do forno quando estiverem dourados e deixe esfriar antes de servir.',
  ],
},
 
 
 
 
{
  id: '3r',
  titulo: 'Macarrão de baixas calorias',
  cor: '#606c38',
  Imagem: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
  descrição: 'Macarrão integral com molho de tomate caseiro, abobrinha e um toque de carne moída.',
  info: 'Macarrão integral, tomate, abobrinha e carne moída',
  dificuldade: '👨‍🍳 Fácil',
  duracao: '30min',
  categorias: ['⭐ Todas', '👩‍🍳 Almoço', '👩‍🍳 Janta'],
 
  condicoes: [
  'Vegetariano',
  'Vegano',
  'Flexitariano',
  'Pescetariano',
  'Ovolactovegetariano',
  'Mediterrânea'
],
 
  ingredientes: [
    { nome: 'Macarrão parafuso integral', unidade: '1 copo pequeno' },
    { nome: 'Cebola', unidade: '1/2 unidade média' },
    { nome: 'Tomate maduro', unidade: '1 unidade média' },
    { nome: 'Extrato de tomate', unidade: '1 colher de sopa' },
    { nome: 'Alho', unidade: '1 dente' },
    { nome: 'Água', unidade: '200 ml' },
    { nome: 'Azeite de oliva', unidade: '1 colher de sopa' },
    { nome: 'Abobrinha picada', unidade: 'a gosto' },
    { nome: 'Carne moída bovina ou de frango', unidade: '1 colher de sopa cheia (opcional)' },
    { nome: 'Vinagre ou suco de limão', unidade: '1 colher de sopa' },
    { nome: 'Sal', unidade: 'a gosto' },
    { nome: 'Temperos', unidade: 'a gosto' },
  ],
  modoDePreparo: [
    'Cozinhe o macarrão em uma panela com água até ficar macio.',
    'Em outra panela, coloque a carne moída e o vinagre ou suco de limão e refogue.',
    'Desligue o fogo após refogar a carne.',
    'No liquidificador, bata a cebola, o tomate, o alho, o extrato de tomate e a água.',
    'Despeje o molho batido na panela com a carne refogada.',
    'Ligue o fogo novamente e deixe o molho cozinhar.',
    'Acrescente a abobrinha picada e deixe cozinhar junto com o molho.',
    'Adicione o azeite, o sal e os temperos de sua preferência.',
    'Cozinhe até os legumes ficarem macios.',
    'Escorra o macarrão e coloque o molho por cima.',
    'Misture delicadamente e sirva.',
  ],
},
 
 
{
  id: '3s',
  titulo: 'Brigadeiro cremoso de colher',
  cor: '#6f4e37',
  Imagem: 'https://tudodelicious.com/wp-content/uploads/2025/03/Brigadeiro-de-Colher.jpeg',
  descrição: 'Brigadeiro de chocolate bem cremoso, perfeito para servir em pequenos potinhos.',
  info: 'Leite condensado, creme de leite e chocolate em pó',
  dificuldade: '👨‍🍳 Fácil',
  duracao: '30min',
  categorias: ['⭐ Todas', '🍰 Sobremesas'],
 
  condicoes: [
  'Vegetariano',
  'Flexitariano',
  'Pescetariano',
  'Ovolactovegetariano'
],
 
  ingredientes: [
    { nome: 'Leite condensado', unidade: '1 lata' },
    { nome: 'Creme de leite', unidade: '1 lata ou caixa' },
    { nome: 'Chocolate em pó', unidade: '3 colheres de sopa' },
    { nome: 'Margarina', unidade: '1 colher de chá' },
    { nome: 'Confeitos coloridos', unidade: 'a gosto' },
    { nome: 'Cerejas ou morangos', unidade: 'a gosto (opcional)' },
  ],
  modoDePreparo: [
    'Coloque o leite condensado, a margarina e o chocolate em pó em uma panela.',
    'Leve ao fogo baixo, mexendo sempre para não grudar no fundo.',
    'Continue mexendo até atingir o ponto de brigadeiro mole e cremoso.',
    'Desligue o fogo.',
    'Acrescente o creme de leite e misture até ficar homogêneo.',
    'Distribua o brigadeiro em pequenos potinhos.',
    'Espere esfriar e decore com confeitos coloridos, cerejas ou morangos.',
    'Sirva em temperatura ambiente ou gelado.',
  ],
},
 
 
 
 
];
 
 
 
 
export default function DadosDosFilmes(): { id: string; filmes: Receita[] }[] {
 
  return [
 
    {
 
      id: 'todas',
 
      filmes: [
 
        ...receitasRecomendadas,
 
        ...receitasSobremesas,
 
        ...receitasMaisProcuradas,
 
      ],
 
    },
 
  ];
 
}