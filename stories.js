// Este arquivo contém os acontecimentos da história.

// Cada objeto dentro do array representa uma cena.
// type pode ser "dialogue", "choice" ou "ending".
const story = [
    {
        type: "dialogue",
        character: "Narrador",
        text: "Você chegou à Academia Aurora em uma manhã tranquila."
    },

    {
        type: "dialogue",
        character: "Alex",
        text: "Você é nova por aqui? Eu não lembro de ter visto você antes."
    },

    {
        type: "choice",
        text: "Como você responde?",
        choices: [
            {
                text: "Oi! Prazer em conhecer você.",
                affection: 2,
                next: 3
            },
            {
                text: "Isso não é da sua conta.",
                affection: -1,
                next: 3
            },
            {
                text: "Você sempre aborda pessoas desconhecidas?",
                affection: 1,
                next: 3
            }
        ]
    },

    {
        type: "dialogue",
        character: "Alex",
        text: "Interessante... Acho que vamos nos encontrar bastante por aqui."
    },

    {
        type: "choice",
        text: "O que você faz?",
        choices: [
            {
                text: "Pergunto sobre a academia.",
                affection: 2,
                next: 5
            },
            {
                text: "Pergunto por que ele está me observando.",
                affection: 0,
                next: 5
            }
        ]
    },

    {
        type: "dialogue",
        character: "Narrador",
        text: "O sinal toca. Talvez este seja apenas o começo da sua história."
    },

    {
        type: "ending",
        title: "Fim do prólogo",
        text: "Sua jornada na Academia Aurora está apenas começando..."
    }
];
