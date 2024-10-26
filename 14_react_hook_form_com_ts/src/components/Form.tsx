import {useForms} from '../hooks/useForms';
import { FormSchema } from '../schemas/formSchema';

const Form = () => {
  const {register,handleSubmit,errors} = useForms();
  const onSubmit = (data:FormSchema) => {
    console.log(data);
  };

  return (
    //handleSubmit do hooks (useForms) e depois -> onSubmit(validaçao)
    <form action="" onSubmit={handleSubmit(onSubmit)}
      className='w-96 bg-white p-4 rounded-md border border-slate-300'
    >
      {/*                 NAME           */}
      <div  className='flex flex-col gap-2 mb-2'>
        <label htmlFor="name">Nome</label>
        <input
          className='h-10 pl-2 rounded-md border border-slate-300'
          type="text"
          id="name"
          placeholder='Digite o seu nome'
          {...register("name")}  />
        {errors.name && (<small className='text-red-500 italic'  > {errors.name.message} </small>)}
      </div>

      {/*                 lastNAME           */}

      <div  className='flex flex-col gap-2 mb-2'>
        <label htmlFor="lastname">Sobrenome</label>
        <input
          className='h-10 pl-2 rounded-md border border-slate-300'
          type="text"
          id="lastname"
          placeholder='Digite o seu Sobrenome'
          {...register("lastname")}  />
        {errors.lastname && (<small className='text-red-500 italic'  > {errors.lastname.message} </small>)}
      </div>

      {/*                 GENDER           */}

      <div  className='flex flex-col gap-2 mb-2'>
        <label htmlFor="gender">Gender</label>
        <select  id="gender" {...register("gender")}  className='h-10 pl-1 rounded-md border border-slate-300'>
          <option value="select">Selecione</option>
          <option value="male">Masculino</option>
          <option value="female">Feminino</option>
        </select>
        {errors.gender && (<small className='text-red-500 italic'  > {errors.gender.message} </small>)}
      </div>

      {/*                 E-mail          */}

      <div  className='flex flex-col gap-2 mb-2'>
        <label htmlFor="email">E-mail</label>
        <input
          className='h-10 pl-2 rounded-md border border-slate-300'
          type="email"
          id="email"
          placeholder='Digite o seu E-mail'
          {...register("email")}  />
        {errors.email && (<small className='text-red-500 italic'  > {errors.email.message} </small>)}
      </div>

      {/*                 Senha          */}

      <div  className='flex flex-col gap-2 mb-2'>
        <label htmlFor="password">Senha</label>
        <input
          className='h-10 pl-2 rounded-md border border-slate-300'
          type="password"
          id="password"
          placeholder='Digite a sua Senha'
          {...register("password")}  />
        {errors.password && (<small className='text-red-500 italic'  > {errors.password.message} </small>)}
      </div>

      {/*               Confirmar  Senha          */}

      <div  className='flex flex-col gap-2 mb-2'>
        <label htmlFor="confirmpassword">Confirmação de Senha</label>
        <input
          className='h-10 pl-2 rounded-md border border-slate-300'
          type="password"
          id="confirmpassword"
          placeholder='Confirme a sua Senha'
          {...register("confirmpassword")}  />
        {errors.confirmpassword && (<small className='text-red-500 italic'  > {errors.confirmpassword.message} </small>)}
      </div>

      {/*               Concordar com os Termos - checkbox         */}

      <div  className='flex flex-col gap-2 mb-2'>
        <div className="flex gap-2">
          <input
            type="checkbox"
            id="agree"
            placeholder='Confirme a sua Senha'
            {...register("agree")}  />
          <label htmlFor="agree">Aceitar Termos & Condições</label>
        </div>

        {errors.agree && (<small className='text-red-500 italic'  > {errors.agree.message} </small>)}
      </div>

      <button
        type='submit'
        className='w-full h-11 bg-cyan-400 rounded-md my-2 hover:bg-cyan-500 transition-all'>
        Cadastrar
      </button>

    </form>
  );
};

export default Form;
