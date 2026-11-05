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

    Imagem: 'https://th.bing.com/th/id/OSK.46f112c44ddd4c901153aaed3dc715df?w=424&h=424&c=7&rs=1&qlt=90&o=6&pid=16.1',

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

    Imagem: 'https://th.bing.com/th/id/R.9bca87536215b1a0ba2b702c6fac9598?rik=ciygBz5umOx7Yg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-ZoDh7zILX6A%2fVi6DwM1EOZI%2fAAAAAAAAD5A%2ffu8zQEOCQvE%2fs1600%2fpudim-de-leite-condensado.png&ehk=g9mpRHnOkZXfVRHPMdZDJXf5g%2bM0roX%2b%2b2oMTMtW7%2fY%3d&risl=&pid=ImgRaw&r=0',

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

  
{

  id: '2f',

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
  id: '2g',
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


{

  id: '2h',

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
  id: '2i',
  titulo: 'Danoninho caseiro',
  cor: '#ed829f',
  Imagem: 'https://tse3.mm.bing.net/th/id/OIP.dvJbNVOpcsJU6FAcNTCr9QHaFD?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
  descrição: 'Sobremesa cremosa com sabor de morango, feita com poucos ingredientes e preparada no liquidificador.',
  info: 'Leite condensado, creme de leite, iogurte natural e suco em pó de morango',
  dificuldade: '👨‍🍳 Fácil',
  duracao: '10min + geladeira',
  categorias: ['⭐ Todas', '🍰 Sobremesas', '⚡ Rápidas', '💰 Econômicas'],
  condicoes: ['Flexitariano'],
  ingredientes: [
    { nome: 'Leite condensado', unidade: '1 lata' },
    { nome: 'Creme de leite', unidade: '2 caixas' },
    { nome: 'Iogurte natural', unidade: '200 g' },
    { nome: 'Suco em pó sabor morango', unidade: '1 pacote' },
  ],
  modoDePreparo: [
    'Coloque o leite condensado, o creme de leite, o iogurte natural e o suco em pó no liquidificador.',
    'Bata todos os ingredientes até obter uma mistura cremosa e homogênea.',
    'Transfira a mistura para um recipiente ou distribua em potinhos individuais.',
    'Leve à geladeira até ficar firme.',
    'Sirva gelado.',
  ],
},

{
  id: '2j',
  titulo: 'Pavê de chocolate',
  cor: '#512b35',
  Imagem: 'https://nsmoldes.com.br/wp-content/uploads/2025/11/Pave-Classico-de-Chocolate-2048x1152.jpg',
  descrição: 'Sobremesa gelada feita com camadas de biscoito maisena, creme branco, creme de chocolate e cobertura cremosa.',
  info: 'Biscoito maisena, leite condensado, leite, chocolate em pó e creme de leite',
  dificuldade: '👨‍🍳 Fácil',
  duracao: '55min',
  categorias: ['⭐ Todas', '🍰 Sobremesas'],
  condicoes: ['Flexitariano'],
  ingredientes: [
    { nome: 'Biscoito maisena', unidade: '1 pacote' },
    { nome: 'Leite', unidade: '1/2 copo' },
    { nome: 'Chocolate em pó', unidade: '1 colher de sobremesa para molhar os biscoitos' },
    { nome: 'Leite condensado', unidade: '2 latas' },
    { nome: 'Leite', unidade: '2 latas (medida da lata de leite condensado)' },
    { nome: 'Amido de milho', unidade: '2 colheres de sobremesa' },
    { nome: 'Gemas', unidade: '4 unidades' },
    { nome: 'Chocolate em pó', unidade: '4 colheres de sopa' },
    { nome: 'Claras', unidade: '4 unidades' },
    { nome: 'Açúcar', unidade: '4 colheres de sopa' },
    { nome: 'Creme de leite sem soro', unidade: '1 lata' },
  ],
  modoDePreparo: [
    'Em uma tigela, misture 1/2 copo de leite com 1 colher de sobremesa de chocolate em pó até dissolver.',
    'Molhe os biscoitos maisena nessa mistura e reserve.',
    'Para preparar o creme branco, coloque em uma panela 1 lata de leite condensado, 1 lata de leite, 1 colher de sobremesa de amido de milho e 2 gemas.',
    'Leve ao fogo médio, mexendo até obter um creme grosso e homogêneo.',
    'Para preparar o creme de chocolate, repita o processo utilizando a outra lata de leite condensado, a outra medida de leite, 1 colher de sobremesa de amido de milho, 2 gemas e 4 colheres de chocolate em pó.',
    'Bata as claras em neve com o açúcar até formar um creme consistente.',
    'Acrescente o creme de leite sem soro às claras e misture delicadamente.',
    'Em um refratário grande, coloque uma camada de creme branco.',
    'Adicione uma camada de biscoitos umedecidos e, em seguida, uma camada de creme de chocolate.',
    'Continue alternando as camadas até preencher o refratário.',
    'Finalize com a cobertura de claras e creme de leite.',
    'Leve à geladeira por aproximadamente 40 minutos antes de servir.',
  ],
},

{
  id: '2k',
  titulo: 'Brigadeiro de leite em pó',
  cor: '#e8d9bd',
  Imagem: 'https://static.itdg.com.br/images/auto-auto/996ba9fa5378d178e7188e2990734527/shutterstock-1962997534-editado.jpeg',
  descrição: 'Brigadeiros macios e docinhos feitos com leite condensado e leite em pó, finalizados com uma camada de leite em pó.',
  info: 'Leite condensado, leite em pó e manteiga',
  dificuldade: '👨‍🍳 Fácil',
  duracao: '10min',
  categorias: ['⭐ Todas', '🍰 Sobremesas', '⚡ Rápidas'],
  condicoes: ['Flexitariano'],
  ingredientes: [
    { nome: 'Leite condensado', unidade: '1 lata' },
    { nome: 'Leite em pó', unidade: '4 colheres de sopa' },
    { nome: 'Manteiga', unidade: '1 colher de sopa' },
    { nome: 'Leite em pó para enrolar', unidade: 'A gosto' },
  ],
  modoDePreparo: [
    'Coloque a manteiga e o leite condensado em uma panela.',
    'Acrescente o leite em pó aos poucos, mexendo continuamente para evitar a formação de grumos.',
    'Leve ao fogo, sem parar de mexer, até a mistura desgrudar do fundo da panela.',
    'Transfira a massa para um prato e deixe esfriar um pouco.',
    'Coloque leite em pó em outro prato para utilizar na finalização.',
    'Passe um pouco de manteiga nas mãos e enrole pequenas porções da massa em formato de bolinhas.',
    'Passe os brigadeiros no leite em pó até ficarem completamente cobertos.',
    'Sirva em seguida.',
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

    Imagem: 'https://essareceitafunciona.com.br/wp-content/uploads/2022/07/Pao-de-queijo-Essa-Receita-Funciona-9.jpg',

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

    Imagem: 'https://d135llbe2j366l.cloudfront.net/compressed/macarrao-ao-alho-e-oleo-com-5-ingredientes-google.webp',

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

  Imagem: 'https://guiadacozinha.com.br/wp-content/uploads/2011/01/Camarao-na-moranga-com-catupiry%C2%AE-768x619.jpg',

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

  Imagem: 'https://canaldareceita.com.br/wp-content/uploads/2025/08/Receita-de-Macarrao-com-Molho-Branco-e-Presunto-Simples.webp',

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

  id: '3i',

  titulo: 'Sopa de legumes com macarrão',

  cor: '#dda15e',

  Imagem: 'https://receitasgalo.com.br/images/receitas/398/galo-imagem-receitas-sopa-de-macarrao-com-acem-e-legumes-share.jpg',

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

  id: '3j',

  titulo: 'Mapo tofu',

  cor: '#bc4749',

  Imagem: 'https://i.pinimg.com/originals/0c/ea/3e/0cea3e13a286aa7d2bc799bcf9d0dcc2.jpg',

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

    id: '3k',

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
  id: '3l',
  titulo: 'Enroladinho de queijo e presunto',
  cor: '#d4a373',
  Imagem: 'https://receitatodahora.com.br/wp-content/uploads/2023/04/enroladinho-de-presunto-e-queijo-empanado-31-03.jpg',
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
  id: '3m',
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
  id: '3n',
  titulo: 'Pão de batata-doce',
  cor: '#d4a373',
  Imagem: 'https://momentosdocesesalgados.com/wp-content/uploads/2020/12/Receita-de-Pao-de-Batata-Doce-1024x576.jpg',
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
  id: '3o',
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
  id: '3p',
  titulo: 'Frango assado inteiro',
  cor: '#c47b45',
  Imagem: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=800&q=80',
  descrição: 'Frango inteiro assado e temperado com limão, alho, cebola e ervas frescas.',
  info: 'Frango inteiro, limão, alho, cebola e temperos',
  dificuldade: '👨‍🍳 Fácil',
  duracao: '⏳ 1h',
  categorias: ['⭐ Todas', '👩‍🍳 Almoço', '👩‍🍳 Janta'],
  condicoes: ['Flexitariano', 'High protein', 'Low carb', 'Low sugar'],
  ingredientes: [
    { nome: 'Frango inteiro', unidade: '1 unidade' },
    { nome: 'Cebola grande', unidade: '1 unidade picada' },
    { nome: 'Alho', unidade: '4 dentes amassados' },
    { nome: 'Limão', unidade: 'Suco de 1 unidade' },
    { nome: 'Sal', unidade: 'A gosto' },
    { nome: 'Pimenta-do-reino', unidade: 'A gosto' },
    { nome: 'Salsinha', unidade: '1/2 xícara' },
    { nome: 'Cebolinha', unidade: '1/2 xícara' },
  ],
  modoDePreparo: [
    'Limpe o frango por dentro e por fora.',
    'Coloque o frango em um recipiente fundo.',
    'Adicione a cebola, o alho, o suco de limão, o sal, a pimenta-do-reino, a salsinha e a cebolinha.',
    'Espalhe os temperos por toda a superfície do frango.',
    'Tampe o recipiente e deixe marinar por 20 minutos.',
    'Preaqueça o forno a 160 °C.',
    'Coloque o frango em uma assadeira e cubra com papel-alumínio.',
    'Asse por aproximadamente 1 hora.',
    'Retire o papel-alumínio e deixe dourar.',
  ],
},

{
  id: '3q',
  titulo: 'Panetone de chocolate com recheio',
  cor: '#4b2525',
  Imagem: 'https://receitadaboa.com.br/wp-content/uploads/2024/12/iStock-1830688513.jpg',
  descrição: 'Panetone caseiro fofinho, recheado com bastante ganache de chocolate e finalizado com uma cobertura cremosa.',
  info: 'Farinha de trigo, chocolate meio-amargo, creme de leite e manteiga',
  dificuldade: '👨‍🍳 Média',
  duracao: '⏳ 3h',
  categorias: ['⭐ Todas', '🍰 Sobremesas'],
  condicoes: ['Flexitariano'],
  ingredientes: [
    { nome: 'Farinha de trigo', unidade: '500 g' },
    { nome: 'Açúcar refinado', unidade: '50 g' },
    { nome: 'Fermento biológico seco', unidade: '15 g' },
    { nome: 'Leite morno', unidade: '250 ml' },
    { nome: 'Gemas de ovo', unidade: '3 unidades' },
    { nome: 'Manteiga sem sal', unidade: '2 colheres de sopa cheias' },
    { nome: 'Essência de panetone', unidade: '1 colher de chá' },
    { nome: 'Sal', unidade: '1 pitada' },
    { nome: 'Frutas secas ou gotas de chocolate', unidade: 'A gosto (opcional)' },
    { nome: 'Creme de leite', unidade: '400 g' },
    { nome: 'Chocolate meio-amargo ou ao leite', unidade: '500 g' },
  ],
  modoDePreparo: [
    'Coloque a farinha de trigo em uma tigela e abra um espaço no centro.',
    'Adicione o açúcar e o fermento nesse espaço.',
    'Acrescente um pouco do leite morno e misture para dissolver o fermento. Reserve o restante do leite.',
    'Adicione as gemas, a manteiga, a essência de panetone e o sal.',
    'Misture os ingredientes e acrescente o restante do leite aos poucos, até obter uma massa grudenta, mas que solte ligeiramente das mãos.',
    'Sove a massa em uma superfície lisa por aproximadamente 10 minutos.',
    'Coloque a massa novamente na tigela, cubra com um pano limpo e deixe descansar por 30 minutos.',
    'Divida a massa em duas partes e, se desejar, acrescente frutas secas ou gotas de chocolate.',
    'Modele duas bolas e coloque cada uma em uma forma de panetone de 500 g.',
    'Deixe crescer até a massa dobrar de tamanho e chegar perto da borda da forma.',
    'Asse em forno preaquecido a 180 °C por aproximadamente 45 minutos.',
    'Retire do forno e espere esfriar completamente.',
    'Pique o chocolate e derreta no micro-ondas, aquecendo de 30 em 30 segundos e mexendo nos intervalos.',
    'Acrescente o creme de leite ao chocolate derretido e misture até formar uma ganache homogênea.',
    'Deixe a ganache amornar em temperatura ambiente.',
    'Corte a parte superior do panetone, formando uma tampa.',
    'Retire parte do miolo em formato de cone, preservando aproximadamente 3 cm de massa nas laterais e no fundo.',
    'Recheie o espaço com a ganache, alternando com pedaços do miolo retirado.',
    'Coloque novamente a tampa do panetone.',
    'Espalhe mais ganache por cima para fazer a cobertura.',
    'Decore como desejar e leve à geladeira por pelo menos 1 hora para firmar.',
  ],
},

{
  id: '3r',
  titulo: 'Batata rústica na airfryer',
  cor: '#c18b45',
  Imagem: 'https://tse4.mm.bing.net/th/id/OIP.-LvApD6ripVbRn36x9cP9gHaD4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
  descrição: 'Batatas cortadas em formato de canoa, temperadas com ervas e assadas na airfryer até ficarem douradas e crocantes.',
  info: 'Batata, alecrim, tomilho, salsinha e azeite',
  dificuldade: '👨‍🍳 Fácil',
  duracao: '35min',
  categorias: ['⭐ Todas', '👩‍🍳 Almoço', '👩‍🍳 Janta', '🥗 Saudáveis', '⚡ Rápidas', '💰 Econômicas'],
  condicoes: ['Vegetariano', 'Vegano', 'Flexitariano', 'Pescetariano', 'Ovolactovegetariano', 'Low fat', 'Low sugar', 'Mediterrânea'],
  ingredientes: [
    { nome: 'Batatas', unidade: '4 unidades' },
    { nome: 'Alecrim', unidade: '4 ramos' },
    { nome: 'Tomilho', unidade: '4 ramos' },
    { nome: 'Salsinha picada', unidade: '1/2 maço' },
    { nome: 'Pimenta-do-reino', unidade: 'A gosto' },
    { nome: 'Sal', unidade: 'A gosto' },
    { nome: 'Azeite', unidade: 'A gosto' },
  ],
  modoDePreparo: [
    'Lave bem as batatas, escovando as cascas para retirar as impurezas.',
    'Seque completamente as batatas.',
    'Corte-as em formato de canoa, mantendo a casca.',
    'Coloque as batatas em uma tigela e regue com azeite.',
    'Adicione o sal, a pimenta-do-reino e a salsinha. Misture bem para espalhar os temperos.',
    'Preaqueça a airfryer a 200 °C.',
    'Coloque as batatas no cesto, evitando amontoá-las.',
    'Asse por aproximadamente 30 minutos.',
    'Na metade do tempo, abra o cesto e sacuda as batatas.',
    'Acrescente os ramos de alecrim e tomilho e regue com um pouco mais de azeite.',
    'Continue assando até as batatas ficarem douradas.',
    'Retire da airfryer e sirva ainda quente.',
  ],
},

{
  id: '3s',
  titulo: 'Danoninho caseiro',
  cor: '#ed829f',
  Imagem: 'https://tse3.mm.bing.net/th/id/OIP.dvJbNVOpcsJU6FAcNTCr9QHaFD?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
  descrição: 'Sobremesa cremosa com sabor de morango, feita com poucos ingredientes e preparada no liquidificador.',
  info: 'Leite condensado, creme de leite, iogurte natural e suco em pó de morango',
  dificuldade: '👨‍🍳 Fácil',
  duracao: '10min + geladeira',
  categorias: ['⭐ Todas', '🍰 Sobremesas', '⚡ Rápidas', '💰 Econômicas'],
  condicoes: ['Flexitariano'],
  ingredientes: [
    { nome: 'Leite condensado', unidade: '1 lata' },
    { nome: 'Creme de leite', unidade: '2 caixas' },
    { nome: 'Iogurte natural', unidade: '200 g' },
    { nome: 'Suco em pó sabor morango', unidade: '1 pacote' },
  ],
  modoDePreparo: [
    'Coloque o leite condensado, o creme de leite, o iogurte natural e o suco em pó no liquidificador.',
    'Bata todos os ingredientes até obter uma mistura cremosa e homogênea.',
    'Transfira a mistura para um recipiente ou distribua em potinhos individuais.',
    'Leve à geladeira até ficar firme.',
    'Sirva gelado.',
  ],
},

{
  id: '3t',
  titulo: 'Pavê de chocolate',
  cor: '#512b35',
  Imagem: 'https://nsmoldes.com.br/wp-content/uploads/2025/11/Pave-Classico-de-Chocolate-2048x1152.jpg',
  descrição: 'Sobremesa gelada feita com camadas de biscoito maisena, creme branco, creme de chocolate e cobertura cremosa.',
  info: 'Biscoito maisena, leite condensado, leite, chocolate em pó e creme de leite',
  dificuldade: '👨‍🍳 Fácil',
  duracao: '55min',
  categorias: ['⭐ Todas', '🍰 Sobremesas'],
  condicoes: ['Flexitariano'],
  ingredientes: [
    { nome: 'Biscoito maisena', unidade: '1 pacote' },
    { nome: 'Leite', unidade: '1/2 copo' },
    { nome: 'Chocolate em pó', unidade: '1 colher de sobremesa para molhar os biscoitos' },
    { nome: 'Leite condensado', unidade: '2 latas' },
    { nome: 'Leite', unidade: '2 latas (medida da lata de leite condensado)' },
    { nome: 'Amido de milho', unidade: '2 colheres de sobremesa' },
    { nome: 'Gemas', unidade: '4 unidades' },
    { nome: 'Chocolate em pó', unidade: '4 colheres de sopa' },
    { nome: 'Claras', unidade: '4 unidades' },
    { nome: 'Açúcar', unidade: '4 colheres de sopa' },
    { nome: 'Creme de leite sem soro', unidade: '1 lata' },
  ],
  modoDePreparo: [
    'Em uma tigela, misture 1/2 copo de leite com 1 colher de sobremesa de chocolate em pó até dissolver.',
    'Molhe os biscoitos maisena nessa mistura e reserve.',
    'Para preparar o creme branco, coloque em uma panela 1 lata de leite condensado, 1 lata de leite, 1 colher de sobremesa de amido de milho e 2 gemas.',
    'Leve ao fogo médio, mexendo até obter um creme grosso e homogêneo.',
    'Para preparar o creme de chocolate, repita o processo utilizando a outra lata de leite condensado, a outra medida de leite, 1 colher de sobremesa de amido de milho, 2 gemas e 4 colheres de chocolate em pó.',
    'Bata as claras em neve com o açúcar até formar um creme consistente.',
    'Acrescente o creme de leite sem soro às claras e misture delicadamente.',
    'Em um refratário grande, coloque uma camada de creme branco.',
    'Adicione uma camada de biscoitos umedecidos e, em seguida, uma camada de creme de chocolate.',
    'Continue alternando as camadas até preencher o refratário.',
    'Finalize com a cobertura de claras e creme de leite.',
    'Leve à geladeira por aproximadamente 40 minutos antes de servir.',
  ],
},

{
  id: '3u',
  titulo: 'Brigadeiro de leite em pó',
  cor: '#e8d9bd',
  Imagem: 'https://static.itdg.com.br/images/auto-auto/996ba9fa5378d178e7188e2990734527/shutterstock-1962997534-editado.jpeg',
  descrição: 'Brigadeiros macios e docinhos feitos com leite condensado e leite em pó, finalizados com uma camada de leite em pó.',
  info: 'Leite condensado, leite em pó e manteiga',
  dificuldade: '👨‍🍳 Fácil',
  duracao: '10min',
  categorias: ['⭐ Todas', '🍰 Sobremesas', '⚡ Rápidas'],
  condicoes: ['Flexitariano'],
  ingredientes: [
    { nome: 'Leite condensado', unidade: '1 lata' },
    { nome: 'Leite em pó', unidade: '4 colheres de sopa' },
    { nome: 'Manteiga', unidade: '1 colher de sopa' },
    { nome: 'Leite em pó para enrolar', unidade: 'A gosto' },
  ],
  modoDePreparo: [
    'Coloque a manteiga e o leite condensado em uma panela.',
    'Acrescente o leite em pó aos poucos, mexendo continuamente para evitar a formação de grumos.',
    'Leve ao fogo, sem parar de mexer, até a mistura desgrudar do fundo da panela.',
    'Transfira a massa para um prato e deixe esfriar um pouco.',
    'Coloque leite em pó em outro prato para utilizar na finalização.',
    'Passe um pouco de manteiga nas mãos e enrole pequenas porções da massa em formato de bolinhas.',
    'Passe os brigadeiros no leite em pó até ficarem completamente cobertos.',
    'Sirva em seguida.',
  ],
},

{
  id: '3v',
  titulo: 'Torta de maçã',
  cor: '#c58b52',
  Imagem: 'https://tse3.mm.bing.net/th/id/OIP.GyWDQYP3gpIxGBjelxo7bQHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
  descrição: 'Torta com base crocante de biscoito, recheio de maçã caramelizada com canela e uma camada cremosa de baunilha.',
  info: 'Maçã, biscoito maisena, leite condensado, creme de leite e canela',
  dificuldade: '👨‍🍳 Média',
  duracao: '40min + forno',
  categorias: ['⭐ Todas', '🍰 Sobremesas'],
  condicoes: ['Flexitariano'],
  ingredientes: [
    { nome: 'Bolacha maisena', unidade: '1 pacote e meio' },
    { nome: 'Margarina sem sal', unidade: '120 g' },
    { nome: 'Maçãs Gala sem casca e raladas', unidade: '11 unidades' },
    { nome: 'Açúcar refinado', unidade: '9 colheres de sopa' },
    { nome: 'Canela em pó', unidade: '2 colheres de sopa' },
    { nome: 'Suco de limão', unidade: '1 colher de sopa' },
    { nome: 'Leite condensado', unidade: '1 lata' },
    { nome: 'Creme de leite', unidade: '1 lata' },
    { nome: 'Gemas de ovo', unidade: '4 unidades' },
    { nome: 'Baunilha', unidade: 'A gosto' },
  ],
  modoDePreparo: [
    'Triture as bolachas maisena no processador ou liquidificador.',
    'Adicione a margarina e misture até formar uma farofa úmida e homogênea.',
    'Forre o fundo de uma forma de fundo removível com essa mistura e reserve.',
    'Em uma panela, coloque as maçãs raladas, o açúcar e o suco de limão.',
    'Cozinhe em fogo médio até a água das maçãs secar.',
    'Acrescente a canela, misture e deixe esfriar.',
    'Espalhe o doce de maçã sobre a base de biscoitos.',
    'Em outra panela, coloque o leite condensado, as gemas e a baunilha.',
    'Mexa em fogo médio até o creme engrossar.',
    'Desligue o fogo e acrescente o creme de leite, misturando bem.',
    'Despeje o creme sobre a camada de maçã.',
    'Polvilhe canela por cima.',
    'Leve ao forno preaquecido a 180 °C por aproximadamente 20 minutos.',
    'Retire do forno, deixe esfriar e sirva gelada.',
  ],
},

{
  id: '3w',
  titulo: 'Coxinha com massa de farinha e batata',
  cor: '#d69a55',
  Imagem: 'https://static.itdg.com.br/images/640-440/ebb2866635e86422ff2c959aaecdda2e/39817-original.jpg',
  descrição: 'Coxinhas caseiras com massa macia de farinha de trigo e batata, recheadas com frango temperado.',
  info: 'Farinha de trigo, batata, frango desfiado e temperos',
  dificuldade: '👨‍🍳 Média',
  duracao: '2h',
  categorias: ['⭐ Todas', '🥖 Lanches', '💰 Econômicas'],
  condicoes: ['Flexitariano', 'High protein'],
  ingredientes: [
    { nome: 'Água', unidade: '1 litro' },
    { nome: 'Caldo de galinha', unidade: '1 tablete' },
    { nome: 'Sal', unidade: '2 colheres de sopa' },
    { nome: 'Óleo', unidade: '1 fio para a massa e o suficiente para refogar' },
    { nome: 'Azeite', unidade: 'A gosto' },
    { nome: 'Batatas médias', unidade: '3 unidades cozidas' },
    { nome: 'Farinha de trigo', unidade: '1 kg' },
    { nome: 'Peito de frango', unidade: '1 unidade cozida e desfiada' },
    { nome: 'Cebola média', unidade: '1 unidade picada ou ralada' },
    { nome: 'Salsinha', unidade: 'A gosto' },
    { nome: 'Pimenta-do-reino', unidade: 'A gosto' },
    { nome: 'Tomates', unidade: '2 unidades picadas' },
    { nome: 'Extrato de tomate ou molho pronto', unidade: '2 colheres de sopa' },
    { nome: 'Leite', unidade: '500 ml para empanar' },
    { nome: 'Farinha de rosca', unidade: 'O suficiente para empanar' },
  ],
  modoDePreparo: [
    'Em uma panela grande, coloque a água, o caldo de galinha, um fio de óleo e o sal.',
    'Em outra panela, cozinhe as batatas até ficarem macias e reserve.',
    'Quando a água da primeira panela começar a ferver, adicione a farinha de trigo aos poucos, mexendo com uma colher de pau.',
    'Continue mexendo até a massa desgrudar do fundo da panela.',
    'Espalhe um pouco de farinha de trigo sobre uma superfície limpa e coloque a massa para esfriar por aproximadamente 25 minutos.',
    'Sove a massa e abra com um rolo, repetindo o processo até ficar lisa e macia.',
    'Descasque as batatas cozidas e amasse-as.',
    'Adicione a batata amassada à massa aos poucos, sovando até incorporar completamente.',
    'Para preparar o recheio, refogue a cebola em um pouco de óleo ou azeite.',
    'Acrescente o frango desfiado, a salsinha, o sal, a pimenta-do-reino, os tomates e o extrato de tomate.',
    'Misture bem e deixe o recheio cozinhar até ficar bem incorporado. Reserve para esfriar.',
    'Pegue pequenas porções de massa e modele em formato de bolinhas.',
    'Abra cada porção com os dedos, formando um espaço no centro para colocar o recheio.',
    'Adicione o recheio de frango e feche a massa, modelando no formato tradicional de coxinha.',
    'Passe as coxinhas no leite e depois na farinha de rosca.',
    'Asse ou prepare conforme o método de cocção escolhido.',
  ],
},

{
  id: '3x',
  titulo: 'Caldo de kenga',
  cor: '#d69b45',
  Imagem: 'https://tse1.mm.bing.net/th/id/OIP.37ZS8UJsYHqB99Rl_K5KVwHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
  descrição: 'Caldo cremoso e encorpado feito com frango desfiado, mandioca, mandioquinha, cenoura e bacon.',
  info: 'Frango, mandioca, mandioquinha, cenoura e bacon',
  dificuldade: '👨‍🍳 Média',
  duracao: '⏳ 1h30min',
  categorias: ['⭐ Todas', '👩‍🍳 Almoço', '👩‍🍳 Janta', '🥗 Saudáveis'],
  condicoes: ['Flexitariano', 'High protein'],
  ingredientes: [
    { nome: 'Mandioca', unidade: '1/2 kg' },
    { nome: 'Cenoura', unidade: '1/2 kg' },
    { nome: 'Mandioquinha (batata-baroa)', unidade: '1/2 kg' },
    { nome: 'Peito de frango', unidade: '1 unidade' },
    { nome: 'Bacon picado', unidade: '3 colheres de sopa' },
    { nome: 'Cheiro-verde picado', unidade: '3 colheres de sopa' },
    { nome: 'Cebola', unidade: '2 unidades picadas' },
    { nome: 'Alho', unidade: '5 dentes' },
    { nome: 'Óleo', unidade: 'A quantidade necessária para refogar' },
    { nome: 'Água', unidade: 'Aproximadamente 1/2 litro' },
    { nome: 'Sal', unidade: 'A gosto' },
    { nome: 'Pimenta', unidade: 'A gosto' },
    { nome: 'Orégano', unidade: 'A gosto' },
    { nome: 'Noz-moscada', unidade: 'A gosto' },
  ],
  modoDePreparo: [
    'Aqueça um pouco de óleo na panela de pressão e doure uma cebola picada.',
    'Adicione o peito de frango, inteiro ou cortado em pedaços grandes.',
    'Acrescente a mandioca, a cenoura e a mandioquinha.',
    'Tempere com sal, pimenta, orégano e noz-moscada.',
    'Adicione aproximadamente 1/2 litro de água.',
    'Tampe a panela de pressão e cozinhe até os legumes ficarem macios.',
    'Depois do cozimento, espere a pressão sair completamente antes de abrir a panela.',
    'Retire o peito de frango, desfie e reserve.',
    'Bata a mandioca, a mandioquinha e a cenoura no liquidificador com a água do cozimento, até formar um creme homogêneo.',
    'Em outra panela, doure o alho e a outra cebola picada.',
    'Acrescente o bacon e deixe fritar bem.',
    'Adicione o frango desfiado e refogue por mais alguns minutos.',
    'Junte o creme de legumes à panela e misture bem.',
    'Quando o caldo começar a ferver, acrescente o cheiro-verde.',
    'Ajuste o sal e os temperos, se necessário, e sirva quente.',
  ],
},

{
  id: '3y',
  titulo: 'Estrogonofe de frango',
  cor: '#c58b62',
  Imagem: 'https://tse1.mm.bing.net/th/id/OIP.6Io2T1Yw6rcMuNohrnPLhwHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
  descrição: 'Estrogonofe cremoso de frango em cubinhos, preparado com molho de tomate, mostarda, ketchup e champignon.',
  info: 'Frango, creme de leite, champignon, extrato de tomate e mostarda',
  dificuldade: '👨‍🍳 Fácil',
  duracao: '30min',
  categorias: ['⭐ Todas', '👩‍🍳 Almoço', '👩‍🍳 Janta'],
  condicoes: ['Flexitariano', 'High protein'],
  ingredientes: [
    { nome: 'Margarina', unidade: '2 colheres de sopa' },
    { nome: 'Cebola média', unidade: '1 unidade picada' },
    { nome: 'Filé de frango', unidade: '600 g em cubos pequenos' },
    { nome: 'Extrato de tomate', unidade: '2 colheres de sopa' },
    { nome: 'Água fervente', unidade: '1 xícara de chá' },
    { nome: 'Molho inglês', unidade: '1 colher de sopa' },
    { nome: 'Ketchup', unidade: '2 colheres de sopa' },
    { nome: 'Mostarda', unidade: '1 colher de chá' },
    { nome: 'Champignon em conserva', unidade: '1/2 xícara de chá fatiado' },
    { nome: 'Creme de leite', unidade: '1 caixa (200 g)' },
  ],
  modoDePreparo: [
    'Aqueça a margarina em uma panela em fogo médio.',
    'Adicione a cebola picada e frite por aproximadamente 3 minutos.',
    'Acrescente o frango em cubos e refogue, mexendo de vez em quando, até dourar.',
    'Adicione o extrato de tomate, a água fervente, o molho inglês, o ketchup e a mostarda.',
    'Acrescente o champignon fatiado.',
    'Cozinhe em fogo médio até o frango ficar macio.',
    'Adicione o creme de leite e misture até aquecer.',
    'Desligue o fogo e sirva em seguida.',
  ],
},

{
  id: '3z',
  titulo: 'Carne ao molho de gorgonzola',
  cor: '#795548',
  Imagem: 'https://d135llbe2j366l.cloudfront.net/compressed/file-mignon-ao-molho-de-gorgonzola-cremoso-04-google.webp',
  descrição: 'Tiras de carne bovina fritas e cobertas com um molho cremoso de queijo gorgonzola.',
  info: 'Carne bovina, queijo gorgonzola e creme de leite',
  dificuldade: '👨‍🍳 Fácil',
  duracao: '40min',
  categorias: ['⭐ Todas', '👩‍🍳 Almoço', '👩‍🍳 Janta'],
  condicoes: ['Flexitariano', 'High protein'],
  ingredientes: [
    { nome: 'Carne bovina (picanha ou filé mignon)', unidade: '1 kg' },
    { nome: 'Alho', unidade: '2 dentes' },
    { nome: 'Sal', unidade: 'A gosto' },
    { nome: 'Margarina ou azeite', unidade: 'Para fritar' },
    { nome: 'Creme de leite', unidade: '2 caixinhas' },
    { nome: 'Margarina', unidade: '2 colheres de sopa' },
    { nome: 'Queijo gorgonzola', unidade: '50 g ou a gosto' },
    { nome: 'Orégano seco', unidade: 'A gosto' },
  ],
  modoDePreparo: [
    'Misture a margarina com o queijo gorgonzola utilizando um garfo, até formar uma pasta. Reserve.',
    'Corte a carne em tiras ou cubos.',
    'Tempere a carne com o alho e o sal.',
    'Aqueça uma frigideira com margarina ou azeite e frite a carne até dourar.',
    'Retire a carne da frigideira, coloque em uma travessa e reserve.',
    'Na mesma frigideira ainda quente, coloque a pasta de gorgonzola e margarina.',
    'Mexa até o queijo derreter e começar a borbulhar.',
    'Acrescente o creme de leite e o orégano.',
    'Misture até formar um molho cremoso.',
    'Despeje o molho sobre a carne reservada.',
    'Sirva quente, acompanhado de arroz, torradas ou batata palha.',
  ],
},

{
  id: '3aa',
  titulo: 'Picanha ao forno',
  cor: '#8b4935',
  Imagem: 'https://d135llbe2j366l.cloudfront.net/compressed/picanha-ao-forno-com-sal-grosso-google.webp',
  descrição: 'Picanha assada no forno, temperada com alho, sal grosso, pimenta calabresa e azeite.',
  info: 'Picanha bovina, alho, sal grosso, pimenta calabresa e azeite',
  dificuldade: '👨‍🍳 Fácil',
  duracao: '2h20min',
  categorias: ['⭐ Todas', '👩‍🍳 Almoço', '👩‍🍳 Janta'],
  condicoes: ['Flexitariano', 'High protein', 'Low carb', 'Low sugar'],
  ingredientes: [
    { nome: 'Picanha maturada com gordura', unidade: '1 peça de aproximadamente 1,5 kg' },
    { nome: 'Sal grosso', unidade: '5 colheres de sopa' },
    { nome: 'Alho amassado', unidade: '5 dentes' },
    { nome: 'Pimenta calabresa', unidade: '1 colher de sopa' },
    { nome: 'Azeite', unidade: '5 colheres de sopa' },
  ],
  modoDePreparo: [
    'Em um recipiente, misture o sal grosso, o alho amassado, a pimenta calabresa e o azeite. Reserve.',
    'Faça alguns furos na picanha com um garfo.',
    'Forre uma assadeira com papel-alumínio e coloque a picanha nela.',
    'Espalhe a mistura de temperos por toda a superfície da carne.',
    'Cubra bem a picanha com outra folha de papel-alumínio.',
    'Leve ao forno preaquecido a 150 °C por aproximadamente 2 horas.',
    'Retire o papel-alumínio e deixe dourar a 200 °C por mais 10 minutos.',
    'Escorra o excesso de gordura, fatie a carne e sirva.',
  ],
},

{
  id: '3bb',
  titulo: 'Yakissoba da casa',
  cor: '#a65d35',
  Imagem: 'https://static.itdg.com.br/images/1200-630/cfd04b0be3d991c992dfb597eac80806/38909-original.jpg',
  descrição: 'Macarrão com carne em tiras, legumes variados e molho shoyu, formando um prato oriental saboroso e colorido.',
  info: 'Macarrão espaguete, carne bovina, brócolis, couve-flor, cenoura e molho shoyu',
  dificuldade: '👨‍🍳 Fácil',
  duracao: '40min',
  categorias: ['⭐ Todas', '👩‍🍳 Almoço', '👩‍🍳 Janta'],
  condicoes: ['Flexitariano', 'High protein'],
  ingredientes: [
    { nome: 'Macarrão espaguete', unidade: '300 g' },
    { nome: 'Cebola grande', unidade: '1 unidade cortada em pedaços médios' },
    { nome: 'Óleo', unidade: '1 colher de sopa' },
    { nome: 'Brócolis', unidade: '1/2 maço pequeno' },
    { nome: 'Couve-flor', unidade: '1/2 maço pequeno' },
    { nome: 'Molho shoyu', unidade: '10 colheres de sopa' },
    { nome: 'Carne bovina', unidade: '400 g cortada em tiras' },
    { nome: 'Champignon', unidade: '100 g' },
    { nome: 'Cenoura', unidade: '1 unidade cortada em rodelas' },
    { nome: 'Água', unidade: '250 ml' },
    { nome: 'Amido de milho', unidade: '1 colher de sopa dissolvida em 50 ml de água' },
    { nome: 'Acelga', unidade: 'A gosto' },
  ],
  modoDePreparo: [
    'Cozinhe o macarrão em água até ficar al dente. Escorra e reserve.',
    'Em uma panela, aqueça o óleo e refogue a cebola.',
    'Adicione a carne cortada em tiras e refogue bem.',
    'Acrescente o molho shoyu e cozinhe por aproximadamente 3 minutos em fogo médio.',
    'Adicione os 250 ml de água e espere levantar fervura.',
    'Acrescente o amido de milho dissolvido em 50 ml de água, mexendo até o molho engrossar.',
    'Abaixe o fogo e adicione o champignon, a couve-flor, o brócolis e a cenoura.',
    'Cozinhe os legumes por aproximadamente 8 minutos.',
    'Acrescente a acelga e o macarrão cozido.',
    'Misture bem para incorporar o molho e os ingredientes.',
    'Ajuste o sal, se necessário, e tampe a panela por mais 1 minuto.',
    'Sirva ainda quente.',
  ],
},

{
  id: '3cc',
  titulo: 'Rocambole de carne moída',
  cor: '#a64b3c',
  Imagem: 'https://receitatodahora.com.br/wp-content/uploads/2022/10/rocambole-de-carne-moida-1.jpg',
  descrição: 'Rocambole de carne moída recheado com presunto e queijo, temperado e assado até ficar dourado.',
  info: 'Carne moída, sopa de cebola, presunto e queijo',
  dificuldade: '👨‍🍳 Fácil',
  duracao: '50min',
  categorias: ['⭐ Todas', '👩‍🍳 Almoço', '👩‍🍳 Janta'],
  condicoes: ['Flexitariano', 'High protein'],
  ingredientes: [
    { nome: 'Carne moída', unidade: '500 g' },
    { nome: 'Sopa de cebola em pó', unidade: '1 pacote' },
    { nome: 'Presunto fatiado', unidade: 'A gosto' },
    { nome: 'Queijo fatiado', unidade: 'A gosto' },
    { nome: 'Tempero verde', unidade: 'A gosto' },
    { nome: 'Sal', unidade: 'A gosto' },
  ],
  modoDePreparo: [
    'Coloque a carne moída em uma tigela.',
    'Adicione a sopa de cebola, o tempero verde e o sal.',
    'Misture bem até os temperos ficarem distribuídos por toda a carne.',
    'Coloque a carne temperada sobre uma folha de papel-alumínio ou papel-manteiga.',
    'Abra a carne com um rolo, formando uma camada de aproximadamente 1 cm de espessura.',
    'Distribua as fatias de presunto sobre a carne.',
    'Coloque as fatias de queijo por cima do presunto.',
    'Se desejar, acrescente milho, ervilha ou requeijão.',
    'Com a ajuda do papel, enrole a carne cuidadosamente, formando um rocambole.',
    'Coloque em uma assadeira e leve ao forno preaquecido em temperatura alta.',
    'Asse até a carne ficar completamente cozida.',
    'Retire do forno, espere alguns minutos e corte em fatias para servir.',
  ],
},

 {

    id: '3dd',

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

    id: '3ee',

    titulo: 'Espaguete ao molho de tomate',

    cor: '#0f3460',

    Imagem: 'https://th.bing.com/th/id/OSK.46f112c44ddd4c901153aaed3dc715df?w=424&h=424&c=7&rs=1&qlt=90&o=6&pid=16.1',

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

    id: '3ff',

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

    Imagem: 'https://th.bing.com/th/id/R.9bca87536215b1a0ba2b702c6fac9598?rik=ciygBz5umOx7Yg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-ZoDh7zILX6A%2fVi6DwM1EOZI%2fAAAAAAAAD5A%2ffu8zQEOCQvE%2fs1600%2fpudim-de-leite-condensado.png&ehk=g9mpRHnOkZXfVRHPMdZDJXf5g%2bM0roX%2b%2b2oMTMtW7%2fY%3d&risl=&pid=ImgRaw&r=0',

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

  
{

  id: '2f',

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
  id: '2g',
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



