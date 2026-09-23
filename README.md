# 💜 Meu Otome Game

Uma base simples de Otome Game feita com HTML, CSS e JavaScript.

## Como jogar

Abra o arquivo `index.html` no navegador.

## Estrutura

- `index.html` → estrutura da página
- `css/style.css` → aparência do jogo
- `js/game.js` → lógica do jogo
- `js/characters.js` → personagens
- `js/stories.js` → história, escolhas e finais
- `assets/` → imagens, músicas e outros arquivos

## Próximas funcionalidades

- múltiplas rotas
- vários interesses românticos
- sistema de afinidade separado por personagem
- finais diferentes
- imagens de personagens
- fundos
- música e efeitos sonoros
- galeria de CGs
- biblioteca de histórias
- criação de histórias pelo jogador
- sistema de save/load mais completo
- versão para Android


## Design

A interface usa apenas CSS, então não depende de imagens externas.
Isso deixa o projeto livre para você adicionar seus próprios personagens,
fundos e CGs posteriormente.

Para adicionar uma imagem de fundo, por exemplo, você poderá colocar uma
imagem em `assets/backgrounds/` e depois usar `background-image` no CSS.

### Pastas de imagens

- `assets/characters/` → sprites dos personagens
- `assets/backgrounds/` → cenários
- `assets/music/` → músicas e efeitos
