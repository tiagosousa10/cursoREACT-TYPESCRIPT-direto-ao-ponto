import { useState } from 'react';
import useInterval from '../hooks/useInterval';

function ContadorIntervalo() {
  const [contador, setContador] = useState(0);

  useInterval(() => {
    setContador(contador + 1);
  }, 5000);
  return (
    <div>
      <h1>
        contador
        {' '}
        {/* {contador} */}
        {' '}
      </h1>
    </div>
  );
}

export default ContadorIntervalo;
