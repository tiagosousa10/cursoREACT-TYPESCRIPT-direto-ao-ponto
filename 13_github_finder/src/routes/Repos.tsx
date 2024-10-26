import { RepoProps } from '../types/repo';
import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';

import classes from './Repos.module.css';
import BackBtn from '../components/BackBtn';
import Loader from '../components/Loader';
import Repo from '../components/Repo';

const Repos = () => {

  const {username} = useParams();
  const [repos,setRepos] = useState<RepoProps[] |  []  |null>(null);

  const [isLoading,setIsLoading] = useState(false);

  //req API
  useEffect(()=> {
    const loadRepos = async function (username:string) {
      setIsLoading(true);

      const res= await fetch(`https://api.github.com/users/${username}/repos`);

      const data = await res.json();



      setIsLoading(false);
      //ordenaçao do MAIOR para o menoR e mostrar os top 5
      const orderedRepos = data.sort((a:RepoProps,b:RepoProps)=> b.stargazers_count - a.stargazers_count).slice(0,5);

      setRepos(orderedRepos);
    };
    //checagem para evitar erros
    if(username) {
      loadRepos(username);
    }

  },[]);

  if(!repos && isLoading) return <Loader/>;

  return (
    <div  className={classes.repos}>
      <BackBtn/>
      <h2>Explore os repositórios do utilizador:  {username} </h2>
      {repos && repos.length === 0 && <p>Não há repositórios</p>}
      {repos && repos.length > 0 && (
        <div   className={classes.repos_container}>
          {repos.map((repo:RepoProps) => (
            <Repo  key={repo.name} {...repo} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Repos;
