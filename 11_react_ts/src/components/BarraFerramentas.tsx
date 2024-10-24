import { useContext } from 'react';
import { TemaContext } from '../contexts/TemaContext';

function BarraFerramentas() {
  const contextoTema = useContext(TemaContext);

  if (!contextoTema) { // pre-validacao
    return null;
  }
  return (
    <div style={{
      background: contextoTema.tema === 'claro' ? '#FFF' : '#000',
      color: contextoTema.tema === 'claro' ? '#FFF' : '#000',
    }}
    >
      <button onClick={contextoTema.alternarTema}>Alterar Tema</button>

    </div>
  );
}

export default BarraFerramentas;
