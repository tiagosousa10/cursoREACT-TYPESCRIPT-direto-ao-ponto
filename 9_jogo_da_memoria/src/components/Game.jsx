import { useState } from 'react';
import Board from './Board';

//                                funcao - shuffleArray - embaralhar

const shuffleArray = (array) => {
  // fazemos um for que vai percorrer um array que vai ser recebido como parametro
  // o i = ao comprimento do array recebido -1
  // enquanto o i for maior que 0 continua o loop
  // vai decrementando até 0
  for (let i = array.length - 1; i > 0; i--) {
    // gerar um valor aleatorio
    const j = Math.floor(Math.random() * (i + 1));
    // inverter o sentido dos arrays
    [array[i], array[j]] = [array[j], array[i]];
  }
  // retornar o Array
  return array;
};

//                                 funcao - generateCards - gerar Cartoes

// criar uma funcao
const generateCards = () => {
  // que vai criar cartoes com letras do A até ao H
  const values = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  // extrair os valores(values) do A até ao H e armazenar na variavel cards
  const cards = values.map((value) => ({
    value, // valor de cada index mapeado , ex. A , B, C , etc
    isFlipped: false, // está virada ou nao?
  }));

  // apos isso vamos duplicar os cartoes para tornar o jogo mais divertido
  // atraves na variavel cards que armazena os valores
  const duplicateCards = cards
    .concat([...cards])
    .map((card, index) => ({ ...card, id: index }));
  console.log('duplicados: ', duplicateCards);
  return shuffleArray(duplicateCards); // mostrar cartoes embaralhados
  // console.log(duplicateCards); // mostrar cartas duplicadas
};
generateCards(); // executar a funcao para gerar cartoes.

//                                      Funcao PRINCIPAL - Game
function Game() {
  // o estado inicial dos cartoes = cartoes gerados
  const [cards, setCards] = useState(generateCards());
  // as cartas viradas começa com um array vazio
  const [flippedCards, setFlippedCards] = useState([]);
  const playerChances = 100;
  // o numero de chances começa com 6
  const [chances, setChances] = useState(playerChances);

  // o resultado = ao numero de cartoes virados(flipped)
  const result = cards.filter((card) => card.isFlipped).length;

  const handleCardClick = (clickedCard) => {
    if (chances === 0) return;
    if (flippedCards.length === 2) return;

    const newCards = cards.map((card) => (card.id === clickedCard.id ? { ...card, isFlipped: true } : card));

    setCards(newCards);
    setFlippedCards([...flippedCards, clickedCard]);

    if (flippedCards.length === 1) {
      setTimeout(() => {
        const [firstCard] = flippedCards;
        if (firstCard.value !== clickedCard.value) {
          const resetCards = cards.map((card) => (card.id === firstCard.id || card.id === clickedCard.id
            ? { ...card, isFlipped: false } : card));

          setCards(resetCards);
          setChances((prev) => prev - 1);
        }
        setFlippedCards([]);
      }, 600);
    }
  };

  const resetGame = () => {
    setChances(playerChances);
    setFlippedCards([]);
    setCards(generateCards());
  };
  return (
    <div className="game">
      <Board cards={cards} onCardClick={handleCardClick} />
      {chances === 0 ? (
        <p>As tentativas acabaram</p>
      ) : result === cards.length ? (<h2>Parabens, voce ganhou!</h2>) : (
        <p>
          Voce possui
          {' '}
          {chances}
          {' '}
          tentativas
        </p>
      )}
      <button className="btn" onClick={resetGame}>Reiniciar o Jogo</button>
    </div>
  );
}

export default Game;
