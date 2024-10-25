import { useNavigate } from 'react-router-dom';
import { nomesAlimentos } from '../types';
import { Formik,Field,Form } from 'formik';
import * as Yup from 'yup';

import styles from './CalculadoraChurrasco.module.css';

const CalculadoraChurrasco = () => {
//              validar dados = Yup Framework 
  const esquemaValidacao = Yup.object().shape({
    pessoas:  Yup.number().min(1,'Numero de pessoas é obrigatorio') ,
    selecaoAlimentos: Yup.array().of(Yup.string())
      .test('check-selecaoAlimentos', 
        'Selecione pelo menos 1 alimento',
        (array) => array !== null && array!.length > 0),
  });



  const navigate = useNavigate();
  return (
    <div className={styles.container} >
      {/* Criar Formularios = Formik Framework    */}
      {/* Enviar os "values" para a pagina /resultado*/},
      {/* atraves do onSubmit na funcao navigate() */}
      {/* criar um estado com as variaveis que quero receber em /resultado  */}
      <Formik initialValues={{pessoas:0,selecaoAlimentos:[]}} 
        validationSchema={esquemaValidacao}  
        onSubmit={(values)=> {
          navigate('/resultado', {
            state:{
              pessoas:values.pessoas,
              alimentosSelecionados: values.selecaoAlimentos
            }
          });
          console.log('navegar para o /resultado apos submit');
        }} >
        {({errors,touched})=>(
          <Form>


            <div  className={styles.inputGroup}>
              <label htmlFor="pessoas" className={styles.inputLabel} >Numero de Pessoas</label>
              <Field name="pessoas" type="number" className={styles.inputField}  />
              {errors.pessoas && touched.pessoas ? (
                <p  className={styles.error}>{errors.pessoas} </p>
              ): null}
            </div>


            <h2>Selecione os alimentos para o churrasco: </h2>

            {Object.keys(nomesAlimentos).map((alimento)=> (
              <div className={styles.checkboxGroup}>
               
                <Field 
                  type="checkbox" 
                  name="selecaoAlimentos" 
                  value={alimento}
                  className={styles.checkboxInput}
                />
                <label htmlFor="selecaoAlimentos">{nomesAlimentos[alimento]}  </label>
              </div>
            ))}


            {errors.selecaoAlimentos && touched.selecaoAlimentos ? (<p className={styles.error}>{errors.selecaoAlimentos} </p>): null}

            <button type='submit' className={styles.calculateButton}>Calcular</button>
          </Form>
        )}
      </Formik>

    </div>
  );
};

export default CalculadoraChurrasco;