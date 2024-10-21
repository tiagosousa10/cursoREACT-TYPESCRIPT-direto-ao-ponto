import {useEffect,useMemo, useState} from 'react';

//                      Ex.1
const UserInfo = ({userInfo}) => {

  useEffect(()=>{
    document.title = `${userInfo.name} - ${userInfo.jobTitle}`;
  },[userInfo]);

  return(
    <div>
      <h1>Nome:  {userInfo.name} </h1>
      <p>Profissao : {userInfo.jobTitle} </p>
    </div>
  );
};

//                      Ex. 2
const fibonnaci = (n) => {
  if(n<=1){
    return n;
  }
  return fibonnaci(n-1) + fibonnaci(n-2);
};

const FibCalculator = ({num}) => {
  const fibResult = useMemo(()=> fibonnaci(num), [num]);
  return (
    <div>
      <p>
        Fibonnaci de {num} é {fibResult}
      </p>
    </div>
  );

};

//                       Ex. 3

const useOnlineStatus = () => {

  const [isOnline,setIsOnline] = useState(navigator.onLine);

  useEffect(()=> {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online',handleOnline);
    window.addEventListener('offline',handleOffline);

    //limpeza 
    return ( )=> {
      window.removeEventListener('online',handleOnline);
      window.removeEventListener('offline',handleOffline);

    };
  },[]);

  return isOnline;
};

const OnlineStatusIndicator = () => {
  const isOnline = useOnlineStatus();

  return(
    <div>
      <p>
  Voce esta atualmente: {isOnline ? 'Online'  : 'Offline'}
      </p>

    </div>
  );
};


//                    MAIIIIINNNNNNNNNNNNNNNNN

const Exercises = () => {
  const userInfo = {name:'alice',jobTitle:'Desenvolvedora'};

  return (
    <div>
      <h2>Exercise 1</h2>
      <UserInfo userInfo={userInfo} />
      <h2>Exercise 2</h2>
      <FibCalculator num={10} />
      <h2>Exercicio 3</h2>
      <OnlineStatusIndicator/>
    </div>
  );
};

export default Exercises;