import {z} from 'zod';

export const formSchema = z.object({
  name:z.string().min(3,'O numero minimo de caracteres é 3.'),
  lastname:z.string().min(3,'O numero minimo de caracteres é 3'),
  gender:z.string().refine((field)=> field !== "select", {
    message:"Você precisa escolher um gênero"
  }),
  email:z.string().min(1, "O campo é obrigatorio").email("Utilize um e-mail válido"),
  password:z.string().min(6,"A senha precisa de ter 6 caracteres"),
  confirmpassword:z.string().min(6,"A confirmaçao de senha precisa de ter 6 caracteres"),
  agree:z.boolean().refine((field) => field === true,{
    message:"Você precisa de concordar com os termos"
  })

}).refine((field) => field.password === field.confirmpassword, {
  message: "As senhas precisam de ser iguais",
  path:["confirmpassword"]
});


export type FormSchema = z.infer<typeof formSchema>
