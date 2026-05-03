// Banco de dados dos códigos com mapeamento total de elementos
const codigos = {
    1: [
        "<span class='info-purple' onclick='explicar(\"import\")'>import</span> <span class='info-purple' onclick='explicar(\"random\")'>random</span>",
        "<span class='info-purple' onclick='explicar(\"import\")'>import</span> <span class='info-purple' onclick='explicar(\"time\")'>time</span>",
        "",
        "<span class='info-purple' onclick='explicar(\"class\")'>class</span> <span class='info-purple' onclick='explicar(\"N_Rodadas\")'>N_Rodadas</span>:",
        "    <span class='info-purple' onclick='explicar(\"def\")'>def</span> <span class='info-purple' onclick='explicar(\"__init__\")'>__init__</span>(<span class='info-purple' onclick='explicar(\"self\")'>self</span>):",
        "        <span class='info-purple' onclick='explicar(\"print\")'>print</span>(\"\\n\" + \"=\"*30)",
        "        <span class='info-purple' onclick='explicar(\"print\")'>print</span>(\"      SISTEMA DE BATALHA\")",
        "        <span class='info-purple' onclick='explicar(\"print\")'>print</span>(\"=\"*30)",
        "",
        "    <span class='info-purple' onclick='explicar(\"def\")'>def</span> <span class='info-purple' onclick='explicar(\"decidir_rodadas_adm\")'>decidir_rodadas_adm</span>(<span class='info-purple' onclick='explicar(\"self\")'>self</span>):",
        "        <span class='info-purple' onclick='explicar(\"print\")'>print</span>(\"\\nO ADM está lançando os dados...\")",
        "        <span class='info-purple' onclick='explicar(\"d_adm1\")'>d_adm1</span> = <span class='info-purple' onclick='explicar(\"random\")'>random</span>.<span class='info-purple' onclick='explicar(\"randint_adm\")'>randint</span>(1, 6)",
        "        <span class='info-purple' onclick='explicar(\"d_adm2\")'>d_adm2</span> = <span class='info-purple' onclick='explicar(\"random\")'>random</span>.<span class='info-purple' onclick='explicar(\"randint_adm\")'>randint</span>(1, 6)",
        "        <span class='info-purple' onclick='explicar(\"soma\")'>soma</span> = <span class='info-purple' onclick='explicar(\"d_adm1\")'>d_adm1</span> + <span class='info-purple' onclick='explicar(\"d_adm2\")'>d_adm2</span>",
        "        <span class='info-purple' onclick='explicar(\"print\")'>print</span>(<span class='info-purple' onclick='explicar(\"f-string\")'>f</span>\" O ADM tirou: {<span class='info-purple' onclick='explicar(\"d_adm1\")'>d_adm1</span>} e {<span class='info-purple' onclick='explicar(\"d_adm2\")'>d_adm2</span>}.\")",
        "        <span class='info-purple' onclick='explicar(\"print\")'>print</span>(<span class='info-purple' onclick='explicar(\"f-string\")'>f</span>\"CADA DUELO TERÁ: {<span class='info-purple' onclick='explicar(\"soma\")'>soma</span>} RODADAS!\")",
        "        <span class='info-purple' onclick='explicar(\"return\")'>return</span> <span class='info-purple' onclick='explicar(\"soma\")'>soma</span>",
        "",
        "<span class='info-purple' onclick='explicar(\"sistema\")'>sistema</span> = <span class='info-purple' onclick='explicar(\"N_Rodadas\")'>N_Rodadas</span>()",
        "<span class='info-purple' onclick='explicar(\"total_rodadas_combate\")'>total_rodadas_combate</span> = <span class='info-purple' onclick='explicar(\"sistema\")'>sistema</span>.<span class='info-purple' onclick='explicar(\"decidir_rodadas_adm\")'>decidir_rodadas_adm</span>()",
        "",
        "<span class='info-purple' onclick='explicar(\"opcoes_faces\")'>opcoes_faces</span> = [4, 6, 8, 10, 12]",
        "<span class='info-purple' onclick='explicar(\"jogadores\")'>jogadores</span> = []",
        "",
        "<span class='info-purple' onclick='explicar(\"n_participantes\")'>n_participantes</span> = <span class='info-purple' onclick='explicar(\"int\")'>int</span>(<span class='info-purple' onclick='explicar(\"input\")'>input</span>(\"\\nQuantos Guerreiros? \"))",
        "",
        "<span class='info-purple' onclick='explicar(\"for\")'>for</span> i <span class='info-purple' onclick='explicar(\"in\")'>in</span> <span class='info-purple' onclick='explicar(\"range\")'>range</span>(<span class='info-purple' onclick='explicar(\"n_participantes\")'>n_participantes</span>):",
        "    <span class='info-purple' onclick='explicar(\"nome\")'>nome</span> = <span class='info-purple' onclick='explicar(\"input\")'>input</span>(<span class='info-purple' onclick='explicar(\"f-string\")'>f</span>\"Nome do Guerreiro {i+1}: \")",
        "    <span class='info-purple' onclick='explicar(\"jogadores\")'>jogadores</span>.<span class='info-purple' onclick='explicar(\"append\")'>append</span>(<span class='info-purple' onclick='explicar(\"nome\")'>nome</span>)",
        "",
        "<span class='info-purple' onclick='explicar(\"random\")'>random</span>.<span class='info-purple' onclick='explicar(\"shuffle\")'>shuffle</span>(<span class='info-purple' onclick='explicar(\"jogadores\")'>jogadores</span>)",
        "",
        "<span class='info-purple' onclick='explicar(\"rodada_atual_torneio\")'>rodada_atual_torneio</span> = 1",
        "<span class='info-purple' onclick='explicar(\"while\")'>while</span> <span class='info-purple' onclick='explicar(\"len\")'>len</span>(<span class='info-purple' onclick='explicar(\"jogadores\")'>jogadores</span>) > 1:",
        "    <span class='info-purple' onclick='explicar(\"print\")'>print</span>(\"\\n\" + \"#\"*40)",
        "    <span class='info-purple' onclick='explicar(\"print\")'>print</span>(<span class='info-purple' onclick='explicar(\"f-string\")'>f</span>\"     -- {<span class='info-purple' onclick='explicar(\"rodada_atual_torneio\")'>rodada_atual_torneio</span>} FASE --\")",
        "    <span class='info-purple' onclick='explicar(\"print\")'>print</span>(\"#\"*40)",
        "",
        "    <span class='info-purple' onclick='explicar(\"vencedores_da_fase\")'>vencedores_da_fase</span> = []",
        "",
        "    <span class='info-purple' onclick='explicar(\"if\")'>if</span> <span class='info-purple' onclick='explicar(\"len\")'>len</span>(<span class='info-purple' onclick='explicar(\"jogadores\")'>jogadores</span>) % 2 != 0:",
        "        <span class='info-purple' onclick='explicar(\"folga\")'>folga</span> = <span class='info-purple' onclick='explicar(\"jogadores\")'>jogadores</span>.<span class='info-purple' onclick='explicar(\"pop\")'>pop</span>()",
        "        <span class='info-purple' onclick='explicar(\"vencedores_da_fase\")'>vencedores_da_fase</span>.<span class='info-purple' onclick='explicar(\"append\")'>append</span>(<span class='info-purple' onclick='explicar(\"folga\")'>folga</span>)",
        "        <span class='info-purple' onclick='explicar(\"print\")'>print</span>(<span class='info-purple' onclick='explicar(\"f-string\")'>f</span>\" {<span class='info-purple' onclick='explicar(\"folga\")'>folga</span>} passou sem lutar\")",
        "",
        "    <span class='info-purple' onclick='explicar(\"for\")'>for</span> i <span class='info-purple' onclick='explicar(\"in\")'>in</span> <span class='info-purple' onclick='explicar(\"range\")'>range</span>(0, <span class='info-purple' onclick='explicar(\"len\")'>len</span>(<span class='info-purple' onclick='explicar(\"jogadores\")'>jogadores</span>), 2):",
        "        <span class='info-purple' onclick='explicar(\"g1\")'>g1</span> = <span class='info-purple' onclick='explicar(\"jogadores\")'>jogadores</span>[i]",
        "        <span class='info-purple' onclick='explicar(\"g2\")'>g2</span> = <span class='info-purple' onclick='explicar(\"jogadores\")'>jogadores</span>[i+1]",
        "        <span class='info-purple' onclick='explicar(\"print\")'>print</span>(<span class='info-purple' onclick='explicar(\"f-string\")'>f</span>\"\\n  DUELO: {<span class='info-purple' onclick='explicar(\"g1\")'>g1</span>} VS {<span class='info-purple' onclick='explicar(\"g2\")'>g2</span>} \")",
        "",
        "        <span class='info-purple' onclick='explicar(\"vitorias_g1\")'>vitorias_g1</span> = 0",
        "        <span class='info-purple' onclick='explicar(\"vitorias_g2\")'>vitorias_g2</span> = 0",
        "",
        "        <span class='info-purple' onclick='explicar(\"for\")'>for</span> r <span class='info-purple' onclick='explicar(\"in\")'>in</span> <span class='info-purple' onclick='explicar(\"range\")'>range</span>(1, <span class='info-purple' onclick='explicar(\"total_rodadas_combate\")'>total_rodadas_combate</span> + 1):",
        "            <span class='info-purple' onclick='explicar(\"input\")'>input</span>(\"  Pressione ENTER para os dados...\")",
        "            <span class='info-purple' onclick='explicar(\"pontos_rodada\")'>pontos_rodada</span> = []",
        "",
        "            <span class='info-purple' onclick='explicar(\"for\")'>for</span> <span class='info-purple' onclick='explicar(\"guerreiro\")'>guerreiro</span> <span class='info-purple' onclick='explicar(\"in\")'>in</span> [<span class='info-purple' onclick='explicar(\"g1\")'>g1</span>, <span class='info-purple' onclick='explicar(\"g2\")'>g2</span>]:",
        "                <span class='info-purple' onclick='explicar(\"f1\")'>f1</span> = <span class='info-purple' onclick='explicar(\"random\")'>random</span>.<span class='info-purple' onclick='explicar(\"choice\")'>choice</span>(<span class='info-purple' onclick='explicar(\"opcoes_faces\")'>opcoes_faces</span>)",
        "                <span class='info-purple' onclick='explicar(\"f2\")'>f2</span> = <span class='info-purple' onclick='explicar(\"random\")'>random</span>.<span class='info-purple' onclick='explicar(\"choice\")'>choice</span>(<span class='info-purple' onclick='explicar(\"opcoes_faces\")'>opcoes_faces</span>)",
        "                <span class='info-purple' onclick='explicar(\"res1\")'>res1</span> = <span class='info-purple' onclick='explicar(\"random\")'>random</span>.<span class='info-purple' onclick='explicar(\"randint\")'>randint</span>(1, <span class='info-purple' onclick='explicar(\"f1\")'>f1</span>)",
        "                <span class='info-purple' onclick='explicar(\"res2\")'>res2</span> = <span class='info-purple' onclick='explicar(\"random\")'>random</span>.<span class='info-purple' onclick='explicar(\"randint\")'>randint</span>(1, <span class='info-purple' onclick='explicar(\"f2\")'>f2</span>)",
        "                <span class='info-purple' onclick='explicar(\"total\")'>total</span> = <span class='info-purple' onclick='explicar(\"res1\")'>res1</span> + <span class='info-purple' onclick='explicar(\"res2\")'>res2</span>",
        "                <span class='info-purple' onclick='explicar(\"print\")'>print</span>(<span class='info-purple' onclick='explicar(\"f-string\")'>f</span>\" -> {<span class='info-purple' onclick='explicar(\"guerreiro\")'>guerreiro</span>} rolou d{<span class='info-purple' onclick='explicar(\"f1\")'>f1</span>} e d{<span class='info-purple' onclick='explicar(\"f2\")'>f2</span>} Total: {<span class='info-purple' onclick='explicar(\"total\")'>total</span>}\")",
        "                <span class='info-purple' onclick='explicar(\"pontos_rodada\")'>pontos_rodada</span>.<span class='info-purple' onclick='explicar(\"append\")'>append</span>(<span class='info-purple' onclick='explicar(\"total\")'>total</span>)",
        "",
        "            <span class='info-purple' onclick='explicar(\"if\")'>if</span> <span class='info-purple' onclick='explicar(\"pontos_rodada\")'>pontos_rodada</span>[0] > <span class='info-purple' onclick='explicar(\"pontos_rodada\")'>pontos_rodada</span>[1]:",
        "                <span class='info-purple' onclick='explicar(\"vitorias_g1\")'>vitorias_g1</span> += 1",
        "            <span class='info-purple' onclick='explicar(\"elif\")'>elif</span> <span class='info-purple' onclick='explicar(\"pontos_rodada\")'>pontos_rodada</span>[1] > <span class='info-purple' onclick='explicar(\"pontos_rodada\")'>pontos_rodada</span>[0]:",
        "                <span class='info-purple' onclick='explicar(\"vitorias_g2\")'>vitorias_g2</span> += 1",
        "",
        "        <span class='info-purple' onclick='explicar(\"if\")'>if</span> <span class='info-purple' onclick='explicar(\"vitorias_g1\")'>vitorias_g1</span> >= <span class='info-purple' onclick='explicar(\"vitorias_g2\")'>vitorias_g2</span>:",
        "            <span class='info-purple' onclick='explicar(\"vencedor\")'>vencedor</span> = <span class='info-purple' onclick='explicar(\"g1\")'>g1</span>",
        "        <span class='info-purple' onclick='explicar(\"else\")'>else</span>:",
        "            <span class='info-purple' onclick='explicar(\"vencedor\")'>vencedor</span> = <span class='info-purple' onclick='explicar(\"g2\")'>g2</span>",
        "        <span class='info-purple' onclick='explicar(\"vencedores_da_fase\")'>vencedores_da_fase</span>.<span class='info-purple' onclick='explicar(\"append\")'>append</span>(<span class='info-purple' onclick='explicar(\"vencedor\")'>vencedor</span>)",
        "",
        "    <span class='info-purple' onclick='explicar(\"jogadores\")'>jogadores</span> = <span class='info-purple' onclick='explicar(\"vencedores_da_fase\")'>vencedores_da_fase</span>",
        "    <span class='info-purple' onclick='explicar(\"rodada_atual_torneio\")'>rodada_atual_torneio</span> += 1",
        "    <span class='info-purple' onclick='explicar(\"time\")'>time</span>.<span class='info-purple' onclick='explicar(\"time\")'>sleep</span>(1)",
        "",
        "<span class='info-purple' onclick='explicar(\"print\")'>print</span>(<span class='info-purple' onclick='explicar(\"f-string\")'>f\"O CAMPEÃO É: {<span class='info-purple' onclick='explicar(\"jogadores\")'>jogadores</span>[0].<span class='info-purple' onclick='explicar(\"upper\")'>upper</span>()}\"</span>)"
    ],
    2: [
        "<span class='info-purple' onclick='explicar(\"class\")'>class</span> <span class='info-purple' onclick='explicar(\"Carro\")'>Carro</span>:",
        "    <span class='info-purple' onclick='explicar(\"def\")'>def</span> <span class='info-purple' onclick='explicar(\"__init__\")'>__init__</span>(<span class='info-purple' onclick='explicar(\"self\")'>self</span>, <span class='info-purple' onclick='explicar(\"cor_user\")'>cor</span>, <span class='info-purple' onclick='explicar(\"modelo_user\")'>modelo</span>, <span class='info-purple' onclick='explicar(\"preco_user\")'>preco</span>):",
        "        <span class='info-purple' onclick='explicar(\"self\")'>self</span>.<span class='info-purple' onclick='explicar(\"cor_user\")'>cor</span> = <span class='info-purple' onclick='explicar(\"cor_user\")'>cor</span>",
        "        <span class='info-purple' onclick='explicar(\"self\")'>self</span>.<span class='info-purple' onclick='explicar(\"modelo_user\")'>modelo</span> = <span class='info-purple' onclick='explicar(\"modelo_user\")'>modelo</span>",
        "        <span class='info-purple' onclick='explicar(\"self\")'>self</span>.<span class='info-purple' onclick='explicar(\"preco_user\")'>preco</span> = <span class='info-purple' onclick='explicar(\"preco_user\")'>preco</span>",
        "",
        "    <span class='info-purple' onclick='explicar(\"def\")'>def</span> <span class='info-purple' onclick='explicar(\"calcular_desconto\")'>calcular_desconto</span>(<span class='info-purple' onclick='explicar(\"self\")'>self</span>):",
        "        <span class='info-purple' onclick='explicar(\"valor_com_desconto\")'>valor_com_desconto</span> = <span class='info-purple' onclick='explicar(\"self\")'>self</span>.<span class='info-purple' onclick='explicar(\"preco_user\")'>preco</span> - (20 * <span class='info-purple' onclick='explicar(\"self\")'>self</span>.<span class='info-purple' onclick='explicar(\"preco_user\")'>preco</span> / 100)",
        "        <span class='info-purple' onclick='explicar(\"return\")'>return</span> <span class='info-purple' onclick='explicar(\"valor_com_desconto\")'>valor_com_desconto</span>",
        "",
        "<span class='info-purple' onclick='explicar(\"carrinho_de_compras\")'>carrinho_de_compras</span> = []",
        "<span class='info-purple' onclick='explicar(\"print\")'>print</span>(\"Bem-vindo à loja de carrinhos!\")",
        "",
        "<span class='info-purple' onclick='explicar(\"while\")'>while</span> <span class='info-purple' onclick='explicar(\"True\")'>True</span>:",
        "    <span class='info-purple' onclick='explicar(\"print\")'>print</span>(\"\\n--- MENU ---\")",
        "    <span class='info-purple' onclick='explicar(\"opcoes\")'>opcoes</span> = <span class='info-purple' onclick='explicar(\"int\")'>int</span>(<span class='info-purple' onclick='explicar(\"input\")'>input</span>(\"1- Comprar carro\\n2- Mostrar carrinho\\n3- Sair\\nEscolha: \"))",
        "",
        "    <span class='info-purple' onclick='explicar(\"if\")'>if</span> <span class='info-purple' onclick='explicar(\"opcoes\")'>opcoes</span> == 1:",
        "        <span class='info-purple' onclick='explicar(\"print\")'>print</span>(\"\\n--- Monte o seu carro ---\")",
        "        <span class='info-purple' onclick='explicar(\"modelo_user\")'>modelo_user</span> = <span class='info-purple' onclick='explicar(\"input\")'>input</span>(\"Modelo: \")",
        "        <span class='info-purple' onclick='explicar(\"cor_user\")'>cor_user</span> = <span class='info-purple' onclick='explicar(\"input\")'>input</span>(\"Cor: \")",
        "        <span class='info-purple' onclick='explicar(\"novo_carro\")'>novo_carro</span> = <span class='info-purple' onclick='explicar(\"Carro\")'>Carro</span>(<span class='info-purple' onclick='explicar(\"cor_user\")'>cor_user</span>, <span class='info-purple' onclick='explicar(\"modelo_user\")'>modelo_user</span>, 1000)",
        "        <span class='info-purple' onclick='explicar(\"carrinho_de_compras\")'>carrinho_de_compras</span>.<span class='info-purple' onclick='explicar(\"append\")'>append</span>(<span class='info-purple' onclick='explicar(\"novo_carro\")'>novo_carro</span>)",
        "        <span class='info-purple' onclick='explicar(\"print\")'>print</span>(<span class='info-purple' onclick='explicar(\"f-string\")'>f</span>\"Sucesso! {<span class='info-purple' onclick='explicar(\"modelo_user\")'>modelo_user</span>} adicionado.\")",
        "",
        "    <span class='info-purple' onclick='explicar(\"elif\")'>elif</span> <span class='info-purple' onclick='explicar(\"opcoes\")'>opcoes</span> == 2:",
        "        <span class='info-purple' onclick='explicar(\"print\")'>print</span>(\"\\n--- Seu Carrinho ---\")",
        "        <span class='info-purple' onclick='explicar(\"if\")'>if</span> <span class='info-purple' onclick='explicar(\"not\")'>not</span> <span class='info-purple' onclick='explicar(\"carrinho_de_compras\")'>carrinho_de_compras</span>:",
        "            <span class='info-purple' onclick='explicar(\"print\")'>print</span>(\"O carrinho está vazio.\")",
        "        <span class='info-purple' onclick='explicar(\"else\")'>else</span>:",
        "            <span class='info-purple' onclick='explicar(\"for\")'>for</span> i, <span class='info-purple' onclick='explicar(\"carro\")'>carro</span> <span class='info-purple' onclick='explicar(\"in\")'>in</span> <span class='info-purple' onclick='explicar(\"enumerate\")'>enumerate</span>(<span class='info-purple' onclick='explicar(\"carrinho_de_compras\")'>carrinho_de_compras</span>, 1):",
        "                <span class='info-purple' onclick='explicar(\"print\")'>print</span>(<span class='info-purple' onclick='explicar(\"f-string\")'>f</span>\"{i}. Modelo: {<span class='info-purple' onclick='explicar(\"carro\")'>carro</span>.<span class='info-purple' onclick='explicar(\"modelo_user\")'>modelo</span>} Cor: {<span class='info-purple' onclick='explicar(\"carro\")'>carro</span>.<span class='info-purple' onclick='explicar(\"cor_user\")'>cor</span>}\")",
        "                <span class='info-purple' onclick='explicar(\"cupom\")'>cupom</span> = <span class='info-purple' onclick='explicar(\"input\")'>input</span>(\"Digite o cupom ou Enter: \").<span class='info-purple' onclick='explicar(\"upper\")'>upper</span>()",
        "                <span class='info-purple' onclick='explicar(\"if\")'>if</span> <span class='info-purple' onclick='explicar(\"cupom\")'>cupom</span> == \"DESCONTO\":",
        "                    <span class='info-purple' onclick='explicar(\"print\")'>print</span>(<span class='info-purple' onclick='explicar(\"f-string\")'>f</span>\"Com desconto: R${<span class='info-purple' onclick='explicar(\"carro\")'>carro</span>.<span class='info-purple' onclick='explicar(\"calcular_desconto\")'>calcular_desconto</span>():.2f}\")",
        "                <span class='info-purple' onclick='explicar(\"else\")'>else</span>:",
        "                    <span class='info-purple' onclick='explicar(\"print\")'>print</span>(\"Carrinho sem descconto, jumento!\")",
        "",
        "    <span class='info-purple' onclick='explicar(\"elif\")'>elif</span> <span class='info-purple' onclick='explicar(\"opcoes\")'>opcoes</span> == 3:",
        "        <span class='info-purple' onclick='explicar(\"print\")'>print</span>(\"Saindo da loja...\")",
        "        <span class='info-purple' onclick='explicar(\"break\")'>break</span>",
        "    <span class='info-purple' onclick='explicar(\"else\")'>else</span>:",
        "        <span class='info-purple' onclick='explicar(\"print\")'>print</span>(\"Opção inválida!\")"
    ]
};

