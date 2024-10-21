import { useReducer, useEffect } from 'react'; // controlar dados da req = useReducer
//                                                 disparar as açoes = useEffect
import axios from 'axios';

// como vou usar useReducer => criei o meu Reducer
//                             com as açoes possiveis(send,success,error)
const httpReducer = (state, action) => {
  switch (action.type) {
    case 'SEND':
      return { data: null, error: null, loading: true };
    case 'SUCCESS':
      return { data: action.responseData, error: null, loading: false };

    case 'ERROR':
      return { data: null, error: action.errorMessage, loading: false };

    default:
      return state;
  }
};

// na funcao principal
// tenho que passar o meu Reducer(criado)
const useHttp = (url, method = 'GET', body = null, dependencies = []) => {
  const [httpState, dispatch] = useReducer(httpReducer, {
    // passo os dados iniciais que criei no meu Reducer
    loading: false,
    data: null,
    error: null,
  });

  // tenho o useEffect que vai percorrer as 3 açoes
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'SEND' });

      try {
        const response = await axios({ url, method, data: body });
        dispatch({ type: 'SUCCESS', responseData: response.data });
      } catch (error) {
        dispatch({ type: 'ERROR', errorMessage: 'Algo deu Errado!' });
      }
    };
    fetchData();
  }, dependencies);

  return httpState; // retorna o estado do http
};

export default useHttp;
