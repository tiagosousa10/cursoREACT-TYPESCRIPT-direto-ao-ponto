type GreetingProps={
name:string;
}

const Greeting = ({name}:GreetingProps) => {
  return (
    <div>Greeting - Pagina, olá ! {name}</div>
  )
}

export default Greeting