// Dicionário Interpretativo Completo
const dicionario = {
    // Exercício 1
    "N_Rodadas": "Esta foi a classe que eu criei para o Adm do jogo enviar a mensagem inicial informando que a batalha está começando.",
    "decidir_rodadas_adm": "Este foi o método que eu criei para o Adm jogar os dados da partida e, assim, saber a duração das rodadas.",
    "d_adm1": "Representa o <b>primeiro dado</b> lançado pelo Administrador para definir a regra de rodadas.",
    "d_adm2": "O <b>segundo dado</b> do Administrador para o cálculo inicial.",
    "soma": "Variável que <b>guarda o total</b> dos dois dados do ADM.",
    "sistema": "É o <b>objeto</b> criado a partir da classe N_Rodadas.",
    "total_rodadas_combate": "O <b>número oficial</b> de rodadas que cada duelo terá.",
    "randint_adm": "Sorteia entre 1 e 6 para definir as rodadas iniciais.",

    // Exercício 2 (Loja de Carrinhos)
    "Carro": "A classe principal que define o molde para cada carro de brinquedo da loja.",
    "calcular_desconto": "Um método que calcula automaticamente uma redução de 20% no valor original do brinquedo.",
    "valor_com_desconto": "Variável local que armazena o resultado do cálculo do desconto de 20%.",
    "carrinho_de_compras": "Uma lista global que atua como o 'cesto' do cliente, guardando objetos do tipo Carro.",
    "opcoes": "Variável que armazena a escolha numérica do usuário no menu (1, 2 ou 3).",
    "modelo_user": "Captura o nome do modelo que o usuário deseja cadastrar.",
    "cor_user": "Captura a cor preferida do usuário para o brinquedo.",
    "preco_user": "O valor base definido para o produto (no código, fixado em 1000).",
    "novo_carro": "A instância real criada a partir da classe Carro usando os dados digitados.",
    "carro": "Variável temporária usada para representar cada item individual dentro do laço de repetição.",
    "enumerate": "Função que numera os itens do carrinho facilitando a visualização para o cliente.",
    "cupom": "Variável que checa se o usuário digitou a palavra secreta para liberar o desconto.",
    "not": "Operador lógico que inverte o valor (aqui usado para checar se a lista está vazia).",
    "break": "Comando que encerra o laço 'while True' e fecha o programa.",

    // Globais
    "import": "Comando para trazer bibliotecas externas, como random ou time.",
    "random": "Motor de sorteio do Python, usado para gerar imprevisibilidade.",
    "time": "Controla o tempo, permitindo criar pausas dramáticas.",
    "class": "Define o molde (planta) de um objeto em Programação Orientada a Objetos.",
    "def": "Inicia a definição de uma função ou método.",
    "__init__": "O construtor da classe. Ele inicializa os atributos do objeto assim que ele nasce.",
    "self": "Representa o próprio objeto, permitindo acessar 'meus próprios dados'.",
    "print": "Exibe mensagens na tela para o usuário.",
    "input": "Pausa o código e espera o usuário digitar uma informação.",
    "int": "Converte um texto ou número decimal em um número inteiro.",
    "for": "Laço de repetição usado para percorrer listas.",
    "while": "Repete um bloco enquanto uma condição for verdadeira.",
    "True": "Valor booleano que cria um loop infinito até encontrar um 'break'.",
    "if": "Estrutura de decisão: executa o código se a condição for atendida.",
    "elif": "Testa uma nova condição se a anterior falhou.",
    "else": "O caminho final caso nenhuma condição anterior seja verdadeira.",
    "append": "Adiciona um item ao final de uma lista.",
    "upper": "Transforma todas as letras de um texto em MAIÚSCULAS para evitar erros de digitação.",
    "return": "Envia um resultado de volta para quem chamou a função.",
    "f-string": "Permite colocar variáveis dentro do texto de forma simples usando chaves {}."
};

// Funções de Controle do Sistema
let progresso = { 1: 0, 2: 0 };

function avancarCodigo(numeroExercicio) {
    const display = document.getElementById(`python-display-${numeroExercicio}`);
    const listaLinhas = codigos[numeroExercicio];
    
    if (progresso[numeroExercicio] === 0) {
        display.innerHTML = ""; 
    }

    if (progresso[numeroExercicio] < listaLinhas.length) {
        display.innerHTML += listaLinhas[progresso[numeroExercicio]] + "\n";
        progresso[numeroExercicio]++;

        const codeBox = display.closest('.code-box');
        if (codeBox) {
            codeBox.scrollTop = codeBox.scrollHeight;
        }
    }
}

function explicar(termo) {
    const modal = document.getElementById('modalExplica');
    const titulo = document.getElementById('tituloExplica');
    const texto = document.getElementById('textoExplica');

    if (modal && titulo && texto) {
        titulo.innerHTML = "🔍 Interpretando: " + termo;
        texto.innerHTML = dicionario[termo] || "Explicação em breve...";
        abrirModal('modalExplica');
    }
}

function abrirModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }
}

function fecharModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

window.onclick = function(event) {
    if (event.target.className === 'modal-jogo' || event.target.id === 'modalExplica') {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
}