import { useReducer } from 'react';
import { counterReducer } from '../reducers/counterReducer';

function Contador() {
  const [count, dispatch] = useReducer(counterReducer, 0);
  return (
    <div>
      <p>
        Contador:
        {count}
      </p>
      <button onClick={() => dispatch({ type: 'increment' })}>
        Incrementar
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        Decrementar
      </button>

    </div>
  );
}

export default Contador;
